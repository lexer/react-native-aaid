import { NativeModules } from 'react-native';

export type AdvertisingInfoResponse = {
  id: string | null;
  isAdTrackingLimited: boolean;
};

type ReactNativeAaidType = {
  getAdvertisingInfo(): Promise<AdvertisingInfoResponse>;
};

const { ReactNativeAaidType } = NativeModules;

export default ReactNativeAaidType as ReactNativeAaidType;
