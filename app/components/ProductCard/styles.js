import {StyleSheet, I18nManager, Platform} from 'react-native';
import globals from '../../lib/globals';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  itemContainer: {
    //width: (globals.INTEGER.screenWidthWithMargin - globals.INTEGER.leftRightMargin) / 2,
    width: wp('45%'),
    // marginHorizontal:10,
    // marginLeft: 10,
    // marginRight: 5,
    paddingLeft: 0,
    paddingRight: 0,
    marginRight: 10,
    marginBottom: globals.INTEGER.leftRightMargin - 5,
    alignItems: 'center',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: globals.INTEGER.opacityLow,
    elevation: Platform.OS === 'ios' ? 1 : 3,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  labelView: {
    width: '90%',
    height: 25,
    flexDirection: 'row',
    zIndex: 10,
  },
  love: {
    width: 20,
    height: 20,
  },
  discountTextContainer: {
    width: '20%',
    position: 'absolute',
    top: 42,
    left: 14,
    zIndex: 10,
    borderColor: globals.COLOR.red,
    backgroundColor: globals.COLOR.red,
    height: 25,
    //height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderRadius: 8,
    justifyContent: 'center',
  },
  textContainer: {
    marginLeft: '2%',
    marginRight: '2%',
    width: '85%',
    marginBottom: '2%',
    //flexDirection: 'row',
    //backgroundColor:'red'
  },
  favIconContainer: {
    //right: 60,
    marginLeft: wp('34.5%'),
    // justifyContent:'flex-start',
    marginTop: 5,
    width: '10%',
    height: 40,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 8,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 10,
    // backgroundColor:'#D1D1D1',
    // marginLeft:5,
    // marginRight:5,
    // marginBottom:5,
    // borderRadius:10
  },
  discountText: {
    color: 'white',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoLight,
    fontSize: 11,
  },
  nameText: {
    color: '#000000',
    fontFamily: globals.FONTS.cairoLight,
    fontSize: I18nManager.isRTL ? 10 : 12,
    textAlign: 'left',
  },
  titleText: {
    color: '#000000',
    fontFamily: globals.FONTS.cairoSemiBold,
    fontSize: 14,
    textAlign: 'left',
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
    paddingLeft: '1%',
    alignSelf: 'center',
  },
  starStyle: {
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
  cus: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: I18nManager.isRTL ? 9.3 : 12,
    color: globals.COLOR.text,
  },
  eye: {
    alignSelf: 'center',
  },
  eyeStyle: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
  },
  custom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  custBox: {
    //minWidth: 50,
    //height: 20,
    right: I18nManager.isRTL ? 30 : null,
    paddingLeft: I18nManager.isRTL ? 5 : 10,
    paddingRight: I18nManager.isRTL ? 5 : 10,
    alignItems: 'center',
    //borderWidth:0.5,
    borderRadius: 5,
    justifyContent: 'center',
    backgroundColor: globals.COLOR.background,
  },
  nameV: {
    width: '60%',
  },

  secondContainer: {
    width: '90%',
    height: 35,
    //alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '3%',
    paddingLeft: '2%',
  },
  thirdContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '3%',
    marginRight: '2%',
    width: '85%',

    // width:'100%',
    // paddingLeft:'9%',
    paddingBottom: '5%',
    // paddingTop:'0%',
    //paddingRight:'5%',
  },
  textOne: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingRight: 3,
    alignItems: 'center',
  },
  priceStyle: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  lightPrice: {
    fontSize: I18nManager.isRTL ? 12 : 12,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    color: globals.COLOR.greyText,
    textDecorationLine: 'line-through',
  },
  lightPrice2: {
    fontSize: I18nManager.isRTL ? 9 : 12,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    color: globals.COLOR.greyText,
    // textDecorationLine: 'line-through',
    // marginTop:I18nManager.isRTL ?  3 : null,
  },
  light: {
    fontSize: I18nManager.isRTL ? 12 : 12,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    color: globals.COLOR.greyText,
  },
  darkPrice: {
    fontSize: I18nManager.isRTL ? 14 : 14,
    // fontWeight: 'bold',
    color: globals.COLOR.text,
    fontFamily: globals.FONTS.cairoBold,
    // marginTop: I18nManager.isRTL ? 2 : 2,
    alignItems: 'center',
  },

  plus: {
    alignSelf: 'center',
    paddingLeft: '10%',
    paddingBottom: '2%',
  },
  greenContainer: {
    height: 14,
    width: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: globals.COLOR.greenTexeColor,
    borderWidth: 1,
  },
  greenDot: {
    height: 5,
    width: 5,
    backgroundColor: globals.COLOR.greenTexeColor,
    borderRadius: 5,
  },
  sizeSelectView: {
    marginRight: 10,
    width: 55,
    height: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: globals.COLOR.lightGray,
    borderWidth: 1,
  },
  sizeText: {
    marginRight: 10,
    color: globals.COLOR.addressLabelColor,
    fontFamily: globals.FONTS.poppinsRegular,
    fontSize: 9.5,
  },
  dropDownArrow: {
    width: 10,
    height: 10,
    marginRight: 1,
  },
});

export {styles};
