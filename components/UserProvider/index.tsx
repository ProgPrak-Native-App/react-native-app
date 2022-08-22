import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { getLocalStoreData, removeLocalStoreData, setLocalStoreData } from './store';
import AuthClient from '../../api/AuthClient';

interface UserProviderProps {
  children: React.ReactElement;
}

interface UserContextInterface {
  accountKey: string | undefined;
  sessionToken: string | undefined;
  setAccountKey: (accountKey: string) => void;
  login: (accountKey: string) => Promise<void>;
  register: () => Promise<void>;
  forgetUser: () => void;
}

const DEFAULT_CONTEXT_STATE: UserContextInterface = {
  accountKey: undefined,
  sessionToken: undefined,
  setAccountKey: contextMissing,
  login: contextMissing,
  register: contextMissing,
  forgetUser: contextMissing,
};

function contextMissing(): never {
  throw new Error('useUserContext can only be used within a UserProvider');
}

const client = new AuthClient();

const UserContext = createContext<UserContextInterface>(DEFAULT_CONTEXT_STATE);

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [accountKey, setAccountKey] = useState<string | undefined>();
  const [sessionToken, setSessionToken] = useState<string | undefined>();

  useEffect(() => {
    // initially load accountKey from storage
    getLocalStoreData().then((value) => {
      if (value) {
        setAccountKey(value);
      }
    });
  }, []);

  useEffect(() => {
    // write changes to storage whenever accountKey changes
    if (accountKey) {
      setLocalStoreData(accountKey);
    } else {
      removeLocalStoreData();
    }
  }, [accountKey]);

  useEffect(() => {
    // log in whenever accountKey changes and sessionToken is unset
    if (accountKey && !sessionToken) {
      login(accountKey);
    }
  }, [accountKey, sessionToken]);

  const register = useCallback(async () => {
    const flow = await client.startFlow('registration');
    const response = await client.finishRegistrationFlow(flow);

    setAccountKey(response.session.identity.traits.accountKey);
    setSessionToken(response.session_token);
  }, []);

  const login = useCallback(async (accountKey: string) => {
    const flow = await client.startFlow('login');
    const response = await client.finishLoginFlow(flow, accountKey);

    // TODO: when the session is close to expiring (as per response.session.expires_at), renew it
    setSessionToken(response.session_token);
  }, []);

  const forgetUser = useCallback(() => {
    setAccountKey(undefined);
    setSessionToken(undefined);
  }, []);

  return (
    <UserContext.Provider value={{ accountKey, sessionToken, setAccountKey, forgetUser, login, register }}>
      {children}
    </UserContext.Provider>
  );
};
