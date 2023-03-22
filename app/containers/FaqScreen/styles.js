import {StyleSheet, I18nManager, Platform} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import globals from '../../lib/globals';
import {ifIphoneX} from 'react-native-iphone-x-helper';

let headerButtonContainerWidth =
  globals.SCREEN_SIZE.width - globals.MARGIN.marginTen * 2;
let headerButtonWidth =
  (headerButtonContainerWidth - globals.MARGIN.marginTen * 2) / 3;
const images = {
  down: require('../../assets/images/cart/arrow.png'),
  up: require('../../assets/images/cart/uparrow.png'),
};

const styles = StyleSheet.create({
  screenMain: {
    width: globals.SCREEN_SIZE.width,
    height: globals.SCREEN_SIZE.height + 30,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  fq: {
    height: 10,
    width: 10,
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
    ...ifIphoneX(
      {
        marginTop: 40,
      },
      {
        marginTop: Platform.OS == 'ios' ? 40 : 0,
      },
    ),
  },
  formWrapper: {
    flex: 1,
    paddingTop: hp('0.4%'),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    // marginLeft:'1%',
    // marginRight:'1%'
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
    //fontFamily: globals.FONTS.avenirMedium,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.helvetica,
  },
  verifyWrapper: {
    paddingLeft: '5%',
    // paddingTop:hp('1.5%'),
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
    width: 25,
    height: 25,
    resizeMode: 'contain',
    paddingLeft: '5%',
    transform: [{scaleX: I18nManager.isRTL ? -1 : 1}],
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
    paddingTop: hp('2%'),
  },
  headingText: {
    fontSize: hp('2.1%'),
    color: '#232020',
    fontFamily: globals.FONTS.avenirMedium,
    textAlign: 'left',
  },
  descriptionText: {
    paddingTop: hp('1.5%'),
    fontSize: 10,
    color: globals.COLOR.greyText,
    lineHeight: 22,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.helvetica,
    textAlign: 'left',
  },
  renderContents: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.helvetica,
    // paddingTop:'1%',
    paddingRight: '4%',
    // paddingBottom:'1%',
    paddingLeft: '4%',
    color: globals.COLOR.greyText, //'#707070',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'left',
  },
  containerContents: {
    paddingRight: '4%',
    paddingLeft: '4%',
    color: globals.COLOR.greyText, //'#707070',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'left',
  },
  renderHeadings: {
    flexDirection: 'row',
    //padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    //backgroundColor: "white",
    borderBottomColor: 'lightgray',
    borderBottomWidth: 0.5,
    //width: "90%",
    paddingTop: '1%',
    //paddingRight:'2%',
    //marginTop:'3%',
    paddingBottom: '1%',
    marginLeft: '3.3%',
    marginRight: '3.3%',
    // textAlign: 'left'
    // paddingLeft:'2%'
  },
  rendercontentText: {
    // textAlign: 'left',
    //fontFamily: globals.FONTS.avenirMedium,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.helvetica,
    width: '95%',
    color: globals.COLOR.Text,
    fontSize: 14,
    paddingTop: hp('1%'),
    paddingBottom: hp('1.1%'),
    textAlign: 'left',
    fontSize: 14,
  },
  arrowI: {
    fontSize: 18,
    transform: [{scaleX: I18nManager.isRTL ? -1 : 1}],
  },
});

export {images, styles};
