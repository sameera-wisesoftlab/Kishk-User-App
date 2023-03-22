import { StyleSheet, I18nManager } from 'react-native';
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
  fullWidthColumnContainer: {
    width: '95%',
    backgroundColor: globals.COLOR.headerColor,
    borderRadius: 20,
    marginVertical: '1.5%',
    alignItems: 'center',
    paddingBottom: 10,
  },
  fullWidthRowContainer: {
    width: '95%',
    backgroundColor: globals.COLOR.headerColor,
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: '1%',
    padding: 3,
  },
  rowContainerWish: {
    flexDirection: 'row',
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '1%',
  },
  rowCon: {
    width: '95%',
    flexDirection: 'row',
    marginLeft: '2%',
    justifyContent: 'flex-start',
    marginTop: '1%',
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderImage: {
    marginLeft: wp('33%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '2%',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: 5,
    width: wp('25%') - 20,
    height: wp('25%'),
  },
  imagewish: {
    height: wp('25%'),
    width: '100%',
    borderRadius: 5,
    margin: 5,
  },
  imageabc: {
    height: wp('30%'),
    width: '90%',
    borderRadius: 5,
  },

  labelContainer: {
    marginHorizontal: 10,
    marginTop: 5,
  },
  cus: {
    backgroundColor: globals.COLOR.background,
    width: 80,
    height: 26,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cusText: {
    color: globals.COLOR.text,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: 10,
  },
  textContainerEdit: {
    // width:'80%',
    flexDirection: 'row',
    alignItems: 'center',
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
    fontSize: 14,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',

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
    width: 14,
    height: 14,
    resizeMode: 'contain',
  },
  ratingK: {

    fontSize: 12,
    color: globals.COLOR.greyText,
  },
  kView: {
    paddingLeft: '2%',
  },
  priceNumView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '2%',
    width: '75%',
  },
  priceRow: {
    flexDirection: 'row',
    //  alignItems:'center',
    width: '85%',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  lightAmt: {
    color: globals.COLOR.greyText,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoSemiBold,
    fontSize: 12,
  },
  hund: {
    color: globals.COLOR.text,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
    fontSize: I18nManager.isRTL ? 12 : 14,
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
    fontSize: 16,
  },
  times: {
    paddingLeft: '4%',
  },
  PriceView: {
    flexDirection: 'row',
    alignItems: 'center',
    //  marginHorizontal:'2%'
  },
  moveView: {
    flexDirection: 'row',
    alignItems: 'center',
    right: 3,
    width: '50%',
  },
  PriceStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '2%',
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
    marginHorizontal: 10,
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

  symbolTextPlus: {
    textAlign: 'center',
    color: globals.COLOR.headerColor,
    fontFamily: globals.FONTS.poppinsRegular,
    fontSize: 13,
  },
  movetoView: {
    flexDirection: 'row',
    marginTop: 10,
    width: '100%',
  },
  favIconContainer: {},
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
    alignItems: 'flex-end',
  },
  binStyle: {
    width: 15,
    height: 19,
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
  rate: {
    color: globals.COLOR.text,
    fontSize: 15,
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

  addtoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '3%',
    width: '92%',
  },

  rateImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },

  ratereorder: {
    width: '85%',
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

  orderdetailContainer: {
    width: '95%',
    height: 150,

    backgroundColor: globals.COLOR.headerColor,
    borderRadius: 20,
    marginHorizontal: wp('3%'),
    bottom: 50,
    marginVertical: '15%',
  },

  callText: {
    color: globals.COLOR.textBl,
    fontSize: 15,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
  },
  lightPrice: {
    fontSize: 12,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.poppinsRegular,
    color: globals.COLOR.greyText,
    textDecorationLine: 'line-through',
  },
});

export { styles, images };
