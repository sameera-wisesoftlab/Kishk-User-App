import {StyleSheet, I18nManager, Platform} from 'react-native';
import globals from '../../lib/globals';
import {ifIphoneX} from 'react-native-iphone-x-helper';

const images = {
  loveimage: require('../../assets/images/products/love.png'),
  empty: require('../../assets/images/checkout/empty.png'),
};

const styles = StyleSheet.create({
  screenMain: {
    flex: 1,
    backgroundColor: globals.COLOR.headerColor,
  },
  modalView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wishView: {
    position: 'absolute',
    height: 35,
    width: 170,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    flexDirection: 'row',
    top: 46,
    backgroundColor: globals.COLOR.lightgrey,
    borderRadius: 5,
    ...ifIphoneX(
      {
        top: 46,
      },
      {
        top: Platform.OS == 'ios' ? 46 : 6,
      },
    ),
  },
  loveimage: {
    resizeMode: 'contain',
    width: 20,
    height: 20,
    tintColor: 'black',
    right: 5,
  },
  addfromView: {
    color: globals.COLOR.black,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: I18nManager.isRTL ? 12 : 15,
    textAlign: 'center',
  },
  screenContainerScrollView: {
    width: globals.SCREEN_SIZE.width,
    height: globals.SCREEN_SIZE.height,
    paddingBottom: 100,
  },

  screenDesignContainer: {
    width: globals.SCREEN_SIZE.width,
    backgroundColor: globals.COLOR.background,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  head: {
    marginLeft: '5%',
    marginRight: '5%',
    flexDirection: 'row',
    width: '24%',
    alignItems: 'center',
  },
  itemBox: {
    minWidth: I18nManager.isRTL ? 90 : 60,
    borderRadius: 5,
    backgroundColor: globals.COLOR.ItemColor,
    alignItems: 'center',
    justifyContent: 'center',
    // right: '15%',
    paddingLeft: 5,
    paddingRight: 5,
    marginHorizontal: I18nManager.isRTL ? 5 : 0,
  },
  item: {
    color: globals.COLOR.black,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: I18nManager.isRTL ? 12 : 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyItem: {
    color: globals.COLOR.black,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    width: '100%',

    //marginLeft:10,
    //marginVertical:"10%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatListStyle: {
    width: '100%',
  },
});

export {images, styles};
