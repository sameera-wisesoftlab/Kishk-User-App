import {StyleSheet, I18nManager} from 'react-native';
import globals from '../../lib/globals';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingBottom: '5%',
    paddingTop: '5%',
  },
  color: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '2%',
    marginBottom: '2%',
  },
  space: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '2%',
    marginBottom: '2%',
    justifyContent: 'space-between',
  },
  col: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    borderWidth: 0.5,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#EF6C00',
    left: 80,
    marginHorizontal: '2%',
  },
  box1: {
    borderWidth: 0.5,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#BF360C',
    left: 80,
    marginHorizontal: '2%',
  },
  box2: {
    borderWidth: 0.5,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#3E2723',
    left: 80,
    marginHorizontal: '2%',
  },
  box3: {
    borderWidth: 0.5,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#8B90A9',
    left: 80,
    marginHorizontal: '2%',
  },
  oval: {
    width: 60,
    height: 30,
    borderColor: globals.COLOR.backgroundColor,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    left: 70,
    marginRight: '4%',
  },
  stbox: {
    flexDirection: 'row',
  },
  colText: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoLight,
    fontSize: 16,
    color: globals.COLOR.greyText,
  },
  checkText: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    fontSize: 16,
    color: globals.COLOR.greyText,
  },
  ovText: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabic
      : globals.FONTS.cairoLight,
    fontSize: 16,
    color: globals.COLOR.text,
  },
  test: {
    paddingLeft: '3%',
  },
  darkText: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoBold,
    fontSize: 13,
    color: globals.COLOR.text,
    textTransform: 'uppercase',
  },
  checkDark: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    fontSize: I18nManager.isRTL?14:16,
    color: globals.COLOR.text,
    textAlign: 'right',
    textTransform: 'uppercase',
  },
});

export {styles};
