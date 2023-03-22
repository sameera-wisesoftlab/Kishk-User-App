import { StyleSheet, I18nManager } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import globals from '../../lib/globals';
let headerButtonContainerWidth =
  globals.SCREEN_SIZE.width - globals.MARGIN.marginTen * 2;
let headerButtonWidth =
  (headerButtonContainerWidth - globals.MARGIN.marginTen * 2) / 3;
const images = {};
const styles = StyleSheet.create({
  screenMain: {
    width: globals.SCREEN_SIZE.width,
    height: globals.SCREEN_SIZE.height,
    flexDirection: 'column',
    flex: 1,
  },
  imageContainer: {
    flex: 0.4,
    //backgroundColor:'red',
    width: globals.SCREEN_SIZE.width,
    height: globals.SCREEN_SIZE.height,
    alignItems: 'center',
    paddingTop: '10%',
  },
  languageContainer: {
    flex: 1,
    //backgroundColor:'green',
    width: globals.SCREEN_SIZE.width,
    height: globals.SCREEN_SIZE.height,
    //alignItems: 'center',
    paddingTop: '25%',
  },
  screenContainer: {
    flex: 1,
    backgroundColor: globals.COLOR.transparent,
    marginBottom: globals.INTEGER.screenBottom,
  },
  headerWrapper: {
    flex: 0.1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('3%'),
  },
  formWrapper: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: hp('1.5%'),
    //alignItems:'center'
  },
  sendPhone: {
    flexDirection: 'row',
    paddingTop: '7%',
  },
  otpWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    paddingTop: 5,
  },
  engButton: {
    width: 142,
    height: 50,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff8001',
  },
  borderView: {
    width: '12%',
    height: 2,
    //borderRadius: 5,
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: '#ff8001',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    paddingLeft: 0,
    height: 40,
    fontSize: 13,
    width: '15%',
    borderColor: 'gray',
    borderBottomWidth: 1.5,
    textAlign: 'center',
  },
  verifyText: {
    fontSize: 18,
    color: globals.COLOR.Text,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
  },
  verifyWrapper: {
    paddingLeft: '5%',
  },
  editText: {
    color: '#ff8001',
    paddingLeft: '6%',
    fontSize: 16,
  },
  imageWrapper: {
    paddingLeft: '5%',
  },
  arrowImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    paddingLeft: '5%',
    transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
  },
  digitCode: {
    fontSize: 17,
  },
  phoneNumber: {
    fontSize: 15,
  },
  enterDigit: {
    paddingTop: '25%',
  },
  reseondCode: {
    paddingTop: '9%',
  },
  buttonWrapper: {
    paddingTop: '20%',
  },
  submitText: {
    color: 'white',
  },
  contentWrapper: {
    paddingLeft: '5%',
    paddingRight: '2%',
    backgroundColor: 'white'
  },
  headingText: {
    textAlign: 'left',
    fontSize: 14,
    color: globals.COLOR.Text,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
  },
  descriptionText: {
    textAlign: 'left',
    fontSize: 13,
    color: '#232020',
    lineHeight: 26,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
  },
});

export { images, styles };
