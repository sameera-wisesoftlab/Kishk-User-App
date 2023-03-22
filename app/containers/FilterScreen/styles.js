import {StyleSheet, I18nManager} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
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
    // height: globals.SCREEN_SIZE.height+50,
    backgroundColor: globals.COLOR.background,
    flex: 1,
    marginBottom: '10%',
  },

  screenDesignContainer: {
    width: globals.SCREEN_SIZE.width,
    paddingBottom: globals.INTEGER.screenPaddingFromFooter,
    backgroundColor: globals.COLOR.background,
    // height: globals.SCREEN_SIZE.height+50,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
    // paddingBottom:heightPercentageToDP('15%')
  },

  row: {
    flexDirection: 'row',
    marginTop: '5%',
    marginLeft: '5%',
    marginRight: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  result: {
    color: globals.COLOR.text,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoSemiBold,
    fontSize: I18nManager.isRTL ? 15 : 16,
  },
  item: {
    color: globals.COLOR.text,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoRegular,
    fontSize: 16,
  },
  tabBox: {
    width: '70%',
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
    marginHorizontal: '5%',
  },
  filterImage: {
    width: 30,
    height: 30,
    // resizeMode:'contain'
  },
  listBox: {
    marginTop: '5%',
  },
  textRow: {
    flexDirection: 'row',
    marginTop: '3%',
    marginLeft: '5%',
    marginRight: '5%',
  },
  rowText: {
    color: globals.COLOR.text,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
    fontSize: 16,
  },
  resultBox: {
    flexDirection: 'row',
    width: 100,
    //height: 25,
    borderRadius: 2,
    borderWidth: 0.25,
    marginLeft: '2%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ECECEC',
    borderColor: globals.COLOR.lightgrey,
  },
  // result: {
  //   color: globals.COLOR.text,
  //   fontFamily: I18nManager.isRTL
  //     ? globals.FONTS.notokufiarabic
  //     : globals.FONTS.cairoSemiBold,
  //   fontSize: 16,
  // },
  listView: {
    marginTop: heightPercentageToDP('2%'),
    paddingBottom: heightPercentageToDP('10%'),
  },
});

export {images, styles};
