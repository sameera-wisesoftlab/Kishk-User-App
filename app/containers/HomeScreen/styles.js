import { StyleSheet, I18nManager, Dimensions } from 'react-native';
import globals from '../../lib/globals';
const width = Dimensions.get('window').width;

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
    backgroundColor: 'white',
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
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    top: 3,
    shadowOpacity: Platform.OS === 'ios' ? 0.1 : globals.INTEGER.opacityHigh,
    elevation: Platform.OS === 'ios' ? 1 : 5,
    shadowRadius: Platform.OS === 'ios' ? 0.1 : 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
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
    // position:'absolute',
    // top:20,
    // width:22,
    // height:3,
    height: 3,
    borderRadius: 5,
    marginHorizontal: -3,
    padding: 0,
    margin: 0,
    top: 23,
    width: 24,
  },
  sliderboxCustom: {
    paddingTop: '2%',
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
  nodataf: {
    textAlign: 'center',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
  },
  flatListStyle: {
    width: '100%',
    flexDirection: 'row',
    marginHorizontal: 8,
  },
  head: {
    marginLeft: '5%',
    marginRight: '5%',
  },
  slide: {
    marginLeft: '5%',
    marginRight: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  androidRTL: {
    right: width / 2,
  },
  androidRTLTopBrand: {
    right: width / 4,
  },
});

export { images, styles };
