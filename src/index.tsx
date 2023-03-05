import { NativeModules, Platform } from 'react-native';

export type AdvertisingInfoResponse = {
  id: string | null;
  isAdTrackingLimited: boolean;
};

export function getAdvertisingInfo(): Promise<AdvertisingInfoResponse> {
  if (Platform.OS === 'android') {
    return NativeModules.ReactNativeAaid.getAdvertisingInfo();
  } else {
    throw new Error('only Android is supported');
  }
}
