import {StyleSheet, I18nManager} from 'react-native';
import globals from '../../lib/globals';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const images = {
  shoe: require('../../assets/images/SmallProductCard/shoe.png'),
};

const styles = StyleSheet.create({
  specWrap: {
    backgroundColor: 'white',
  },
  specRow: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: '15%',
    paddingRight: '15%',
  },
  specPart: {
    width: '50%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  partOne: {
    //width:'50%',
    //right:50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedSpec: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoRegular,
    textAlign: 'left',
    fontSize: I18nManager.isRTL ? 15 : 16,
    color: globals.COLOR.red,
  },
  redLine: {
    height: hp('.5%'),
    backgroundColor: 'red',
    width: '50%',
  },
  descLine: {
    height: hp('.5%'),
    backgroundColor: 'red',
    width: '50%',
    marginLeft: '50%',
    bottom: 4,
  },
  descGrey: {
    height: hp('.5%'),
    backgroundColor: globals.COLOR.background,
    width: '50%',
    marginLeft: '50%',
    bottom: 4,
  },
  greyLine: {
    height: hp('.5%'),
    backgroundColor: globals.COLOR.background,
    width: '50%',
  },
  underLine: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: globals.COLOR.red,
  },
  partTwo: {
    //left:50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spec: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoRegular,
    fontSize: I18nManager.isRTL ? 15 : 16,
    color: globals.COLOR.greyText,
    textAlign: 'left',
  },
  model: {
    paddingLeft: '5%',
    paddingRight: '5%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginTop: '5%',
    marginBottom: '3%',
  },
  left: {
    width: '50%',
  },
  mod: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoLight,
    fontSize: 16,
    color: globals.COLOR.greyText,
    textAlign: 'left',
  },
  modno: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    fontSize: 16,
    textAlign: 'left',
  },
  right: {
    width: '50%',
  },
  para: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoLight,
    fontSize: 14,
    lineHeight: 23,
    textAlign: 'left',
  },
  description: {
    paddingLeft: '5%',
    paddingRight: '3%',
    paddingTop: '5%',
    paddingBottom: '5%',
  },
});
export {styles, images};
