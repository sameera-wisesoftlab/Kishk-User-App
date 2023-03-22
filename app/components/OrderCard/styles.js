import {StyleSheet, I18nManager} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import globals from '../../lib/globals';

const images = {
  rate: require('../../assets/images/order/Rate.png'),
  reorder: require('../../assets/images/cart/cart.png'),
};

const styles = StyleSheet.create({
  fullWidthRowContainer: {
    width: '95%',
    // height: 130,

    backgroundColor: globals.COLOR.headerColor,
    borderRadius: 20,
    marginHorizontal: wp('3%'),
    marginVertical: '1%',
    padding: 3,
  },
  orderdetailContainer: {
    width: '95%',
    height: 150,

    backgroundColor: globals.COLOR.headerColor,
    borderRadius: 20,
    marginHorizontal: wp('3%'),
    bottom: 50,
    marginVertical: '15%',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    transform: [{scaleX: I18nManager.isRTL ? -1 : 1}],
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
    fontSize: I18nManager.isRTL ? 8 : 15,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
  },
  callImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    
  },
  rateImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  fullWidthColumnContainer: {
    width: '95%',
    // height: 125,
    //flex:1,
    backgroundColor: globals.COLOR.headerColor,
    borderRadius: 20,
    marginHorizontal: wp('1%'),
    marginVertical: '1.5%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:'1%',
    paddingBottom:'2%',
    // paddingLeft:'3%'
  },
  ratereorder: {
    width: '60%',
    bottom: 10,

    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  deliveredContainer: {
    width: '95%',
    height: 150,

    backgroundColor: globals.COLOR.headerColor,
    borderRadius: 20,
    marginHorizontal: wp('3%'),
    marginVertical: '2%',
    padding: 3,
  },
  rowContainerWish: {
    flexDirection: 'row',
    marginRight: '20%',

    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: "1%"
  },
  rowContainer: {
    marginTop: '4%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: I18nManager.isRTL ? '-9%' : '4%',
  },
  imageContainer: {
    marginLeft: wp('28%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '2%',
    bottom: 10,
  },
  orderImage: {
    marginLeft: wp('33%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '2%',

    //paddingBottom:20,
    //bottom: 10
  },
  imageabc: {
    height: 95,
    width: 95,
    borderRadius: 5,
  },
  imagewish: {
    height: 90,
    width: 90,
    borderRadius: 5,
  },
  labelContainer: {
    marginLeft: hp('2%'),
    // marginTop: '2%',
  },
  textContainerEdit: {
    width: '80%',
    flexDirection: 'row',
    //  left:5
  },
  itemNameText: {
    color: globals.COLOR.addressLabelColor,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    fontSize: I18nManager.isRTL ? 13 : 14,
    textAlign: 'left',
    width: wp('46%'),
    lineHeight: 24,
  },
  textConEdit: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
  },
  imageb: {
    height: 25,
    width: 25,
  },
  itemNameEdit: {
    color: globals.COLOR.grey,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: 12,
  },

  ratingRow: {
    flexDirection: 'row',
    //marginTop:'4%',
    // marginBottom:"1%",
  },
  numberRating: {
    fontSize: 12,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    color: globals.COLOR.greyText,
  },
  star: {
    // paddingLeft:'1%',
    marginHorizontal: '1%',
    alignSelf: 'center',
  },
  starStyle: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
  },

  eye: {
    paddingLeft: '4%',
    alignSelf: 'center',
  },
  eyeStyle: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
  },
  ratingK: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: 12,
    color: globals.COLOR.greyText,
  },
  kView: {
    paddingLeft: '2%',
  },
  priceNumView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: '2%',
  },
  numName: {
    left: 2,
  },
  itemNameTextNum: {
    color: globals.COLOR.addressLabelColor,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
    fontSize: 14,
  },
  countSelectView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: wp('14%'),
  },
  addingNum: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'grey',
  },
  symbolTextMinus: {
    textAlign: 'center',
    color: globals.COLOR.grey,
    fontFamily: globals.FONTS.poppinsRegular,
    fontSize: 13,
  },
  verticalDivider: {
    width: 0.5,
    height: '80%',
    backgroundColor: globals.COLOR.white,
  },
  countText: {
    width: 30,
    textAlign: 'center',
    color: globals.COLOR.white,
    fontFamily: globals.FONTS.poppinsRegular,
    fontSize: 13,
  },
  plusView: {
    width: 20,
    height: 20,
    borderWidth: 1,
    backgroundColor: 'black',
    borderRadius: 2,
  },
  movetoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '2%',
  },
  PriceView: {
    flexDirection: 'row',
    alignItems: 'center',
    //  marginHorizontal:'2%'
  },
  favIconContainer: {
    // paddingRight:'5%',
  },
  favIconStyle: {
    width: 20,
    height: 19,
  },
  itemNameWish: {
    color: globals.COLOR.grey,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: 12,
  },
  RemoveView: {
    marginHorizontal: wp('14%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  addtoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '3%',
  },
  binStyle: {
    width: 15,
    height: 19,
  },
  symbolTextPlus: {
    textAlign: 'center',
    color: globals.COLOR.headerColor,
    fontFamily: globals.FONTS.poppinsRegular,
    fontSize: 13,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor:'green',
    width: wp('52%'),
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: wp('10%'),
    right: 0,
  },
  lightAmt: {
    color: globals.COLOR.greyText,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoSemiBold,
    fontSize: I18nManager.isRTL ? 13 : 14,
  },
  hund: {
    color: globals.COLOR.text,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
    fontSize: I18nManager.isRTL ? 12 : 14,
  },
  cusText: {
    color: globals.COLOR.text,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: 10,
  },
  hun: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  into: {
    color: globals.COLOR.text,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: I18nManager.isRTL ? 12 : 16,
  },
  times: {
    paddingLeft: '4%',
  },
  cus: {
    backgroundColor: globals.COLOR.background,
    width: 80,
    height: 26,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  callView: {
    backgroundColor: 'white',
    height: hp('8%'),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '5%',
    paddingRight: '5%',
    flexDirection: 'row',
    bottom: hp('0.5%'),
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
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
    color: globals.COLOR.black,
    fontSize: I18nManager.isRTL ? 10 : 13,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
  },
  callImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  rightrate: {
    flexDirection: 'row',
    alignItems: 'center',
left:15
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
});

export {styles, images};
