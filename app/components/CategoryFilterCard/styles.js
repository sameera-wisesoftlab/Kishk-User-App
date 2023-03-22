import {StyleSheet, I18nManager} from 'react-native';
import globals from '../../lib/globals';

const images = {
  checkbox: require('../../assets/images/categoryFilter/Checkbox.png'),
  checkboxa: require('../../assets/images/categoryFilter/checkbox-a.png'),
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: '3%',
    width: '100%',
    height: 40,
    paddingRight: '5%',
  },
  title: {
    fontSize: 16,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    color: globals.COLOR.text,
    width: '100%',
    textAlign: 'left',
  },
  number: {
    fontSize: 16,
    fontFamily: globals.FONTS.cairoSemiBold,
    color: globals.COLOR.greyText,
  },
  num: {
    marginLeft: '5%',
  },
  boxCheck: {
    width: 30,
    height: 30,
  },
  box: {},
  textOne: {},
});

export {styles, images};
