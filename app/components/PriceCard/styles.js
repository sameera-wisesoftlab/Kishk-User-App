import { StyleSheet, I18nManager } from 'react-native';
import globals from '../../lib/globals';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  fullWidthRowContainer: {
    width: '100%',
    paddingBottom: hp('20%'),
    backgroundColor: globals.COLOR.headerColor,
  },
  formwrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '4%',
    marginTop: '2%',
  },

  fullContainer: {
    width: '100%',
    paddingBottom: hp('5%'),
    backgroundColor: globals.COLOR.headerColor,
    paddingTop: '5%',
  },
  wrapper: {
    flexDirection: 'row',
  },
  pricelight: {
    right: 3,
    top: 1,
  },
  deliverywrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '4%',
    marginTop: '2%',
  },
  deliverywrap1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '4%',
  },
  TextView: {
    fontSize: I18nManager.isRTL ? 13 : 15,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
    color: globals.COLOR.black,
    textAlign: 'left',
    marginLeft: I18nManager.isRTL ? 5 : 0,
  },
  TextViewLight: {
    fontSize: I18nManager.isRTL ? 14 : 15,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    color: globals.COLOR.black,
  },
  couponcode: {
    fontSize: 10,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    color: globals.COLOR.grey,
    textAlign: 'left',
    bottom: 5,
  },
  TextViewLightText: {
    fontSize: 13,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    color: globals.COLOR.black,
  },
});

export { styles };
