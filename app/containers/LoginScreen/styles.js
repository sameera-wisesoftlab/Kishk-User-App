import {StyleSheet, I18nManager} from 'react-native';
import globals from '../../lib/globals';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const images = {
  backIcon: require('../../assets/images/ChooseLanguage/Back.png'),
  backgroundImage: require('../../assets/images/ChooseLanguage/Background.png'),
};
const styles = StyleSheet.create({
  screenMain: {
    flex: 1,
    width: globals.SCREEN_SIZE.width,
    height: globals.SCREEN_SIZE.height,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  bgroundImage: {
    width: wp('100%'),
    height: hp('95%'),
    resizeMode: 'cover',
    marginTop: hp('5%'),
    bottom: hp('4%'),
  },
  contentWrapper: {
    paddingLeft: '7%',
    marginTop: hp('6%'),
    alignItems: 'flex-start',
    justifyContent: 'center',
    //height:80,
    // paddingTop: hp('0%'),
  },
  fir: {},
  contentWrapperMain: {
    // paddingTop: hp('10%'),
    height: '80%',
    marginHorizontal: '3%',
  },
  contenttitle: {
    textAlign: 'left',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
    color: globals.COLOR.themeGreen,
    fontSize: 24,
  },
  welView: {
    //height:28,
    bottom: 13,
  },
  uer: {
    //height:28,
  },
  contentHeader: {
    //textAlign:'center',
    textAlign: 'left',

    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
    color: globals.COLOR.themeGreen,
    fontSize: 24,
  },
  bacView: {
    // height:28,
    bottom: I18nManager.isRTL ? 18 : 28,
  },
  backText: {
    textAlign: 'left',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
    color: 'black',
    fontSize: 24,
  },
  borderphone: {
    borderWidth: 1,
    marginHorizontal: '7.5%',
    borderRadius: 5,
    borderColor: globals.COLOR.lightgrey,
    marginTop: 20,
    backgroundColor: globals.COLOR.backgroundColor,
  },
  phoneNo: {
    paddingLeft: '6%',
    marginTop: 5,
    //marginBottom: 5
  },
  phoneStyle: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    color: globals.COLOR.grey,
    textAlign: 'left',
  },
  phoneScetion: {
    flexDirection: 'row',
    //marginBottom: 5,
    //backgroundColor:'green',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  firstSection: {
    flexBasis: '30%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 15,
  },
  maskImage: {
    height: 20,
    width: 28,
    borderRadius: 5,
  },
  inpPhone: {
    flexDirection: 'row',
    marginLeft: 2,
  },
  secondSection: {
    paddingLeft: 5,
    flexBasis: '70%',

    flexDirection: 'row',
  },
  disableText: {
    lineHeight: 20,
    fontSize: 15,
    color: globals.COLOR.blackTextColor,
    width: '80%',
    flexDirection: 'row',
    marginLeft: 5,
    //  paddingLeft:I18nManager.isRTL ?'12%':0,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    //fontFamily: I18nManager.isRTL ? globals.FONTS.notokufiArabic : globals.FONTS.openSansLight,
  },
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('3%'),

    //paddingLeft:'7%'
  },
  orView: {
    flexDirection: 'row',
    marginHorizontal: '8%',
    marginTop: hp('2%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotView: {
    color: globals.COLOR.lightgrey,
  },
  orStyle: {
    color: globals.COLOR.custombuttoncolor,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
  },
  semailView: {
    marginTop: hp('1.5%'),
  },
  semailStyle: {
    textAlign: 'center',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    fontSize: I18nManager.isRTL
    ? 13:15,
  },
  NewUser: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ssignView: {
    paddingLeft: 4,
  },
  ssign: {
    textDecorationLine: 'underline',
    color: globals.COLOR.custombuttoncolor,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,

    fontSize: I18nManager.isRTL
    ? 13 : 15,
  },
  border: {
    width: '46%',
    //height: 50,
    //padding: 12,
    borderRadius: 1,
    borderColor: '#D0D0D0',
    borderWidth: 0.3,
    alignItems: 'center',
    borderStyle: 'dashed',
  },
});

export {images, styles};
