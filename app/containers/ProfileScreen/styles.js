import { StyleSheet, I18nManager } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import globals from '../../lib/globals';

let headerButtonContainerWidth =
  globals.SCREEN_SIZE.width - globals.MARGIN.marginTen * 2;
let headerButtonWidth =
  (headerButtonContainerWidth - globals.MARGIN.marginTen * 2) / 3;
const images = {
  mailIcon: require('../../assets/images/Profile/Mail.png'),
  phoneIcon: require('../../assets/images/Profile/Phone.png'),
  arrowIcon: require('../../assets/images/Profile/Card–5.png'),
  orderIcon: require('../../assets/images/Profile/Artboard–2.png'),
  wishlistIcon: require('../../assets/images/Profile/Artboard–3.png'),
  addressIcon: require('../../assets/images/Profile/Artboard–4.png'),
  langIcon: require('../../assets/images/Profile/Artboard–5.png'),
  supportIcon: require('../../assets/images/Profile/Artboard–6.png'),
  faqIcon: require('../../assets/images/Profile/Artboard–7.png'),
  privacyIcon: require('../../assets/images/Profile/Artboard–8.png'),
  action: require('../../assets/images/edit/Action.png'),
  termsIcon: require('../../assets/images/Profile/Artboard–9.png'),
  picon: require('../../assets/images/checkout/profile-image.jpg'),
  aboutIcon: require('../../assets/images/Profile/about-us-large.png'),
};
const styles = StyleSheet.create({
  screenMain: {
    flex: 1,
    width: globals.SCREEN_SIZE.width,
    height: globals.SCREEN_SIZE.height,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  imageContainer: {
    flex: 0.4,
    width: globals.SCREEN_SIZE.width,
    height: globals.SCREEN_SIZE.height,
    alignItems: 'center',
    paddingTop: '10%',
  },
  headerWrapper: {
    flex: 0.1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '4%',
  },
  languageContainer: {
    flex: 1,
    width: globals.SCREEN_SIZE.width,
    height: globals.SCREEN_SIZE.height,
    paddingTop: '25%',
  },
  imageWrapper: {
    paddingLeft: '5%',
  },
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  formWrapper: {
    flex: 1,
    paddingBottom: hp('4%'),
  },

  borderView: {
    width: '12%',
    height: 2,
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: '#ff8001',
    alignItems: 'center',
    justifyContent: 'center',
  },

  verifyWrapper: {
    paddingLeft: '20%',
  },
  editText: {
    color: '#ff8001',
    paddingLeft: '6%',
    fontSize: 16,
  },
  arrowImage: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
    paddingLeft: '5%',
    transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
  },
  digitCode: {
    fontSize: 17,
  },
  phoneImage: {
    width: 19,
    height: 19,
    resizeMode: 'contain',
  },
  mailImage: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  phoneNumber: {
    fontSize: 15,
  },
  enterDigit: {
    paddingTop: '25%',
  },
  reseondCode: {
    paddingTop: '9%',
  },
  buttonWrapper: {
    paddingTop: '20%',
  },
  submitText: {
    color: 'white',
  },
  contentWrapper: {
    paddingTop: hp('2%'),
  },

  profileWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '1%',
    paddingRight: '1%',
  },
  editSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  imageSection: {
    paddingLeft: '3%',
  },
  editButton: {
    paddingRight: '4%',
    paddingTop: hp('1.5%'),
  },
  detailsWrapper: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingLeft: '5%',
  },
  phoneLine: { flexDirection: 'row', width: '100%' },
  phoneIcon: { paddingRight: '5%', alignSelf: 'center' },
  emailLine: { flexDirection: 'row' },
  emailIcon: { paddingRight: '5%', alignSelf: 'center' },
  borderView: { justifyContent: 'center', flexDirection: 'row' },
  mainView: { flexDirection: 'row', justifyContent: 'center' },
  closeStyle: { resizeMode: 'contain', width: 30, height: 30 },

  borderStyle: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#F7F7F7',
    marginLeft: '16%',
    marginTop: -15,
  },
  logo: {
    width: 82,
    height: 82,
    resizeMode: 'cover',
    borderRadius: 40,
  },
  modallogo: {
    width: 100,
    height: 97,
    resizeMode: 'cover',
    borderRadius: 18,
    alignSelf: 'center',
  },

  Phone: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: 12,
    color: '#8B90A9',
  },

  mainList: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.openSansLight,

    paddingTop: 20,
    flex: 1,
  },

  edit: {
    width: 30,
    height: 30,
  },
  firstprofileWrapper: {
    backgroundColor: '#F6F6F6',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    height: hp('92%'),
  },
  insidecontentWrapper: {
    backgroundColor: 'white',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    flex: 1,
  },

  accountName: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 16,
    paddingRight: 17,
    color: '#343438',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
    fontSize: I18nManager.isRTL ? 14 : 15,
  },

  sName: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabic
      : globals.FONTS.cairoSemiBold,
    fontSize: 15,
    color: '#313131',
    //paddingLeft: '.8%',
  },
  fName: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
    fontSize: 15,
    paddingLeft: '1%',
    color: '#313131',
  },
  marginTen: {
    marginTop: 10,
  },
  marginFity: {
    marginTop: 15,
  },
  marginCust: {
    marginTop: 10,
    marginBottom: -15,
  },
  boxModalStyle: {
    width: wp('40%'),
    top: 80,
    left: 180,
    backgroundColor: 'white',
    flex: 0.2,
  },
  boxWrapperView: {
    marginLeft: '5%',
    marginRight: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'red',
    height: '100%',
  },
  logoutText: {
    // backgroundColor:'green',
    width: 130,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    //padding:10
  },
  line: {
    borderWidth: 0.2,
    width: '100%',
    borderColor: globals.COLOR.lightgrey,
    marginVertical: hp('1%'),
  },

  modalText: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    fontSize: I18nManager.isRTL ? 13 : 15,
  },
  lineBorder: {
    height: hp('.2%'),
    backgroundColor: '#F6F6F6',
    marginLeft: '5%',
    marginRight: '5%',
  },
  close: {
    left: wp('14%'),
    padding: 5,
    bottom: hp('2%'),
  },
});

export { images, styles };
