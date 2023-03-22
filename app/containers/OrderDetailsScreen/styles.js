import { StyleSheet, I18nManager } from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import globals from '../../lib/globals';

const images = {
  card: require('../../assets/images/checkout/Card.png'),
  arrow: require('../../assets/images/search/arrow.png'),
  phone: require('../../assets/images/SmallProductCard/headphone.png'),
  cancel: require('../../assets/images/checkout/Cancel.png'),
  rate: require('../../assets/images/order/Rate.png'),
  reorder: require('../../assets/images/cart/cart.png'),
  call: require('../../assets/images/order/call.png'),
};

const styles = StyleSheet.create({
  screenMain: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  screenContainerScrollView: {
    width: globals.SCREEN_SIZE.width,

    backgroundColor: 'white',
    // flex: 1,
  },
  screenDesignContainer: {
    width: globals.SCREEN_SIZE.width,
    //paddingBottom: globals.INTEGER.screenPaddingFromFooter,
    backgroundColor: globals.COLOR.background,
    //height: globals.SCREEN_SIZE.height,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // marginBottom:'4%',
    flex: 1,
  },
  head: {
    //marginTop:'10%',
    marginLeft: '5%',
    marginRight: '5%',
  },
  dashView: {
    backgroundColor: 'white',
    paddingTop: '5%',
    paddingBottom: '5%',
  },
  cancelReasonView: {
    backgroundColor: 'white',
    padding: '5%',
    marginTop: 10,
  },
  expBox: {
    width: '92%',
    marginLeft: '4%',
    marginRight: '4%',
    borderWidth: 0.5,
    borderStyle: 'dotted',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    marginBottom: '10%',
    backgroundColor: 'white',
  },
  expBoxJust: {
    width: '92%',
    marginLeft: '4%',
    marginRight: '4%',
    paddingLeft: '2%',
    paddingRight: '2%',
    borderWidth: 0.5,
    borderStyle: 'dotted',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 70,
    marginBottom: '10%',
    backgroundColor: 'white',
  },
  textBox: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingLeft: '4%',
    paddingRight: '4%',
    width: widthPercentageToDP('90%'),
  },
  rightText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  expect: {
    color: globals.COLOR.greyText,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    fontSize: I18nManager.isRTL ? 13 : 16,
  },
  cancelBoxTitle: {
    color: globals.COLOR.black,
    textAlign: 'left',
  },
  cancelReasonText: {
    fontSize: 14,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    color: globals.COLOR.text,
    textAlign: 'left',
  },
  feb: {
    color: globals.COLOR.text,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
    fontSize: I18nManager.isRTL ? 12 : 14,
  },
  summary: {
    paddingTop: '3%',
    marginLeft: '4%',
    marginRight: '4%',

    // flex:1,
  },
  cardContainer: {
    // marginTop:'6%',
    width: '98%',

    // flex:1,

    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: '4%',
  },
  flatListStyle: {
    flex: 1,
  },
  background: {
    backgroundColor: 'white',
  },
  cardImage: {
    width: 30,
    height: 30,
  },
  container: {
    //width: globals.INTEGER.screenWidthWithMargin,
    height: 60,
    marginTop: 3,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  myOrdersContainer: {
    marginLeft: widthPercentageToDP('1%'),
    // marginTop:8,
    //height: 32,
    width: '40%',
    marginRight: '1%',
    //backgroundColor: 'red',
    //flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  myQuotationContainer: {
    //height: 32,
    // marginTop:8,
    width: '48%',
    marginRight: '1%',
    //backgroundColor:'green',
    //flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  underLineStyle: {
    marginTop: 10,
    width: '75%',
    height: 3,
    //borderRadius:2,
    backgroundColor: '#FF2C2C',
  },
  transparentUnderLineStyle: {
    marginTop: 10,
    width: '85%',
    height: 2,
    //borderRadius: 2,
    //backgroundColor: 'gray'
  },
  orderLabel: {
    color: '#FF2C2C',

    fontSize: 15,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
  },
  inactiveLabel: {
    color: '#8B90A9',
    fontSize: 15,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
  },
  method: {
    color: globals.COLOR.greyText,
    fontSize: 15,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
  },
  onlineText: {
    color: globals.COLOR.text,
    fontSize: 16,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    textTransform: 'uppercase',
  },
  listContainer: {
    backgroundColor: 'white',
    paddingBottom: '3%',
  },
  online: {
    flexDirection: 'row',
    marginLeft: '5%',
    marginRight: '5%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  onlineImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textOn: {
    paddingLeft: '4%',
  },
  onText: {
    color: globals.COLOR.greyText,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    fontSize: 16,
  },
  onSupportText: {
    color: globals.COLOR.text,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    fontSize: 16,
  },

  arrow: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
  },
  divide: {
    borderWidth: 0.5,
    borderColor: globals.COLOR.lightgrey,
    marginTop: '5%',
    marginBottom: '5%',
  },
  bottomView: {
    paddingTop: '5%',
    paddingBottom: '5%',
    backgroundColor: 'white',
    flex: 1,
  },
  exText: {
    marginLeft: '3%',
    marginRight: '4%',
  },
  callView: {
    backgroundColor: 'white',
    height: heightPercentageToDP('8%'),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '5%',
    paddingRight: '5%',
    flexDirection: 'row',
  },
  perView: {
    paddingRight: '2%',
  },
  person: {
    color: globals.COLOR.greyText,
    fontSize: 15,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
  },
  name: {
    color: globals.COLOR.textBl,
    fontSize: 15,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabicBold
      : globals.FONTS.cairoBold,
  },
  callText: {
    color: globals.COLOR.textBl,
    fontSize: 15,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
  },
  rate: {
    color: globals.COLOR.text,
    fontSize: 15,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
  },
  callImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rateImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },

  headerText: {
    color: globals.COLOR.text,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: 15,
    textAlign: 'left',
    width: '95%',
  },
  content: {
    marginTop: 5,
    padding: 20,
    backgroundColor: '#fff',
  },
});

export { images, styles };
