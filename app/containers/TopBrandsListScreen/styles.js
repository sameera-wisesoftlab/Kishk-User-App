import {StyleSheet, I18nManager} from 'react-native';
import globals from '../../lib/globals';

let headerButtonContainerWidth =
  globals.SCREEN_SIZE.width - globals.MARGIN.marginTen * 2;
let headerButtonWidth =
  (headerButtonContainerWidth - globals.MARGIN.marginTen * 2) / 3;

const images = {
  img1: require('../../assets/images/brands/img1.png'),
  img2: require('../../assets/images/brands/img2.png'),
  img3: require('../../assets/images/brands/img3.png'),
  img4: require('../../assets/images/brands/img4.png'),
  img5: require('../../assets/images/brands/img5.png'),
  img1: require('../../assets/images/brands/img1.png'),
  img2: require('../../assets/images/brands/img2.png'),
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
  nodataf:{
    textAlign:'center',
    fontFamily: I18nManager.isRTL
    ? globals.FONTS.notokufiArabic
    : globals.FONTS.cairoRegular,
  },
  head: {
    marginLeft: '5%',
    marginRight: '5%',
  },
  listView: {
    flexDirection: 'row',
    width: '96%',
    flex: 1,
  },
});

export {images, styles};
