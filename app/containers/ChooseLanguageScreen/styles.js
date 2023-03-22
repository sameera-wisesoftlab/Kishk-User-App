import {StyleSheet, I18nManager, Platform} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import globals from '../../lib/globals';
let headerButtonContainerWidth =
  globals.SCREEN_SIZE.width - globals.MARGIN.marginTen * 2;
let headerButtonWidth =
  (headerButtonContainerWidth - globals.MARGIN.marginTen * 2) / 3;
const images = {
  boyImage: require('../../assets/images/ChooseLanguage/Language.png'),
  boyImagegif: require('../../assets/images/ChooseLanguage/introscreen.gif'),
  varrow: require('../../assets/images/ChooseLanguage/barrow.png'),
  redFlag: require('../../assets/images/ChooseLanguage/union.png'),
  greenFlag: require('../../assets/images/ChooseLanguage/mask.png'),
  backgroundImage: require('../../assets/images/ChooseLanguage/NBackground.png'),
  bell: require('../../assets/images/SplashScreen/bell.gif'),
};

const styles = StyleSheet.create({
  screenMain: {
    flex: 1,

    backgroundColor: globals.COLOR.headerColor,
    // backgroundColor:'yellow',
  },
  screenMainContainer: {
    position: 'absolute',
    top: 0,
    width: globals.SCREEN_SIZE.width,
    height: globals.SCREEN_SIZE.height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgroundImage: {
    width: wp('100%'),
    height: hp('100%'),
    resizeMode: 'cover',
    marginTop: hp('5%'),
    bottom: hp('4.5%'),
    // borderWidth: 0.1,
  },
  imageContainer: {
    flex: 1,
    marginTop: hp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 230,
    height: 400,
    resizeMode: 'contain',
  },
  languageContainer: {
    flex: 1,
    marginTop: 40,
  },

  chooselanText: {
    marginVertical: hp('2%'),
  },
  chooseText: {
    // color:'black',
    //fontSize:16
    textAlign: 'center',
    fontSize: hp('2.8%'),
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    color: '#1d2226',
  },
  boxView: {
    height: 60,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '2%',
    marginHorizontal: '6%',
    borderRadius: 10,
    marginBottom: 15,
    borderColor: globals.COLOR.lightgrey,
    borderWidth: 0.4,
    backgroundColor: globals.COLOR.backgroundColor,
    shadowColor: globals.COLOR.grey,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: globals.INTEGER.opacityHigh,
    elevation: 10,
  },
  flagLine: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '5%',
  },
  flagIon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flagView: {
    width: 38,
    height: 18,
    borderRadius: 2,
  },
  arrowv: {
    marginRight: '4%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  varrow: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    transform: [{scaleX: I18nManager.isRTL ? -1 : 1}],
  },
  greenDesign: {
    marginTop: hp('10%'),
    width: 180,
    height: 260,
    resizeMode: 'contain',
    transform: [{scaleX: I18nManager.isRTL ? -1 : 1}],
  },
  engTexts: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    fontSize: 17,
  },

  engText: {
    paddingLeft: '12%',
  },
  mainbgImage: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: wp('100%'),
    height: hp('100%'),
    bottom: 4,
  },
});

export {images, styles};
