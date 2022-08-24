import React, { useContext, createContext, useEffect, useState, useCallback } from 'react';
import { getLocalStoreData, setLocalStoreData } from './store';

interface UserProviderProps {
  children: React.ReactElement;
}

interface UserContextInterface {
  userId: string | undefined;
  sessionToken: string | undefined;
  addUser: () => void;
  login: () => void;
}

const DEFAULT_CONTEXT_STATE = {
  userId: undefined,
  sessionToken: undefined,
  addUser: () => console.log(''),
  login: () => console.log(''),
};

export const UserContext = createContext<UserContextInterface>(DEFAULT_CONTEXT_STATE);

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [userId, setUserId] = useState<string | undefined>();
  const [sessionToken, setSessionToken] = useState<string | undefined>();

  //triggered only once
  useEffect(() => {
    getLocalStoreData().then((value) => {
      if (value) {
        const myData = value;
        setUserId(myData);
      }
    });
  }, []);

  // if things defined ín array change -> Component is called again, basically
  useEffect(() => {
    if (userId) {
      const value = userId;
      (async () => await setLocalStoreData(value))();
    }
  }, [userId]);

  //useCallback used to automatically trigger rerender once user clicked button
  const addUser = useCallback(async () => {
    const postURL = await apiCall('https://auth.api.live.mindtastic.lol/self-service/registration/api', 'GET').then(
      (data) => data.ui.action
    );

    const accountKey = await apiCall(postURL, 'POST').then((data) => data.identity.traits.accountKey);

    setUserId(accountKey);
  }, []);

  //use this function for QR code login
  const login = useCallback(() => {
    // login Api get
    // login post with flowId and inside body of request userId as password
  }, []);

  return <UserContext.Provider value={{ userId, sessionToken, addUser, login }}>{children}</UserContext.Provider>;
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
