import { StyleSheet, I18nManager } from 'react-native';
import globals from '../../lib/globals';

let headerButtonContainerWidth =
  globals.SCREEN_SIZE.width - globals.MARGIN.marginTen * 2;
let headerButtonWidth =
  (headerButtonContainerWidth - globals.MARGIN.marginTen * 2) / 3;

const images = {};

const styles = StyleSheet.create({
  screenMain: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: globals.COLOR.screenBackground,
  },
  screenContainerScrollView: {
    width: globals.SCREEN_SIZE.width,
    height: globals.SCREEN_SIZE.height,
    marginBottom: '16%',
    backgroundColor: 'white',
  },
  screenDesignContainer: {
    width: globals.SCREEN_SIZE.width,
    paddingBottom: globals.INTEGER.screenPaddingFromFooter,
    backgroundColor: globals.COLOR.background,
    //height: globals.SCREEN_SIZE.height,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginBottom: '4%',
  },
  dot: {
    width: 30,
    height: 3,
  },
  discountTextContainer: {
    width: '10%',
    position: 'absolute',
    top: 40,
    left: 10,
    zIndex: 10,
    borderColor: globals.COLOR.red,
    backgroundColor: globals.COLOR.red,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderRadius: 8,
    justifyContent: 'center',
  },
  textContainer: {
    marginLeft: '2%',
    marginRight: '2%',
    width: '85%',
    marginVertical: '3%',
    //flexDirection: 'row',
    //backgroundColor:'red'
  },
  discountText: {
    color: 'white',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoLight,
    fontSize: 16,
  },
  head: {
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  heading: {
    paddingLeft: '5%',
    paddingRight: '5%',
    backgroundColor: 'white',
    height: 60,
    //marginBottom:'5%'
  },
});

export { images, styles };
