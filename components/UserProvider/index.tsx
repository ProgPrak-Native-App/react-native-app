import React, { useContext, createContext, useEffect, useState, useCallback } from 'react';
import { getLocalStoreData, setLocalStoreData } from './store';
import md5 from 'md5';

interface UserProviderProps {
  children: React.ReactElement;
}

interface UserContextInterface {
  accountKey: string | undefined;
  sessionToken: string | undefined;
  addUser: () => void;
  login: (accountKey: string) => void;
}

const DEFAULT_CONTEXT_STATE = {
  accountKey: undefined,
  sessionToken: undefined,
  addUser: () => console.log(''),
  login: () => console.log(''),
};

export const UserContext = createContext<UserContextInterface>(DEFAULT_CONTEXT_STATE);

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [accountKey, setAccountKey] = useState<string | undefined>();
  const [sessionToken, setSessionToken] = useState<string | undefined>();

  //triggered only once
  useEffect(() => {
    getLocalStoreData().then((value) => {
      if (value) {
        const myData = value;
        setAccountKey(myData);
      }
    });
  }, []);

  // if things defined ín array change -> Component is called again, basically
  useEffect(() => {
    if (accountKey) {
      const value = accountKey;
      (async () => await setLocalStoreData(value))();
    }
  }, [accountKey]);

  //useCallback used to automatically trigger rerender once user clicked button
  const addUser = useCallback(async () => {
    const postURL = await apiCall('https://auth.api.live.mindtastic.lol/self-service/registration/api', 'GET').then(
      (data) => data.ui.action
    );

    const accountKey = await apiCall(postURL, 'POST').then((data) => data.identity.traits.accountKey);

    setAccountKey(accountKey);
  }, []);

  //use this function for QR code login and pass accountKey from useUserContext as an argument
  const login = useCallback(async (accountKey:string) => {
    const postLoginURL = await apiCall('https://auth.api.live.mindtastic.lol/self-service/login/api', 'GET').then(
      (data) => data.ui.action
    );
    //couldnt try this out
    const sessionToken = await apiCall(postLoginURL, 'POST', { password: md5(accountKey) }).then((data) => data.session.id);

    setSessionToken(sessionToken);
  }, []);

  return <UserContext.Provider value={{ accountKey, sessionToken, addUser, login }}>{children}</UserContext.Provider>;
};

async function apiCall(url: RequestInfo, verb: 'GET' | 'POST' | 'PUT' | 'DELETE', data = {}) {
  if (!url) {
    throw new Error('no url');
  }

  const requestsWithBody = ['POST', 'PUT'];
  const body = requestsWithBody.includes(verb) ? { body: JSON.stringify(data) } : {};

  const response = await fetch(url, {
    method: verb,
    headers: {
      'Content-Type': 'application/json',
    },
    ...body,
  });

  return response.json();
}
