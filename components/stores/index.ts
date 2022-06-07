import { useState, useEffect } from 'react';
import { getLocalStoreData, setLocalStoreData } from './store';


const parseJSONStoreData = (value: any, key = 'UserKey') => {
  const result = JSON.parse(value);

  return result ? result[key] : result;
};


export function useCurrentUser() {

    const [user, setUser] = useState();

// if things defined ín array change -> Component is called again
    useEffect(() => {
        getLocalStoreData().then((value) => {
            if (value) {
                const myData = parseJSONStoreData(value);
                setUser(myData);
            }
        });
    }, []);
    console.log("insideCurrUserFunction", user);

    return {user}

}