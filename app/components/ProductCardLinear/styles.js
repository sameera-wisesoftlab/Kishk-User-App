import {StyleSheet, I18nManager, Platform} from 'react-native';
import globals from '../../lib/globals';

const images = {
  backImage: require('../../assets/images/search/img1.png'),
  redHeart: require('../../assets/images/products/Love-a.png'),
  heart: require('../../assets/images/products/love.png'),
};

const styles = StyleSheet.create({
  itemContainer: {
    width:
      (globals.INTEGER.screenWidthWithMargin -
        globals.INTEGER.leftRightMargin) /
      2,

    marginLeft: globals.INTEGER.leftRightMargin,
    marginBottom: globals.INTEGER.leftRightMargin - 5,
    alignItems: 'center',
    //  borderColor:'#ddd',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: globals.INTEGER.opacityLow,
    elevation: Platform.OS === 'ios' ? 1 : 3,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  cardWrapper: {
    backgroundColor: 'white',
    borderWidth: 0.5,
    marginHorizontal: '5%',
    width: '94%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: globals.INTEGER.opacityLow,
    elevation: Platform.OS === 'ios' ? 1 : 3,
    borderColor: globals.COLOR.lightgrey,
    marginBottom: '3%',
    flexDirection: 'row',
  },
  heartContainer: {
    width: '10%',
    height: 40,
    position: 'absolute',
    right: 5,
    top: 10,
    zIndex: 10,
  },

  discountTextContainer: {
    width: '8%',
    position: 'absolute',
    top: 14,
    left: 22,
    zIndex: 10,
    borderColor: globals.COLOR.red,
    backgroundColor: globals.COLOR.red,
    height: 25,
    //height: '60%',
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 8,
    justifyContent: 'center',
  },

  textContainer: {
    marginLeft: '2%',
    marginRight: '2%',
    width: '90%',
  },

  heart: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  image: {
    height: 170,
    width: 120,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '38%',
  },
  discountText: {
    color: 'white',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoLight,
    fontSize: 11,
  },
  nameText: {
    color: globals.COLOR.text,
    fontFamily: globals.FONTS.cairoLight,
    fontSize: 12,
  },
  titleText: {
    color: globals.COLOR.greyText,
    fontFamily: globals.FONTS.cairoSemiBold,
    fontSize: 14,
    textAlign: 'left',
    lineHeight: 18,
  },
  textBox: {
    marginVertical: '2%',
    width: '60%',
  },
  ratingRow: {
    flexDirection: 'row',
    marginVertical: '2%',
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
    fontSize: 12,
    color: globals.COLOR.text,
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
  custom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginVertical:'2%'
  },
  custBox: {
    width: 50,
    height: 20,
    alignItems: 'center',
    //borderWidth:0.5,
    borderRadius: 5,
    backgroundColor: globals.COLOR.background,
  },

  secondContainer: {
    width: '90%',
    height: 35,
    justifyContent: 'flex-start',
    paddingTop: '3%',
    paddingLeft: '2%',
  },
  thirdContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: '2%',
    width: '85%',
    paddingBottom: '5%',
  },
  priceStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  lightPrice: {
    fontSize: 12,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.poppinsRegular,
    color: globals.COLOR.greyText,
    textDecorationLine: 'line-through',
  },
  lightPrice2: {
    fontSize: 12,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.poppinsRegular,
    color: globals.COLOR.greyText,
    textDecorationLine: 'line-through',
  },
  light: {
    fontSize: 12,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.poppinsRegular,
    color: globals.COLOR.greyText,
  },
  darkPrice: {
    fontSize: 16,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabicBold
      : globals.FONTS.cairoBold,
    color: globals.COLOR.text,
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

export {styles, images};
