import {StyleSheet, I18nManager, Platform} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
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
  },
  listContainer: {
    height: globals.SCREEN_SIZE.height,
    backgroundColor: globals.COLOR.background,
  },
  screenDesignContainer: {
    width: globals.SCREEN_SIZE.width,
    paddingBottom: globals.INTEGER.screenPaddingFromFooter,
    //backgroundColor: globals.COLOR.background,
    // height: globals.SCREEN_SIZE.height,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  noDataContainer: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nodataf:{
    textAlign:'center',
    fontFamily: I18nManager.isRTL
    ? globals.FONTS.notokufiArabic
    : globals.FONTS.cairoRegular,
  },
  row: {
    flexDirection: 'row',
    marginTop: '5%',
    marginLeft: '2%',
    marginRight: '2%',
    alignItems: 'center',
    justifyContent: 'center',
    width: widthPercentageToDP('96%'),
  },
  result: {
    color: globals.COLOR.text,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
    fontSize: I18nManager.isRTL ? 14 : 16,
  },
  item: {
    color: globals.COLOR.text,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: I18nManager.isRTL ? 12 : 14,
  },
  fil:{
    color: globals.COLOR.text,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: I18nManager.isRTL ? 14 : 14,
  },
  tabBox: {
    minWidth: widthPercentageToDP('60%'),
    height: 50,
    borderRadius: 18,
    backgroundColor: 'white',
    marginLeft: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  filterBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    //marginHorizontal:'5%'
  },
  filterBoxMiddle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '14%',
  },
  filterImage: {
    width: 30,
    height: 30,
    // resizeMode:'contain'
  },
  listBox: {
    marginTop: '5%',
    width: widthPercentageToDP('98%'),
    marginLeft: 14,
    // alignItems:'center',
    // justifyContent:'center'
  },
  listBox2: {
    marginTop: '5%',
    width: widthPercentageToDP('97%'),
    marginLeft: -2,
  },
  loaderContainer: {
    height: globals.INTEGER.screenWidthWithMargin / 1,
  },
  flatListStyle: {
    // marginLeft: Platform.OS === 'ios' ? 0 : 10,
    // marginRight: 18,
  },
});

export {images, styles};
