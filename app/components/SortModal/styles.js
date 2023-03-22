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
    //	height: '100%',
    flexDirection: 'column',
    backgroundColor: 'white',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 1,
    // overflow:'hidden',
    marginTop: 'auto',

    //padding:'3%',
  },
  closeContainer: {
    alignSelf: 'flex-end',
    paddingRight: '3%',
    paddingTop: '4%',
    // paddingRight:'3%',
    paddingLeft: '3%',
    //   //paddingTop:'2%',
    paddingBottom: '2%',
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
    color: globals.COLOR.greyText,
    fontSize: 18,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabicBold
      : globals.FONTS.cairoBold,
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
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
  },
  discountText: {
    textAlign: 'left',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoSemiBold,
    fontSize: I18nManager.isRTL ? 13.5 : 16,
    color: globals.COLOR.greyText,
  },
  flatListStyle: {
    marginTop: 20,
    marginLeft: '5%',
    width: '95%',
    marginBottom: 20,
  },
  listItem: {
    width: '95%',
    height: 40,
    marginBottom: '5%',
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
