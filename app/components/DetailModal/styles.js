import {StyleSheet, I18nManager} from 'react-native';
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
    paddingBottom: 50,
  },
  closeContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: '4%',
    paddingLeft: '3%',
    paddingBottom: '2%',
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
  },
  borderphoneb: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '9%',
    marginVertical: '3%',
  },
  borderphonebc: {
    borderWidth: 1,
    marginHorizontal: '7.5%',
    height: 160,
    width: 310,
    borderRadius: 5,
    borderColor: globals.COLOR.lightgrey,
    marginTop: 16,
    backgroundColor: globals.COLOR.backgroundColor,
  },
  shold: {
    color: globals.COLOR.black,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: 14,
  },
  centi: {
    left: '65%',
  },
  modalHeader: {
    marginHorizontal: '6%',
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
    textAlign: 'left',
    fontSize: 12,
  },
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp('4%'),
  },
  phoneSectionb: {
    bottom: 8,
    right: 4,
  },
  phoneSectionbc: {
    bottom: 45,
    right: 4,
  },
  secondSection1: {
    paddingLeft: 13,
    flexBasis: '74%',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative',
    zIndex: 10,
  },
  disableText: {
    lineHeight: 20,
    fontSize: 15,
    color: globals.COLOR.blackTextColor,
    width: '80%',
    flexDirection: 'row',
    marginLeft: 5,
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
  item: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    color: globals.COLOR.grey,
    textAlign: 'center',
    fontSize: 15,
    marginLeft: 20,
    marginRight: 28,
    height: '100%',
    marginTop: 5,
  },
});

export {images, styles};
