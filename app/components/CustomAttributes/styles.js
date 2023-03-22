import { StyleSheet, I18nManager } from 'react-native';
import globals from '../../lib/globals';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const images = {
  downArrow: require('../../assets/images/cart/arrow.png'),
};

const styles = StyleSheet.create({
  modalStyle: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  popupContainer: {
    width: '100%',
    flexDirection: 'column',
    backgroundColor: 'white',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 'auto',
  },
  closeContainer: {
    // paddingTop: '4%',
    // paddingLeft: '3%',
    // paddingBottom: '2%',
  },
  popupClose: {
    height: 30,
    width: 40,
    marginTop: 10,
  },
  pic: {
    resizeMode: 'contain',
    width: 25,
    height: 25,
  },
  cancelStyle: {
    color: globals.COLOR.black,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
    fontSize: 16,
    textAlign: 'left',
    width: '90%',
  },
  borderphoneb: {
    borderWidth: 1,
    marginHorizontal: '7.5%',
    height: 64,
    borderRadius: 5,
    borderColor: globals.COLOR.lightgrey,
    marginTop: 16,
    backgroundColor: globals.COLOR.backgroundColor,
  },
  borderphonebc: {
    borderWidth: 1,
    marginHorizontal: '7.5%',
    height: 160,
    width: 310,
    borderRadius: 5,
    borderColor: globals.COLOR.lightgrey,
    marginTop: 16,
    alignItems: 'flex-start',
  },
  modalHeader: {
    marginHorizontal: '6%',
    flexDirection: 'row',
    marginTop: 10,
  },
  phoneNo: {
    paddingLeft: '6%',
    marginTop: hp('.4%'),
  },
  phoneNoab: {
    paddingLeft: '6%',
    marginTop: hp('.4%'),
  },
  dropDownStyle: {
    borderColor: 'white',
    marginTop: 2,
    position: 'relative',
    zIndex: 10,
  },

  phoneStyle: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    color: globals.COLOR.grey,
    textAlign: 'center',
    fontSize: 16,
    textAlignVertical: 'center',
  },
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp('4%'),
  },
  phoneSectionb: {
    height: 40,
    width: '100%',
    flexWrap: 'wrap',
  },
  phoneSectionbc: {
    height: 100,
    marginLeft: 5,
    marginRight: 5,
    alignItems: 'flex-start',
  },
  subjectSection1: {
    paddingLeft: 13,
    width: '100%',
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
  },
  messageSection: {
    right: 5,
    width: '100%',
    height: 140,
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  boxeserror: {
    bottom: '24%',
    borderWidth: 0.5,
    borderColor: 'red',
    borderWidth: 1.5,
    height: 160,
    width: 310,
    borderRadius: 5,
    right: '2%',
  },
  boxerror: {
    borderWidth: 1.5,
    borderColor: 'red',
    height: 65,
    width: 310,
    borderRadius: 5,
    bottom: '65%',
    left: 3,
  },
  disableText: {
    fontSize: 15,
    color: globals.COLOR.blackTextColor,
    width: '100%',
    flexDirection: 'row',
    marginHorizontal: 5,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
  },
  arrow: {
    width: 13,
    height: 13,
    resizeMode: 'contain',
    tintColor: globals.COLOR.grey,
  },
  downArrow: {
    marginLeft: '10%',
    alignItems: 'center',
  },
  // Attrs style
  wrapper: {
    backgroundColor: 'white',
    // paddingLeft: '5%',
    paddingRight: '5%',
    // paddingBottom: '5%',
    paddingTop: '5%',
  },
  colo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '2%',
  },
  col: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '15%',
  },
  text: {
    paddingLeft: '6%',
  },
  box: {
    borderWidth: 0.5,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#EF6C00',
    left: 80,
    marginHorizontal: '2%',
  },
  boxPress: {
    borderWidth: 0.5,
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#EF6C00',
    left: 80,
    marginHorizontal: '2%',
  },
  box1: {
    borderWidth: 0.5,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#BF360C',
    left: 80,
    marginHorizontal: '2%',
  },
  box2: {
    borderWidth: 0.5,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#3E2723',
    left: 80,
    marginHorizontal: '2%',
  },
  box3: {
    borderWidth: 0.5,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#8B90A9',
    left: 80,
    marginHorizontal: '2%',
  },
  oval: {
    minWidth: 65,
    height: 32,
    borderColor: globals.COLOR.red,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    left: 18,
    marginRight: '2%',
    paddingLeft: '2.6%',
    paddingRight: '2.6%',
    backgroundColor: '#fff',
  },
  ovalBlur: {
    minWidth: 65,
    height: 30,
    borderColor: globals.COLOR.background,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    left: 18,
    marginRight: '2%',
    paddingLeft: '2.6%',
    paddingRight: '2.6%',
    backgroundColor: globals.COLOR.background,
  },
  ovBText: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabic
      : globals.FONTS.cairoRegular,
    fontSize: 14,
    color: globals.COLOR.black,
  },
  stbox: {
    flexDirection: 'row',
    backgroundColor: 'red'
  },
  colText: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoLight,
    fontSize: 15,
    color: globals.COLOR.greyText,
    minWidth: 60,
    textAlign: 'left',
    minWidth: 80,
  },
  ovText: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: 15,
    color: globals.COLOR.text,
  },
  color: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  coor: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },

  price: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dark: {
    textAlign: 'left',
    color: globals.COLOR.text,
    //fontFamily: globals.FONTS.cairoBold,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.cairoBold
      : globals.FONTS.cairoBold,
    fontSize: 18,
  },
  light: {
    textAlign: 'left',
    color: globals.COLOR.greyText,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoLight,
    textDecorationLine: 'line-through',
    fontSize: 14,
  },
  lights: {
    textAlign: 'left',
    color: globals.COLOR.greyText,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.cairoLight
      : globals.FONTS.cairoLight,
    textDecorationLine: 'line-through',
    fontSize: 14,
  },
  lightSAR: {
    textAlign: 'left',
    color: globals.COLOR.greyText,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoLight,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export { images, styles };
