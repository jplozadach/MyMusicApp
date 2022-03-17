import EncryptedStorage from 'react-native-encrypted-storage';
//import Storage from '@react-native-async-storage/async-storage'

export const save = async (key: string, value: any) => {
  let valueString = (value || '').toString();

  if (value !== null && typeof value === 'object') {
    valueString = JSON.stringify(value);
  }
  await EncryptedStorage.setItem(key, valueString);
};

export const getItem = (key: string, defaultValue: '') =>
  EncryptedStorage.getItem(key).then(value => value || defaultValue);

export function getObject<T>(key: string): Promise<T | null> {
  return EncryptedStorage.getItem(key).then(value => {
    const stringValue = value || '';

    if (!stringValue) {
      return null;
    }

    return JSON.parse(stringValue) as T;
  });
}

export const cleanAll = EncryptedStorage.clear;
