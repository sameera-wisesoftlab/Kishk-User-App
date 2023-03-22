import {StyleSheet, I18nManager} from 'react-native';
import globals from '../../lib/globals';

const images = {};

const styles = StyleSheet.create({
  modalStyle: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  popupContainer: {
    width: '100%',
    flexDirection: 'column',
    backgroundColor: globals.COLOR.background,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 'auto',
  },
  pic: {
    resizeMode: 'contain',
    width: 25,
    height: 25,
  },
  dayText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '3%',
    bottom: '4%',
  },
  Tuetext: {
    paddingLeft: 8,
    width: 25,
    height: 25,
    borderRadius: 15,
    backgroundColor: globals.COLOR.custombuttoncolor,

    left: 4,
  },
  Tuetext2: {
    paddingLeft: 8,
    width: 25,
    height: 25,
    borderRadius: 15,
    backgroundColor: globals.COLOR.custombuttoncolor,
    right: 4,
  },
  fontView: {
    textAlign: 'left',
    color: 'black',
    fontSize: 18,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
  },
  fontViewText: {
    color: globals.COLOR.grey,
    fontSize: 14,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
  },
  fontText: {
    color: globals.COLOR.backgroundColor,
    fontSize: 14,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
  },
  fifthView: {
    left: 5,
  },
  TuetextView: {
    right: 4,
  },
  dayText1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 10,
  },
  closeContainer: {
    alignSelf: 'flex-end',
    // paddingTop: '4%',
    paddingLeft: '3%',
  },
  popupBackground: {
    width: '100%',
    height: '100%',
    backgroundColor: globals.COLOR.transparent,
    zIndex: 1,
  },
  popupContentContainer: {
    top: 0,
    position: 'absolute',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    zIndex: 3,
  },
  radio: {
    width: 30,
    height: 30,
  },
  popupContent: {
    height: '40%',
    width: '100%',
    backgroundColor: globals.COLOR.white,
    alignItems: 'flex-end',
  },
  popupClose: {
    height: 30,
    width: 40,
    marginTop: 10,
  },
  popupCloseText: {
    textAlign: 'center',
    color: globals.COLOR.lightTextColor,
    fontSize: 18,
  },
  lineTop: {
    width: 150,
    borderColor: globals.COLOR.greyBackground,
    borderWidth: 2,
    borderRadius: 5,
    marginLeft: '28%',

    marginTop: '3%',
  },
  sortByText: {
    marginLeft: '5%',
    width: '95%',
    textAlign: 'left',
    color: globals.COLOR.Text,
    fontSize: 18,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
  },
  discountText: {
    textAlign: 'left',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: 16,
  },
  flatListStyle: {
    marginTop: 20,
    marginLeft: '5%',
    width: '95%',
    marginBottom: 20,
  },
  nodataf: {
    textAlign: 'center',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
  },
  listItem: {
    width: '95%',
    height: 40,
  },
  square: {
    height: 10,
    width: 10,
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  labelView: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
  },
  discountTextContainer: {
    width: '90%',
    height: 40,
    justifyContent: 'center',
  },
  textContainer: {
    marginLeft: '5%',
    marginRight: '5%',
    width: '90%',
    flexDirection: 'row',
  },
  favIconContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '10%',
    height: 40,
  },
});

export {images, styles};
