import {StyleSheet, I18nManager} from 'react-native';
import globals from '../../lib/globals';

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingRight: '3%',
  },
  listContainerTime: {
    width: '100%',
    flex:
      globals.SCREEN_SIZE.height <= 600
        ? 0.4
        : globals.SCREEN_SIZE.height <= 700
        ? 0.3
        : 0.28,
    backgroundColor: globals.COLOR.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  flatListStyle: {
    width: '100%',
    flexDirection: 'row',
  },
  nodataf:{
    textAlign:'center',
    fontFamily: I18nManager.isRTL
    ? globals.FONTS.notokufiArabic
    : globals.FONTS.cairoRegular,
  },
  noDataContainer: {
    alignItems: 'center',
    minWidth: '94%',
    padding: 10,
  },
});
export {styles};
