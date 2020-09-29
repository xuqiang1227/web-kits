export type DeviceType = 'pc' | 'mobile' | 'ios' | 'android';
export enum Device {
  pc = "pc",
  mobile = "mobile",
  ios = "ios",
  android = 'android'
}

export const getDevice = (isMobile?: boolean): DeviceType => {
  let agent = navigator.userAgent;
  if (isMobile && /iphone/ig.test(agent)) {
    return Device.ios;
  }
  if (isMobile && /android/ig.test(agent)) {
    return Device.android;
  }
  if (/mobile|android|iphone/ig.test(agent)) {
    return Device.mobile;
  }
  return Device.pc;
}