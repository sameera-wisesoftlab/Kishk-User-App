import {StyleSheet, I18nManager} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import globals from '../../lib/globals';

const styles = StyleSheet.create({
  fullWidthRowContainer: {
    width: '95%',
    alignSelf: 'center',

    flex: 1,
    backgroundColor: globals.COLOR.headerColor,
    borderRadius: 20,
    marginHorizontal: wp('2%'),
    marginTop: '4%',
    paddingTop: '3.3%',
    paddingBottom: '2%',

    // paddingHorizontal: 5,
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: wp('4%'),
  },
  orderKishk: {
    color: globals.COLOR.black,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
    fontSize: 14,
  },
  readyView: {
    //marginHorizontal: '30%'
    //paddingRight:'1%'
  },
  orderStatus: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    fontSize: I18nManager.isRTL ? 13 : 14,
  },
  placed: {
    marginHorizontal: wp('4%'),
  },
  placedabc: {
    color: globals.COLOR.grey,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: I18nManager.isRTL ? 12 : 13,
    textAlign: 'left',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    right: 7,
    // justifyContent: 'center',
  },
  imageContainer: {
    marginLeft: wp('6%'),
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: '2%',
  },
  labelContainer: {
    marginHorizontal: hp('1.2%'),
    marginTop: '2%',
  },
  textContainerEdit: {
    // width:'80%',
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
  priceNumView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '2%',
  },
  PriceView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemNameEdit: {
    color: globals.COLOR.grey,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: I18nManager.isRTL ? 11 : 13,
  },
  countSelectView: {
    marginHorizontal: wp('1.5%'),
  },
  date: {
    color: globals.COLOR.black,
    fontFamily: globals.FONTS.cairoBold,
    fontSize: I18nManager.isRTL ? 12 : 13,
  },
  doted: {
    marginTop: 10,
  },
  addtoViewdeliver: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '6%',
    marginVertical: '2%',
  },
  favIconContainer: {
    marginLeft: '3%',
  },
  itemNamereview: {
    color: globals.COLOR.black,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: I18nManager.isRTL ? 13 : 14,
  },
  addtoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '6%',
    marginVertical: '5%',
  },
  itemNameWish: {
    color: globals.COLOR.grey,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: 13,
  },
  itemNamecall: {
    color: globals.COLOR.black,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: 13,
  },
  PriceViewcall: {
    flexDirection: 'row',
    alignItems: 'center',
    left: '4%',
  },
  deleteIconContainer: {
    right: 3,
  },

  binStyle: {
    width: 15,
    height: 19,
  },
  imageabc: {
    height: I18nManager.isRTL ? 58 : 65,
    width: I18nManager.isRTL ? 58 : 65,
    borderRadius: 5,
  },
  cancelled: {
    color: globals.COLOR.orange,
  },
});

export {styles};
