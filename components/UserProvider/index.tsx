import React, { useContext, createContext, useEffect, useState, useCallback } from 'react';
import { getLocalStoreData, setLocalStoreData } from './store';

interface UserProviderProps {
  children: React.ReactElement;
}

interface User {
  id: string;
}
interface UserContextInterface {
  user: User | undefined;
  addUser: (user: User) => void;
}

const DEFAULT_CONTEXT_STATE = {
  user: undefined,
  addUser: (user: User) => console.log(user),
};

export const parseJSONStoreData = (value: any, key = 'user') => {
  const result = JSON.parse(value);

  return result ? result[key] : result;
};

export const UserContext = createContext<UserContextInterface>(DEFAULT_CONTEXT_STATE);

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    getLocalStoreData().then((value) => {
      if (value) {
        const myData = parseJSONStoreData(value);
        setUser(myData);
      }
    });
  }, []);

  // if things defined ín array change -> Component is called again, basically
  useEffect(() => {
    if (user) {
      const value = JSON.stringify({ user });
      (async () => await setLocalStoreData(value))();
    }
  }, [user]);

  const addUser = useCallback((user: User) => {
    setUser(user);
  }, []);

  return <UserContext.Provider value={{ user, addUser }}>{children}</UserContext.Provider>;
};
