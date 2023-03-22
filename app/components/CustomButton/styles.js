import {StyleSheet, I18nManager} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import globals from '../../lib/globals';

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: globals.COLOR.custo,
    width: 290,
    height: 45,
    borderRadius: 5,
    backgroundColor: globals.COLOR.custombuttoncolor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle1: {
    backgroundColor: globals.COLOR.custo,
    width: 240,
    height: 45,
    borderRadius: 5,
    backgroundColor: globals.COLOR.custombuttoncolor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    // fontFamily: globals.FONTS.avenirMedium,
    fontSize: globals.FONTSIZE.fontSizeFifteen,
  },
  buttonStyle3: {
    backgroundColor: globals.COLOR.custo,
    width: widthPercentageToDP('85%'),
    height: 45,
    borderRadius: 5,
    backgroundColor: globals.COLOR.custombuttoncolor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disableButtonStyle: {
    backgroundColor: globals.COLOR.custo,
    width: widthPercentageToDP('85%'),
    height: 45,
    borderRadius: 5,
    backgroundColor: globals.COLOR.disabled,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {styles};
