import {StyleSheet, I18nManager} from 'react-native';
import globals from '../../lib/globals';

const images = {
  arrow: require('../../assets/images/search/arrow.png'),
};

const styles = StyleSheet.create({
  wrapper: {
    width: '90%',
    height: 80,
    marginLeft: '5%',
    marginRight: '5%',

    justifyContent: 'center',
    marginBottom: '1%',
    marginTop: '1%',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: globals.INTEGER.opacityLow,
    elevation: Platform.OS === 'ios' ? 1 : 3,
    backgroundColor: '#ffffff',
  },
  textRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  title: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
    fontSize: I18nManager.isRTL ? 14 : 16,
    color: globals.COLOR.text,
    textAlign: 'left',
  },
  subtitle: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoLight,
    fontSize: I18nManager.isRTL ? 14 : 16,
    color: globals.COLOR.greyText,
    textAlign: 'left',
  },
  arrow: {
    width: 20,
    height: 20,
    transform: [{scaleX: I18nManager.isRTL ? -1 : 1}],
  },
});
export {styles, images};
