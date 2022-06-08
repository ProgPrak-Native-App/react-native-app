import AsyncStorage from '@react-native-async-storage/async-storage';


// fetch / generate Key and pass it to function

const storeKey = 'currentUser';

export const getLocalStoreData = async () => {
  try {
    const value = await AsyncStorage.getItem(storeKey);
    if (value !== null) {
      // value previously stored
      return value;
    }
  } catch (e) {
    // error reading value
    return null;
  }
};
export const setLocalStoreData = async (value: string) => {
  try {
    await AsyncStorage.setItem(storeKey, value);
  } catch (e) {
    // saving error
  }
};

export const removeLocalStoreData = async () => {
  try {
    await AsyncStorage.removeItem(storeKey);
  } catch (e) {
    // delete error
  }
};