import {StyleSheet, I18nManager} from 'react-native';
import globals from '../../lib/globals';

const images = {};

const styles = StyleSheet.create({
  float: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 90,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
    paddingLeft: '2%',
    paddingRight: '2%',
    shadowOpacity: Platform.OS === 'ios' ? 0.1 : globals.INTEGER.opacityHigh,
    elevation: Platform.OS === 'ios' ? 1 : 10,
    shadowRadius: Platform.OS === 'ios' ? 0.1 : 3,
    shadowOffset:{
      width:1,
      height:1,
    },
    //borderWidth:0.5,
    // shadowColor: '#000',
    // shadowOffset: {width: 3, height: 3},
    // shadowOpacity: globals.INTEGER.opacityMedium,
    // shadowRadius: 10,
    // elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '4%',
    paddingRight: '4%',
  },
  floata: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 90,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
    paddingLeft: '2%',
    paddingRight: '2%',
    //borderWidth:0.5,
    shadowColor: '#000',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: globals.INTEGER.opacityMedium,
    shadowRadius: 10,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '4%',
    paddingRight: '4%',
  },
  content: {},
  price: {
    //alignItems:'center',
    justifyContent: 'center',
  },
  dark: {
    textAlign: 'left',
    color: globals.COLOR.text,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,

    fontSize: 18,
  },
  light: {
    textAlign: 'left',
    color: globals.COLOR.greyText,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoLight,
    textDecorationLine: 'line-through',
    //fontSize: globals.SCREEN_SIZE.width * 0.04,
    fontSize: 14,
  },
  lightSAR: {
    textAlign: 'left',
    color: globals.COLOR.greyText,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoLight,
  },
  but: {
    // width: 100,
    height: 40,
    borderRadius: 5,
    backgroundColor: globals.COLOR.red,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  but1: {
    minWidth: 200,
    height: 40,
    paddingHorizontal:20,
    borderRadius: 5,
    backgroundColor: globals.COLOR.red,
    alignItems: 'center',
    justifyContent: 'center',
  },
  butText: {
    color: 'white',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clearBox: {
    width: 80,
    height: 40,
    borderWidth: 0.5,
    borderColor: globals.COLOR.lightgrey,
    borderRadius: 5,
    backgroundColor: globals.COLOR.lightgrey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearText: {
    color: globals.COLOR.textGrey,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoBold,
    fontSize: 14,
  },
  butFill: {
    width: 200,
    height: 40,
    borderRadius: 5,
    backgroundColor: globals.COLOR.red,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: '2%',
    flexDirection: 'row',
    paddingLeft: '6%',
    paddingRight: '6%',
  },
  results: {
    color: 'white',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoSemiBold,
    fontSize: 14,
  },
});

export {images, styles};
