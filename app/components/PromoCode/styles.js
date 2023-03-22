import { StyleSheet, I18nManager } from 'react-native';
import globals from '../../lib/globals';

const images = {
  arrowup: require('../../assets/images/cart/uparrow.png'),
  tick: require('../../assets/images/cart/tick.png'),
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: '2%',
  },
  closeText: {
    // fontFamily: I18nManager.isRTL
    //   ? globals.FONTS.notokufiArabic
    //   : globals.FONTS.cairoSemiBold,
    color: globals.COLOR.black,
    fontSize: 13,
    textAlign: 'center',
  },
  OrderCard: {
    // marginTop:'4%',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: '2%',
    paddingBottom: '1.5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  touch: {},

  arrowImage: {
    width: 14,
    height: 14,
    resizeMode: 'contain',
  },
  lineOne: {
    alignSelf: 'center',
  },
  textBox: {
    width: '96%',
    height: 50,
    borderRadius: 20,
    // borderWidth: 0.2,
    borderColor: globals.COLOR.grey,
    marginTop: '1%',
    marginLeft: '2%',
    marginRight: '3%',
    marginBottom: '1%',
    justifyContent: 'center',
  },
  applyBox: {
    width: '24%',
    height: '100%',
    borderWidth: 0.5,
    borderRadius: 14,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
  applyText: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    color: 'white',
    fontSize: 14,
    textAlign: 'left',
  },
  apply: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
    color: globals.COLOR.Text,
    fontSize: 15,
    textAlign: 'left',
  },
  input: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    color: globals.COLOR.greyText,
    fontSize: 14,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  pro: {
    width: '74%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 16,
    paddingLeft: '3%',
    justifyContent: 'center',
  },
  success: {
    backgroundColor: 'white',
    width: '100%',
    height: 62,
    borderRadius: 10,
    borderWidth: 0.2,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  tick: {
    width: 26,
    height: 26,
  },
  textLine: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginRight: '2%',
  },
  coupon: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    color: globals.COLOR.greyText,
    fontSize: I18nManager.isRTL ? 11 : 14,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  price: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
    color: globals.COLOR.text,
    fontSize: I18nManager.isRTL ? 14 : 15,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  closeView: {
    width: 18,
    height: 18,
    backgroundColor: globals.COLOR.background,
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 5,
    //backgroundColor:'green',
    //marginLeft: -8,
    // paddingTop: '.5%',
  },
  close: {
    //bottom: 5,
    //backgroundColor:'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  green: {},
});

export { images, styles };
