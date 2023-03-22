import {StyleSheet, I18nManager} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import globals from '../../lib/globals';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const images = {
  card: require('../../assets/images/checkout/Card.png'),
  arrow: require('../../assets/images/search/arrow.png'),
  phone: require('../../assets/images/SmallProductCard/headphone.png'),
  cancel: require('../../assets/images/checkout/Cancel.png'),
  editIcon: require('../../assets/images/addressCard/edit.png'),
  addressAddIcon: require('../../assets/images/addressCard/icon.png'),
  addIcon: require('../../assets/images/Profile/Plusicon.png'),
};

const styles = StyleSheet.create({
  screenMain: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: globals.COLOR.screenBackground,
  },
  screenContainerScrollView: {
    width: globals.SCREEN_SIZE.width,
    height: globals.SCREEN_SIZE.height,

    backgroundColor: 'white',
    flex: 1,
  },
  screenDesignContainer: {
    width: globals.SCREEN_SIZE.width,
    backgroundColor: globals.COLOR.background,
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
    fontSize: I18nManager.isRTL ? 16 : 16,
  },
  feb: {
    color: globals.COLOR.text,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
    fontSize: I18nManager.isRTL ? 12 : 14,
  },
  summary: {
    flex: 1,
    backgroundColor: '#F3F2F2',
  },
  cardContainer: {
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F2F2',
    paddingBottom: 8,
  },
  flatlistStyle: {
    flex: 1,
  },
  background: {
    backgroundColor: 'white',
  },
  cardImage: {
    width: 30,
    height: 30,
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
    fontSize: 15,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
  },
  listContainer: {
    backgroundColor: 'white',
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
  sliderView: {
    paddingBottom: 15,
    backgroundColor: 'white',
  },
  expecteddeliveryContainer: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  expecteddeliveryData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 50,
    borderRadius: 5,
    borderColor: '#D0D0D0',
    borderWidth: 1,
    alignItems: 'center',
    borderStyle: 'dashed',
    marginTop: 10,
    marginBottom: 10,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    width: 30,
    height: 30,
    marginRight: '2%',
  },
  expextedText: {
    color: '#8B90A9',
    fontSize: 15,
    paddingLeft: '3%',
    paddingRight: '2%',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
  },
  dateText: {
    color: '#343438',
    fontSize: 15,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoBold,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 4,
  },
  myOrdersContainer: {
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  myQuotationContainer: {
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 30,
  },
  underLineStyle: {
    marginTop: 11,
    width: '100%',
    height: 3,

    backgroundColor: '#FF2C2C',
  },
  transparentUnderLineStyle: {
    marginTop: 11,
    width: '85%',
    height: 2,
  },
  noDataText: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    color: '#4DAF50',
    fontSize: 15,
    paddingLeft: '2%',
    paddingRight: '2%',
  },
  ADSIcon: {
    width: 18,
    height: 18,
  },
  addressView: {
    left: 0,
    width: wp('90%'),
    // justifyContent: 'center',
    // alignItems: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameLabel: {
    top: 0,
    color: globals.COLOR.text,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
    fontSize: 18,
  },
  containers: {
    width: '100%',
    height: 30, //60
    flexDirection: 'row',
    marginVertical: 10,
    marginRight: '2%',
    alignItems: 'center',
  },
  atext: {
    color: globals.COLOR.text,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    fontSize: 13,
    marginLeft: 4,
  },
  checkBox: {
    height: 22,
    width: 22,
    borderRadius: 5,
    resizeMode: 'contain',
    //top:3
  },
});

export {images, styles};
