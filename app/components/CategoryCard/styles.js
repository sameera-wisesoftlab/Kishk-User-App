import {StyleSheet, I18nManager} from 'react-native';
import globals from '../../lib/globals';

const styles = StyleSheet.create({
  itemContainer: {
    width:
      (globals.INTEGER.screenWidthWithMargin -
        globals.INTEGER.leftRightMargin +
        14) /
      2,
    marginLeft: 10, // globals.INTEGER.leftRightMargin,
    marginBottom: globals.INTEGER.leftRightMargin - 5,
    alignItems: 'center',
    //  borderColor:'#ddd',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: globals.INTEGER.opacityLow,
    elevation: Platform.OS === 'ios' ? 1 : 3,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },

  image: {
    height: 120,
    width: 120,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    minWidth: '70%',
    height: 40,
    borderRadius: 5,
    backgroundColor: globals.COLOR.darkRed,
    marginBottom: '8%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  but: {
    fontSize: 14,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    color: 'white',
  },
});

export {styles};
