import {I18nManager} from 'react-native';

export const currentLangs = () => {
  return I18nManager.isRTL ? 'ar' : 'en';
};
