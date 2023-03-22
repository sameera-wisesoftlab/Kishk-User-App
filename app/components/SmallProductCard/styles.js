import {StyleSheet, I18nManager} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import globals from '../../lib/globals';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const images = {
  shoe: require('../../assets/images/SmallProductCard/shoe.png'),
};

const styles = StyleSheet.create({
  square: {
    minWidth: globals.INTEGER.screenWidthWithMargin/4.8,
    height: 80,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  topSquare: {
    minWidth: widthPercentageToDP('4%'),
    height: 80,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  catSquare: {
    width: 68,
    //height:70,
    height: 68,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  shoe: {
    width: 40,
    height: 40,
    //transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }]
  },
  brands: {
    width: 70,
    height: 70,
    //transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }]
  },
  wrapperView: {
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  topWrapper: {
    marginLeft: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  catWrapperView: {
    marginLeft: widthPercentageToDP('2%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
   // height: 54,
  },
  catTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 40,
  },
  name: {
    textAlign: 'center',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: I18nManager.isRTL ? 10 : 10,
    lineHeight: 14,
  },
});

export {images, styles};
