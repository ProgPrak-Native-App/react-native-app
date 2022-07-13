import * as SecureStore from 'expo-secure-store';

const storeKey = 'currentUser';

export const getLocalStoreData = async () => SecureStore.getItemAsync(storeKey);
export const setLocalStoreData = async (value: string) => SecureStore.setItemAsync(storeKey, value);
export const removeLocalStoreData = async () => SecureStore.deleteItemAsync(storeKey);
