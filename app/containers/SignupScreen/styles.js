import { StyleSheet, I18nManager } from 'react-native';
import globals from '../../lib/globals';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const images = {
  backIcon: require('../../assets/images/ChooseLanguage/Back.png'),
  backgroundImage: require('../../assets/images/ChooseLanguage/Background.png'),
  check: require('../../assets/images/search/Radio.png'),
  checkBox: require('../../assets/images/search/radio-a.png'),
  checkBox: require('../../assets/images/search/radio-a.png'),
  male: require('../../assets/images/edit/Male.png'),
  female: require('../../assets/images/edit/Female.png'),
  cal: require('../../assets/images/edit/Calendar.png'),
};
import { heightPercentageToDP } from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  screenMain: {
    flex: 1,
    width: globals.SCREEN_SIZE.width,
    height: globals.SCREEN_SIZE.height,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  screenDesignContainer: {
    width: globals.SCREEN_SIZE.width,
    height: globals.SCREEN_SIZE.height,
  },
  bgroundImage: {
    flex: 1,

    resizeMode: 'cover',
    borderBottomWidth: 0,
    borderColor: globals.COLOR.lightgrey,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: globals.COLOR.grey,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: globals.INTEGER.opacityHigh,
    shadowRadius: 2,
    elevation: 2,
  },
  contentWrapper: {
    marginLeft:
      globals.SCREEN_SIZE.height <= 600
        ? wp('9%')
        : globals.SCREEN_SIZE.height <= 800
          ? wp('9%')
          : wp('14%'),

    // marginBottom: hp('2%'),
    // paddingTop: hp('0%'),
  },
  contentWrapperMain: {
    marginBottom: hp('1%'),
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
  contenttitle: {
    textAlign: 'left',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
    color: globals.COLOR.themeGreen,
    fontSize: I18nManager.isRTL ? 20 : 24,
  },
  SignText: {
    bottom: 14,
  },
  GetText: {
    bottom: 15,
  },
  backText: {
    textAlign: 'left',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
    color: 'black',
    fontSize: 24,
  },
  borderphoneb: {
    borderWidth: 1,
    // marginHorizontal: "7.5%",
    // height: 100,
    width: 295,
    borderRadius: 5,
    borderColor: globals.COLOR.lightgrey,
    marginTop: 10,
    backgroundColor: globals.COLOR.backgroundColor,
    // bottom: 18,
  },
  signhello: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneNo: {
    paddingLeft: '6%',
    // marginTop: hp('.2%'),
    flexDirection: 'row',
  },
  star: {
    color: 'red',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabic
      : globals.FONTS.cairoSemiBold,
    //fontSize:16
  },
  phoneStyle: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    color: globals.COLOR.grey,
    textAlign: 'left',
    fontSize: 12,
  },
  phoneSectionb: {
    right: 4,
  },
  secondSection1: {
    paddingLeft: 13,
    flexDirection: 'row',
    alignItems: 'center',
    //justifyContent: 'space-between',
    // height: '100%',
  },
  disableText: {
    // lineHeight: 20,
    marginBottom: 2,
    fontSize: 16,
    color: globals.COLOR.blackTextColor,
    width: '95%',
    flexDirection: 'row',
    marginLeft: 7,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
  },
  disableTextnum: {
    lineHeight: 20,
    fontSize: 16,
    color: globals.COLOR.blackTextColor,
    width: '80%',
    flexDirection: 'row',
    marginLeft: 5,
    //  paddingLeft:I18nManager.isRTL ?'12%':0,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    // fontFamily: I18nManager.isRTL ? globals.FONTS.notokufiArabic : globals.FONTS.cairoRegular,
  },
  borderphone: {
    borderWidth: 1,
    marginHorizontal: '7.5%',
    width: 295,
    borderRadius: 5,
    borderColor: globals.COLOR.lightgrey,
    backgroundColor: globals.COLOR.backgroundColor,
    marginTop: 10,
  },
  phoneSection: {
    flexDirection: 'row',
    marginBottom: 5,
    marginTop: 8,
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
    paddingLeft: 2,
    flexBasis: '70%',

    flexDirection: 'row',
  },
  semailView: {
    width: '80%',
    // backgroundColor:'yellow',
    // marginTop: '4%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // marginRight: wp('6%'),
    // // marginRight: 5,
    // //alignItems:'center',
    alignItems: 'center',

  },
  checkBox: {
    height: 20,
    width: 20,
    borderRadius: 5,
    resizeMode: 'contain',
  },
  TermsView: {
    // paddingRight: I18nManager.isRTL ? 6 : 1,
    marginRight:
      globals.SCREEN_SIZE.height <= 600
        ? wp('8%')
        : globals.SCREEN_SIZE.height <= 700
          ? wp('5%')
          : wp('0%'),
    paddingLeft: '2%',
  },
  semailStyle: {
    textAlign: 'center',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: I18nManager.isRTL
      ? globals.SCREEN_SIZE.height <= 600
        ? 12
        : globals.SCREEN_SIZE.height <= 800
          ? 11
          : 13.5
      : globals.SCREEN_SIZE.height <= 600
        ? 12
        : globals.SCREEN_SIZE.height <= 800
          ? 12
          : 14.5,
  },
  imag: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  acceptView: {
    marginHorizontal:
      globals.SCREEN_SIZE.height <= 600
        ? wp('8%')
        : globals.SCREEN_SIZE.height <= 800
          ? wp('2%')
          : wp('1.5%'),
    // marginLeft: globals.SCREEN_SIZE.height <= 600 ? wp('8%') : (globals.SCREEN_SIZE.height <= 700 ? wp('5%') : wp('2%'))
  },
  semailStyleb: {
    textAlign: 'center',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: I18nManager.isRTL
      ? globals.SCREEN_SIZE.height <= 600
        ? 12
        : globals.SCREEN_SIZE.height <= 800
          ? 11
          : 13.5
      : globals.SCREEN_SIZE.height <= 600
        ? 12
        : globals.SCREEN_SIZE.height <= 800
          ? 12
          : 14.5,
    textDecorationLine: 'underline',
    color: globals.COLOR.custombuttoncolor,
  },
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('3%'),

    //paddingLeft:'7%'
  },
  NewUser: {
    marginTop: '3%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alreadyStyle: {
    textAlign: 'center',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: I18nManager.isRTL ? 13 : 15,
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

    fontSize: I18nManager.isRTL ? 13 : 15,
  },
  genderLine: {
    flexDirection: 'row',
    alignItems: 'center',

    // flex:2
    marginBottom: heightPercentageToDP('2%'),
    marginTop: heightPercentageToDP('2%'),
    //justifyContent:'center'
  },
  checkImage: {
    paddingRight: '6.5%',
  },
  check: {
    width: 25,
    height: 25,
  },
  males: {
    width: 25,
    height: 25,
  },
  mText: {
    paddingRight: '5%',
    justifyContent: 'center',
  },
  gText: {
    paddingRight: '5%',
    justifyContent: 'center',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: 15,
  },
  calImage: {
    width: 30,
    height: 30,
  },
  calView: {
    flexDirection: 'row',
    marginLeft: -25,
    alignItems: 'center',

    //backgroundColor: 'red',
  },
  //mystyle
  CodeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 18,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    height: 60,
    borderColor: globals.COLOR.lightgrey,
    padding: 5,
  },
  enterV: {
    marginLeft: 10,
    width: 245,
    height: 60,
    //backgroundColor:'purple',
    justifyContent: 'center',
  },
  calViews: {
    paddingLeft: '2.5%',
    flexDirection: 'row',
  },
});

export { images, styles };
