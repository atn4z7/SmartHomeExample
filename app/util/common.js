import { Platform } from 'react-native';

export const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;

export function getTimeStamp() {
  return Date.now();
}
