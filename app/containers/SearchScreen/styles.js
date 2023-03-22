import { StyleSheet, I18nManager, Platform } from 'react-native';
import globals from '../../lib/globals';

let headerButtonContainerWidth =
  globals.SCREEN_SIZE.width - globals.MARGIN.marginTen * 2;
let headerButtonWidth =
  (headerButtonContainerWidth - globals.MARGIN.marginTen * 2) / 3;

const images = {
  searchIcon: require('../../assets/images/header/search.png'),
  rightArrow: require('../../assets/images/search/RightArrow.png'),
};

const styles = StyleSheet.create({
  screenMain: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: globals.COLOR.screenBackground,
  },
  screenContainerScrollView: {
    width: globals.SCREEN_SIZE.width,
    height: globals.SCREEN_SIZE.height + 50,
    backgroundColor: 'white',
    flex: 1,
    marginBottom: '10%',
  },

  screenDesignContainer: {
    width: globals.SCREEN_SIZE.width,
    paddingBottom: globals.INTEGER.screenPaddingFromFooter,
    backgroundColor: globals.COLOR.background,
    height: globals.SCREEN_SIZE.height,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
  },
  searchBox: {
    borderWidth: 0.5,
    borderColor: globals.COLOR.background,
    backgroundColor: globals.COLOR.lightgrey,
    minWidth: '92%',
    height: 60,
    borderRadius: 10,
    marginLeft: '5%',
    marginRight: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    //justifyContent:'center',
    marginTop: '4%',
    paddingLeft: '5%',
  },
  textIn: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoLight,
    fontSize: 15,
    //textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  searchIcon: {
    // paddingLeft:'5%',
    justifyContent: 'center',
    //marginTop:'1%'
  },
  search: {
    width: 40,
    height: 40,
  },
  rightArrow: {
    width: 15,
    height: 15,
  },
  head: {
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '5%',
  },
  listContainer: {
    marginLeft: '0%',
    flexDirection: 'row',
  },
  searchResultProduct: {
    textAlign: 'left',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: 14,
  },
  searchTerm: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabicBold
      : globals.FONTS.cairoBold,
    // fontSize: 15,
  },

  reverse: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoLight,
    fontSize: I18nManager.isRTL ? 12 : 14,
    width: 250,
    flex: 1,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    alignItems: 'flex-start',
    // backgroundColor: 'green',
  },
});

export { images, styles };
