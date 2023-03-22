import {StyleSheet,I18nManager} from 'react-native';
import globals from '../../lib/globals';

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  nodataf:{
    fontFamily: I18nManager.isRTL
    ? globals.FONTS.notokufiArabic
    : globals.FONTS.cairoRegular,
  },
  flatListStyle: {
    width: '100%',
    // flexDirection: 'row',
  },
  content: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  noDataContainer: {
    minWidth: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  nodataf:{
    textAlign:'center',
    fontFamily: I18nManager.isRTL
    ? globals.FONTS.notokufiArabic
    : globals.FONTS.cairoRegular,
  },
  listLoader: {
    marginTop: 15,
    marginBottom: 30,
  },
});
export {styles};
