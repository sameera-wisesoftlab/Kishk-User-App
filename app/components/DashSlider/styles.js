import { StyleSheet, I18nManager } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import globals from '../../lib/globals';

const images = {
  tick: require('../../assets/images/checkout/tick.png'),
  radio: require('../../assets/images/slider/round.png'),
  round: require('../../assets/images/search/Radio.png'),
  redRound: require('../../assets/images/search/radio-a.png'),
};
const styles = StyleSheet.create({
  slider: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: widthPercentageToDP('100%'),
  },
  verticalSlider: {
    marginLeft: '5%',
    justifyContent: 'center',
  },
  greenTick: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  dash: {
    width: 80,
    height: 0.1,
    flexDirection: 'row',
    bottom: 10,
  },
  vDash: {
    height: 30,
    flexDirection: 'column',
  },
  dashView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verticalDash: {
    paddingLeft: '3.5%',
    flexDirection: 'column',
  },
  tick: {
    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 4,
  },
  vTick: {
    flexDirection: 'row',
    alignItems: 'center',
    //top: 6,
  },
  txtView: {
    alignSelf: 'center',
    //bottom: 2,
    marginLeft: I18nManager.isRTL ? '2%' : null,
  },
  text1: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: I18nManager.isRTL ? 10 : 12,
    color: globals.COLOR.green,
  },
  ordText1: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    fontSize: I18nManager.isRTL ? 10 : 13,
    color: globals.COLOR.textBlack,
    paddingLeft: '4%',
  },
  lightText: {
    paddingLeft: '4%',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    fontSize: I18nManager.isRTL ? 10 : 12,
    color: globals.COLOR.greyText,
    // paddingLeft: '4%',
    marginLeft: I18nManager.isRTL ? '2%' : null,
  },
  ordsubText1: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: I18nManager.isRTL ? 10 : 12,
    color: globals.COLOR.text,
    paddingLeft: '4%',
    textAlign: 'left',
  },
  text: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: I18nManager.isRTL ? 10 : 12,
    color: globals.COLOR.greyText,
  },
});

export { styles, images };
