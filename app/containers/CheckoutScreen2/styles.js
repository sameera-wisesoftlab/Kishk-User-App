import { StyleSheet, I18nManager } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import globals from '../../lib/globals';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

let headerButtonContainerWidth =
  globals.SCREEN_SIZE.width - globals.MARGIN.marginTen * 2;
let headerButtonWidth =
  (headerButtonContainerWidth - globals.MARGIN.marginTen * 2) / 3;

const images = {
  online: require('../../assets/images/checkout/Card.png'),
  cardIcon: require('../../assets/images/checkout/Card-icon.png'),
  offline: require('../../assets/images/checkout/online.png'),
  cash: require('../../assets/images/checkout/Cod.png'),
  downArrow: require('../../assets/images/cart/arrow.png'),
  upArrow: require('../../assets/images/cart/uparrow.png'),
  tick: require('../../assets/images/checkout/tick.png'),
  radio: require('../../assets/images/slider/round.png'),
};

const styles = StyleSheet.create({
  screenMain: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  screenContainerScrollView: {
    width: globals.SCREEN_SIZE.width,
    // height: globals.SCREEN_SIZE.height,
    backgroundColor: 'white',
    flex: 1,
    // marginBottom:hp('20%')
  },

  screenDesignContainer: {
    flex: 1,
    width: globals.SCREEN_SIZE.width,
    // paddingBottom: globals.INTEGER.screenPaddingFromFooter,
    //backgroundColor:globals.COLOR.background,
    // height: globals.SCREEN_SIZE.height,

    flex: 1,
  },
  sliderView: {
    paddingTop: hp('2%'),
    paddingBottom: hp('5%'),
    backgroundColor: 'white',
  },
  paySection: {
    width: globals.SCREEN_SIZE.width,
    // paddingBottom: globals.INTEGER.screenPaddingFromFooter,
    backgroundColor: globals.COLOR.background,
    flex: 0.2,
    marginTop: '5%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingLeft: '4%',
    bottom: hp('4%'),
  },
  sectionPay: {
    width: globals.SCREEN_SIZE.width,
    // paddingBottom: globals.INTEGER.screenPaddingFromFooter,
    backgroundColor: 'white',
    bottom: hp('5%'),
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: hp('5%'),
    marginBottom: hp('20%'),
  },
  online: {
    flexDirection: 'row',
    marginLeft: '5%',
    marginRight: '5%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  onlineImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textOn: {
    paddingLeft: '4%',
  },
  onText: {
    color: globals.COLOR.text,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    fontSize: 16,
  },
  arrow: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  divide: {
    borderWidth: 0.5,
    borderColor: globals.COLOR.lightgrey,
    marginTop: '5%',
    marginBottom: '5%',
  },
  cardBox: {
    width: '90%',
    height: 60,
    marginLeft: '5%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderColor: globals.COLOR.lightgrey,
    borderRadius: 10,
    marginTop: '5%',
    paddingLeft: '2%',
    paddingRight: '2%',
  },
  cardStyle: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  halfBox: {
    width: widthPercentageToDP('42%'),
    height: 60,
    marginLeft: '5%',
    //marginRight:'2%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderColor: globals.COLOR.lightgrey,
    borderRadius: 10,
    marginTop: '5%',
    paddingLeft: '2%',
    paddingRight: '2%',
  },
  halfRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
  },
  halfRowCod: {
    flexDirection: 'row',
    alignItems: 'center',
    // width: '85%',
    // marginLeft: 50,
  },
  halfRowOfline: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
    marginLeft: 45,
    marginTop: 10,
  },
  txt: {
    color: globals.COLOR.greyText,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: 14,
  },
  boxView: {
    flex: 1,
    marginTop: 10,
  },
  codText: {
    color: globals.COLOR.text,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    fontSize: 16,
    marginLeft: 2,
    textAlign: 'center',
    width: '80%',
  },
});

export { images, styles };
