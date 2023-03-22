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
  checkIcon: require('../../assets/images/ChooseLanguage/checkbox.png'),
  uncheckIcon: require('../../assets/images/ChooseLanguage/unCheckbox.png'),
  orderIcon: require('../../assets/images/Profile/Artboard–2.png'),
  wishlistIcon: require('../../assets/images/Profile/Artboard–3.png'),
  addressIcon: require('../../assets/images/Profile/Artboard–4.png'),
  check: require('../../assets/images/ChooseLanguage/unCheckbox.png'),
  checkBox: require('../../assets/images/ChooseLanguage/checkbox.png'),
  home: require('../../assets/images/Profile/home.png'),
  office: require('../../assets/images/Profile/Office.png'),
  old: require('../../assets/images/search/Radio.png'),
  new: require('../../assets/images/search/radio-a.png'),
};
const styles = StyleSheet.create({
  screenMain: {
    flex: 1,
    width: globals.SCREEN_SIZE.width,
    height: globals.SCREEN_SIZE.height,
    flexDirection: 'column',
  },
  imageWrapper: {
    paddingLeft: '5%',
  },
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    width: globals.SCREEN_SIZE.width,
    height: globals.SCREEN_SIZE.height,
    // marginBottom:100,
    marginBottom: hp('10%'),
  },
  lineBorder: {
    height: hp('.2%'),
    backgroundColor: '#F6F6F6',
    marginLeft: '5%',
    marginRight: '5%',
  },
  formWrapper: {
    flex: 1,
    paddingBottom: hp('5%'),
  },
  sendPhone: {
    flexDirection: 'row',
    paddingTop: '7%',
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
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  phoneNumber: {
    fontSize: 15,
  },

  submitText: {
    color: 'white',
  },
  contentWrapper: {
    paddingTop: hp('2%'),
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
  camStyle: {
    height: 26,
    width: 26,
    marginLeft: 6,
    position: 'absolute',
    alignSelf: 'center',
    top: 82,
  },
  mainViewStyle: {
    width: '25%',
    height: 3,
    borderRadius: 5,
    marginTop: hp('0.5%'),
    backgroundColor: '#FFF0F5',
  },
  borderStyle: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#F7F7F7',
    marginLeft: '16%',
    marginTop: -15,
  },
  logo: {
    width: 85,
    height: 82,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  modallogo: {
    width: 100,
    height: 97,
    resizeMode: 'cover',
    borderRadius: 18,
    alignSelf: 'center',
  },
  modalimageWarpper: {
    alignSelf: 'center',
  },

  Phone: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: 12,
    color: '#8B90A9',
  },

  listWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: hp('5%'),
    paddingLeft: '3%',
  },
  mainList: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.openSansLight,
    paddingTop: 20,
    flex: 1,
  },
  imageMain: {
    resizeMode: 'contain',
    width: 30,
    height: 30,
  },

  contentsWrapper: {},
  imagemainWrapper: {},
  arrowWrapper: {
    flexDirection: 'row',
    paddingRight: '3%',
  },
  edit: {
    width: 30,
    height: 30,
  },
  firstprofileWrapper: {
    backgroundColor: '#F6F6F6',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    flex: 1,
  },
  firstprofileWrappers: {
    backgroundColor: '#F6F6F6',
  },
  insidecontentWrapper: {
    backgroundColor: 'white',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    paddingTop: '5%',
    paddingBottom: '4%',
  },
  insidecontentWrappers: {
    backgroundColor: 'white',
    flex: 1,
  },

  accountName: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 18,
    paddingRight: 20,
    color: '#343438',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
    fontSize: I18nManager.isRTL ? 14 : 15,
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
  // addressNew: {
  //   flexDirection: 'row',
  //   paddingLeft: '4%',
  //   paddingRight: '4%',
  //   alignItems: 'center',
  //   //backgroundColor: 'green',
  // },
  checkBox: {
    height: 17,
    width: 22,
    borderRadius: 5,
    resizeMode: 'contain',
    //top:3
  },
  uncheckBox: {
    height: 20,
    width: 22,
    resizeMode: 'contain',
  },
  orderLabel: {
    paddingLeft: '3%',
    paddingRight: '3%',
    color: '#000000',
    fontSize: 16,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
  },
  borderphoneb: {
    borderWidth: 1,
    height: 62,
    width: 320,
    borderRadius: 5,
    borderColor: globals.COLOR.lightgrey,

    backgroundColor: globals.COLOR.backgroundColor,
    paddingLeft: '2%',
    marginLeft: '5%',
  },
  phoneNo: {
    paddingLeft: '5%',
    marginTop: hp('1%'),
    flexDirection: 'row',
  },
  phoneStyle: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    color: globals.COLOR.grey,
    textAlign: 'left',
    fontSize: 12,
  },
  star: {
    color: '#ff2c2c',
  },
  secondSection1: {
    paddingLeft: 18,
    flexBasis: '74%',

    flexDirection: 'row',
  },
  disableText: {
    lineHeight: 20,
    fontSize: 15,
    color: globals.COLOR.blackTextColor,
    width: '80%',
    flexDirection: 'row',

    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  phoneSectionb: {
    bottom: 8,

    right: 2,
  },
  borderphone: {
    borderWidth: 1,

    height: 62,
    width: 320,
    borderRadius: 5,
    borderColor: globals.COLOR.lightgrey,

    backgroundColor: globals.COLOR.backgroundColor,
    paddingLeft: '2%',
    marginLeft: '5%',
  },
  phoneSection: {
    flexDirection: 'row',
    //marginTop: 2,
    bottom: 5,
    paddingLeft: 0,
  },
  firstSection: {
    flexBasis: '30%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 12,
    height: 40,
    alignItems: 'center',
    //backgroundColor:'purple'
  },
  secondSection: {
    paddingLeft: 2,
    flexBasis: '70%',

    flexDirection: 'row',
  },
  heightWraaper: {
    paddingTop: '5%',
    paddingBottom: '5%',
  },
  iconWrapper: {
    flexDirection: 'row',
    marginLeft: 2,
  },
  apartmentWrapper: {
    paddingTop: '5%',
    paddingBottom: '3%',
  },
  poBox: { paddingTop: '2%', paddingBottom: '2%' },
  chooseText: {
    color: '#008DEA',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: 15,
  },
  chooseBox: {
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: '1%',
    paddingBottom: '2%',
    flexDirection: 'row',
  },
  bottomBorder: {
    borderColor: '#F8F8F8',
    borderWidth: 1,
    height: 4,
    backgroundColor: '#F8F8F8',
  },

  addressType: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  firstImage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Spacing: {
    marginLeft: '1%',
    marginRight: '3%',
    paddingTop: '6%',
  },
  typeText: {
    color: '#343438',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    fontSize: 15,
  },
  markSection: {
    //backgroundColor: 'green',
    flexBasis: 100,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '4.2%',
    paddingBottom: '15%',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
});

export { images, styles };
