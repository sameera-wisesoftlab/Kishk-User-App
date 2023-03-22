import {StyleSheet, I18nManager} from 'react-native';
import globals from '../../lib/globals';

let headerButtonContainerWidth =
  globals.SCREEN_SIZE.width - globals.MARGIN.marginTen * 2;
let headerButtonWidth =
  (headerButtonContainerWidth - globals.MARGIN.marginTen * 2) / 3;

const images = {};

const styles = StyleSheet.create({
  categoryItemContainer: {
    width: globals.INTEGER.screenWidthWithMargin / 3,
    height: globals.INTEGER.screenWidthWithMargin / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderContainer: {
    height: globals.INTEGER.screenWidthWithMargin / 1,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  productSlideContainer: {
    marginVertical: 15,
  },
  itemImage: {
    width: 80,
    height: 80,
  },
  nameLabel: {
    top: 5,
    color: globals.COLOR.addressLabelColor,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.poppinssemiBold,
    fontSize: 11,
    height: 20,
  },
  screenMain: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: globals.COLOR.screenBackground,
  },
  screenContainerScrollView: {
    width: globals.SCREEN_SIZE.width,
    height: globals.SCREEN_SIZE.height,
    backgroundColor: globals.COLOR.background,
  },
  categorySellall: {
    color: 'orange',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.poppinsLight,
    fontSize: 14,
  },
  categoryContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  screenDesignContainer: {
    width: globals.SCREEN_SIZE.width,
    paddingBottom: globals.INTEGER.screenPaddingFromFooter,
    backgroundColor: globals.COLOR.background,
    //height: globals.SCREEN_SIZE.height,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  screenContainerWithMargin: {
    width: globals.INTEGER.screenWidthWithMargin,
    marginLeft: globals.INTEGER.leftRightMargin,
  },
  headerButtonContianer: {
    flexDirection: 'row',
    width: headerButtonContainerWidth,
    height: globals.INTEGER.heightFifty,
    alignItems: 'center',
  },
  categoryTitle: {
    color: globals.COLOR.addressLabelColor,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.poppinssemiBold,
    fontSize: 14,
  },
  headerButton: {
    width: headerButtonWidth,
    height: globals.INTEGER.heightThirty,
  },
  headerButtonMargin: {
    marginLeft: globals.MARGIN.marginTen,
  },
  promotionalContainer: {
    marginBottom: 20,
  },
  categoryItemRow: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dot: {
    position: 'absolute',
    top: 20,
    width: 20,
    height: 3,
  },
  listContainer: {
    width: '100%',
    flex: 1,
    //marginLeft:10,
    //marginVertical:"10%",
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  flatListStyle: {
    width: '100%',
    flexDirection: 'row',
  },
  head: {
    marginLeft: '5%',
    marginRight: '5%',
  },
  nodataf:{
    textAlign:'center',
    fontFamily: I18nManager.isRTL
    ? globals.FONTS.notokufiArabic
    : globals.FONTS.cairoRegular,
  },
  noDataContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '95%',
    paddingVertical: 20,
  },
});

export {images, styles};
