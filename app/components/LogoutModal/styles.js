import {StyleSheet, I18nManager} from 'react-native';
import globals from '../../lib/globals';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const images = {
  // logoutImage:require("../../assets/images/profileicon/group.png"),
};

const styles = StyleSheet.create({
  modalMaincontentLogout: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalmainviewLogout: {
    backgroundColor: 'white',
    paddingBottom: '4%',
    paddingTop: '4%',
    paddingLeft: '2%',
    paddingRight: '2%',
    width: '96%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  logText: {
    marginTop: '5%',
  },
  log: {
    color: globals.COLOR.text,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
    fontSize: I18nManager.isRTL ? 14 : 18,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '10%',
    marginBottom: '10%',
    width: '90%',
    marginLeft: '10%',
    marginRight: '10%',
  },
  butCancel: {
    width: '48%',
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: globals.COLOR.lightgrey,
  },
  butLogout: {
    width: '48%',
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: globals.COLOR.red,
  },
  cancelText: {
    color: globals.COLOR.text,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    fontSize: I18nManager.isRTL ? 13 : 14,
  },
  logoutText: {
    color: 'white',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    fontSize: I18nManager.isRTL ? 13 : 14,
  },
});

export {images, styles};
