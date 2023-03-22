import {StyleSheet, I18nManager} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import globals from '../../lib/globals';

const images = {
  backgroundImage: require('../../assets/images/ChooseLanguage/Background.png'),
};
const styles = StyleSheet.create({
  screenMain: {
    flex: 1,
    width: globals.SCREEN_SIZE.width,
    height: globals.SCREEN_SIZE.height,
    flexDirection: 'column',
    backgroundColor: globals.COLOR.headerColor,
  },
  bgroundImage: {
    width: wp('100%'),
    height: hp('95%'),
    resizeMode: 'cover',
    marginTop: hp('5%'),
    bottom: hp('4%'),
  },
  formWrapper: {
    flex: 1,
    marginHorizontal: '3.5%',
  },
  contentWrapper: {
    paddingLeft: '7%',
    marginTop: hp('6%'),
  },
  contenttitle: {
    textAlign: 'left',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
    color: globals.COLOR.themeGreen,
    fontSize: I18nManager.isRTL ? 22 : 25,
  },
  verifyView: {
    bottom: 15,
  },
  contentHeader: {
    textAlign: 'left',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
    color: globals.COLOR.themeGreen,
    fontSize: 25,
  },

  backText: {
    textAlign: 'left',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
    color: 'black',
    fontSize: 25,
  },
  accView: {
    bottom: 28,
  },
  VerifyView1: {
    marginTop: 5,
    marginLeft: 20,
  },
  VerifyT: {
    textAlign: 'left',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    color: globals.COLOR.grey,
    fontSize: 14,
  },
  CodeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 18,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 35,
    height: 60,
    borderColor: globals.COLOR.lightgrey,
    padding: 5,
  },

  enterV: {
    marginLeft: I18nManager.isRTL ? 5 : 10,
    width: 165,
    height: 60,
    //backgroundColor:'purple',
    justifyContent: 'center',
  },
  resendV: {
    alignItems: 'flex-end',
    padding: 10,
    marginRight: 10,
  },
  disableText: {
    fontSize: I18nManager.isRTL ? 14 : 15,
    color: globals.COLOR.black,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    marginLeft: 5,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
  },
  ResendT: {
    color: globals.COLOR.custombuttoncolor,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,

    fontSize: I18nManager.isRTL ? 14 : 15,
  },
  ResendTgrey: {
    color: 'gray',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,

    fontSize: I18nManager.isRTL ? 14 : 15,
  },
  reseondCode: {
    paddingTop: hp('1%'),
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 16,
  },
  resedText: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    fontSize: I18nManager.isRTL ? 14 : 15,

    textAlign: 'right',
    color: 'gray',
  },
  resedtextOrange: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    fontSize: I18nManager.isRTL ? 14 : 15,

    color: globals.COLOR.custombuttoncolor,
    paddingLeft: '3%',
    paddingRight: '3%',
  },
  buttonWrapper: {
    paddingTop: hp('7%'),
    alignItems: 'center',
  },
});

export {images, styles};
