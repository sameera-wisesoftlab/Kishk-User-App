import {StyleSheet, I18nManager} from 'react-native';
import globals from '../../lib/globals';

let headerButtonContainerWidth =
  globals.SCREEN_SIZE.width - globals.MARGIN.marginTen * 2;
let headerButtonWidth =
  (headerButtonContainerWidth - globals.MARGIN.marginTen * 2) / 3;

const images = {
  filter: require('../../assets/images/search/filter.png'),
  sort: require('../../assets/images/search/sort.png'),
  linear: require('../../assets/images/search/linear.png'),
  grid: require('../../assets/images/search/grid.png'),
};

const styles = StyleSheet.create({
  screenMain: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: globals.COLOR.screenBackground,
  },
  screenContainerScrollView: {
    width: globals.SCREEN_SIZE.width,
    height: globals.SCREEN_SIZE.height,
    backgroundColor: 'white',
    flex: 1,
    marginBottom: '20%',
  },

  screenDesignContainer: {
    width: globals.SCREEN_SIZE.width,
    paddingBottom: globals.INTEGER.screenPaddingFromFooter,
    backgroundColor: globals.COLOR.background,
    height: globals.SCREEN_SIZE.height,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  box: {
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%',
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: '5%',
    //height:80,
    borderRadius: 10,
  },
  head: {
    marginTop: '5%',
    marginLeft: '5%',
  },
  list: {
    marginVertical: '2%',
    marginLeft: '5%',
  },
  headLine: {
    color: globals.COLOR.text,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabic
      : globals.FONTS.cairoSemiBold,
    fontSize: 16,
  },
  nodataf:{
    textAlign:'center',
    fontFamily: I18nManager.isRTL
    ? globals.FONTS.notokufiArabic
    : globals.FONTS.cairoRegular,
  },
  noDataContainer: {
    padding: 95,
  },
});

export {images, styles};
