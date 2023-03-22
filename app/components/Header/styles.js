import {StyleSheet, I18nManager} from 'react-native';
import globals from '../../lib/globals';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const images = {
  backImage: require('../../assets/images/ChooseLanguage/Back.png'),
  crossImage: require('../../assets/images/header/cross.png'),
  love: require('../../assets/images/header/love-b.png'),
  loveRed: require('../../assets/images/products/Love-a.png'),
  logo: require('../../assets/images/header/logo.png'),
  rightIcon: require('../../assets/images/header/rightIcon.png'),
  searchIcon: require('../../assets/images/header/search.png'),
  share: require('../../assets/images/header/Share.png'),
  bellIcon: require('../../assets/images/header/bell.png'),
  bell: require('../../assets/images/header/bell.png'),
  bbell: require('../../assets/images/header/bbell.png'),
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    height: globals.INTEGER.headerHeight,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: globals.COLOR.headerColor,
    marginTop: hp('2%'),
  },
  orderContainer: {
    height: globals.INTEGER.headerHeight + 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: globals.COLOR.headerColor,
  },
  leftIconContainer: {
    marginTop: hp('1%'),
    paddingLeft:
      globals.SCREEN_SIZE.width <= 320
        ? globals.MARGIN.marginEight
        : globals.MARGIN.marginFifteen,
    paddingRight:
      globals.SCREEN_SIZE.width <= 320
        ? globals.MARGIN.marginEight
        : globals.MARGIN.marginFifteen,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    flexDirection: 'row',
  },
  leftIconContainercartnew: {
    marginTop: hp('1%'),
    paddingLeft:
      globals.SCREEN_SIZE.width <= 320
        ? globals.MARGIN.marginTwelve
        : globals.MARGIN.marginFifteen,
    paddingRight:
      globals.SCREEN_SIZE.width <= 320
        ? globals.MARGIN.marginTen
        : globals.MARGIN.marginFifteen,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    flexDirection: 'row',
    // backgroundColor:'red'
  },
  headerTitlesContainer: {
    flex: 1,
    left: 20,
    position: 'absolute',
    height: '100%',
  },
  topHeader: {
    alignItems: 'stretch',
    width: 24,
    height: 24,
    transform: [{scaleX: I18nManager.isRTL ? -1 : 1}],
  },
  topHeaderClose: {
    alignItems: 'stretch',
    width: 24,
    height: 24,
    transform: [{scaleX: I18nManager.isRTL ? -1 : 1}],
    tintColor: globals.COLOR.black,
  },
  reverse: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoLight,
    fontSize: I18nManager.isRTL ? 12 : 14,
    width: 200,
    // height:30,
    alignItems: 'flex-start',
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    // backgroundColor:'green',
    //textAlign: I18nManager.isRTL ? 'left' : 'right',
    // marginTop:I18nManager.isRTL ? 10 :null,
    //paddingTop: I18nManager.isRTL ? 10 : 0,
  },
  headerTitleContainer: {
    height: '100%',
    marginTop: hp('3.5%'),
    marginRight: '25%',
  },
  headerTitleText: {
    textAlign: 'left',
    color: globals.COLOR.textColor,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
    fontSize: 18,
  },
  headerLogo: {
    height: 20,
    width: 120,
  },
  rightIconContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    height: '100%',
    right: 0,
  },
  SignTitleText: {
    textAlign: 'right',

    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    fontSize: I18nManager.isRTL ? 12 : 15,
  },
  rightWordContainer: {
    flex: 1,
    width: 110,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: globals.COLOR.lightgrey,
    position: 'absolute',
    height: 30,
    right: 20,
    borderRadius: 5,
  },
  progileIconContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp('2%'),
  },
  rightIcon: {
    marginRight: 25,
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  bellIcon: {
    marginRight: 25,
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  bellIcons: {
    marginRight: 25,
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  profileIcon: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    marginRight: 20,
  },
  filterContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: globals.MARGIN.marginTen,
    height: '100%',
  },
  caseFilterDropDownTextStyle: {
    textAlign: 'center',
    color: globals.COLOR.white,
    fontFamily: globals.FONTS.avenirLight,
    fontSize: globals.SCREEN_SIZE.width * 0.037,
  },
  log: {
    width: 40,
    height: 40,
    // transform: [{scaleX: I18nManager.isRTL ? -1 : 1}],
  },
  searchBox: {
    borderWidth: 0.5,
    borderColor: globals.COLOR.background,
    backgroundColor: globals.COLOR.background,
    width: '80%',
    height: 40,
    borderRadius: 10,
    right: 20,
    left: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  searchCat: {
    borderWidth: 0.5,
    borderColor: globals.COLOR.background,
    backgroundColor: globals.COLOR.background,
    width: '90%',
    height: 40,
    borderRadius: 10,
    marginLeft: '2%',
    marginRight: '2%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBoxCategory: {
    borderWidth: 0.5,
    borderColor: globals.COLOR.background,
    backgroundColor: globals.COLOR.background,
    width: '90%',
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  search: {
    width: 25,
    height: 25,
  },
  textView: {
    // marginLeft: 10,
    //backgroundColor:'red',
    width: 200,
    alignItems: 'flex-start',
  },
  searchIcon: {
    justifyContent: 'center',
  },
  searchIconCategory: {
    justifyContent: 'center',
  },
  textIn: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoLight,
    fontSize: 12,
    textAlign: I18nManager.isRTL ? 'left' : 'right',
  },
  textInPlace: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoLight,
    fontSize: 12,
    //textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  loveView: {
    right: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    height: '100%',
  },
  love: {
    height: 30,
    width: 30,
    transform: [{scaleX: I18nManager.isRTL ? -1 : 1}],
  },
  title: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingLeft: '10%',
  },
  leftHead: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    fontSize: I18nManager.isRTL ? 15 : 18,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  leftHeadBold: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
    fontSize: I18nManager.isRTL ? 14 : 18,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  head: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
    fontSize: I18nManager.isRTL ? 15 : 18,
    textAlign: 'left',
    color: globals.COLOR.text,
  },
  subHead: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabic
      : globals.FONTS.cairoSemiBold,
    fontSize: 14,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    color: globals.COLOR.text,
  },
  leftHeadPro: {
    marginLeft: '3%',
    marginTop: '2%',
    flexDirection: 'row',
    alignItems: I18nManager.isRTL ? 'flex-end' : 'flex-start',
  },
  notifyCount: {
    width: 20,
    height: 20,
    backgroundColor: '#ff2c2c',
    borderRadius: 10,
    position: 'absolute',
    right: 15,
    top: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notifyText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 8,
  },
});

export {images, styles};
