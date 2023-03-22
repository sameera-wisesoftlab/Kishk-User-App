import {Platform, Dimensions, I18nManager} from 'react-native';
import {getStatusBarHeight, getBottomSpace} from 'react-native-iphone-x-helper';

let {height, width} = Dimensions.get('window');
let headerHeight = 50;
let footerTabBarHeight = 80;
let screenMargin = 20;
let screenPaddingFromFooter = 5;

module.exports = {
  DEVICE_TYPE: Platform.OS === 'ios' ? 1 : 2,
  DEVICE_TYPE_STRING: Platform.OS,
  SPLASH_DELAY: 3000,
  SCREEN_SIZE: {
    width: width,
    height: height,
  },
  ALERT_MESSAGES: {
    noInternet: I18nManager.isRTL
      ? 'لا يوجد اتصال بابشبكة'
      : 'No Network Connection',
  },
  COLOR: {
    headerColor: '#ffffff',
    backgroundColor: 'white',
    black: 'black',
    custombuttoncolor: '#ff2c2c',
    lightgrey: '#ececec',
    grey: 'grey',
    background: '#F6F6F6',
    red: '#ff2c2c',
    darkRed: '#db0000',
    text: '#343438',
    greyText: '#8B90A9',
    textGrey: '#363636',
    ItemColor: '#DCDCDC',
    transparent: 'transparent',
    border: '#BFBFBF',
    green: '#4CAF50',
    textBlack: '#000000',
    textBl: '#242323',
    disabled: '#808080',
    orange: '#FF7F0E',
    screenBackground: '#fff',
  },
  INTEGER: {
    headerHeight: headerHeight,
    footerTabBarHeight: footerTabBarHeight,
    screenPaddingFromFooter: screenPaddingFromFooter,
    screenWidthWithMargin: width - 2 * screenMargin,
    screenContentHeight:
      height -
      (footerTabBarHeight +
        headerHeight +
        getStatusBarHeight('safe') +
        getBottomSpace() +
        screenPaddingFromFooter),
    leftRightMargin: screenMargin,
    statusBarHeight: getStatusBarHeight('safe'),
    bottomSpace: getBottomSpace(),
    opacityHigh: Platform.OS == 'ios' ? 0.2 : 0.8,
    opacityMedium: Platform.OS == 'ios' ? 0.2 : 0.5,
    opacityLow: Platform.OS == 'ios' ? 0.2 : 0.2,
  },
  FONTS: {
    cairoBlack: 'Cairo-Black',
    cairoLight: 'Cairo-Light',
    cairoBold: 'Cairo-Bold',
    cairoRegular: 'Cairo-Regular',
    cairoSemiBold: 'Cairo-SemiBold',
    cairoExtraLight: 'Cairo-ExtraLight',
    notokufiArabic: 'NotoKufiArabic',
    notokufiarabicBold: 'NotoKufiArabic-Bold',
  },
  FONTSIZE: {
    fontSizeSeven: 7,
    fontSizeEight: 8,
    fontSizeNine: 9,
    fontSizeTen: 10,
    fontSizeEleven: 11,
    fontSizeTwelve: 12,
    fontSizeThirteen: 13,
    fontSizeFourteen: 14,
    fontSizeFifteen: 15,
    fontSizeSixteen: 16,
    fontSizeSeventeen: 17,
    fontSizeEighteen: 18,
    fontSizeTwenty: 20,
    fontSizeTwentyTwo: 22,
    fontSizeTwentyFour: 24,
  },
  MARGIN: {
    marginOne: 1,
    marginTwo: 2,
    marginThree: 3,
    marginFour: 4,
    marginFive: 5,
    marginSix: 6,
    marginSeven: 7,
    marginEight: 8,
    marginNine: 9,
    marginTen: 10,
    marginTwelve: 12,
    marginThirteen: 13,
    marginFifteen: 15,
    marginEighteen: 18,
    marginTwenty: 20,
  },
};
