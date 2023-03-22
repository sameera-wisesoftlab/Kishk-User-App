import { StyleSheet, I18nManager, Platform } from 'react-native';
import globals from '../../lib/globals';

const images = {
  col1: require('../../assets/images/products/2.png'),
  col2: require('../../assets/images/products/1.png'),
  col3: require('../../assets/images/products/3.png'),
  col4: require('../../assets/images/products/4.png'),
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingBottom: '5%',
    paddingTop: '5%',
  },
  colo: {
    flexDirection: 'row',
    alignItems: 'center',
    //marginTop:'2%',
    marginBottom: '2%',
  },
  col: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '15%',
  },
  text: {},
  box: {
    borderWidth: 0.5,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#EF6C00',
    left: 80,
    marginHorizontal: '2%',
  },
  boxPress: {
    borderWidth: 0.5,
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#EF6C00',
    left: 80,
    marginHorizontal: '2%',
  },
  box1: {
    borderWidth: 0.5,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#BF360C',
    left: 80,
    marginHorizontal: '2%',
  },
  box2: {
    borderWidth: 0.5,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#3E2723',
    left: 80,
    marginHorizontal: '2%',
  },
  box3: {
    borderWidth: 0.5,
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#8B90A9',
    left: 80,
    marginHorizontal: '2%',
  },
  oval: {
    minWidth: 65,
    minHeight: 32,
    maxHeight: Platform.OS === 'ios' ? null : 100,
    // height: 32,
    borderColor: globals.COLOR.red,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    left: 18,
    marginRight: '2%',
    paddingLeft: '2.6%',
    paddingRight: '2.6%',
    backgroundColor: '#fff',
  },
  ovalBlur: {
    minWidth: 65,
    minHeight: 32,
    maxHeight: Platform.OS === 'ios' ? null : 460,
    // height: 30,
    borderColor: globals.COLOR.background,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    left: 18,
    marginRight: '2%',
    paddingLeft: '2.6%',
    paddingRight: '2.6%',
    backgroundColor: globals.COLOR.background,
  },
  ovBText: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabic
      : globals.FONTS.cairoRegular,
    fontSize: 14,
    color: globals.COLOR.black,
  },
  stbox: {
    flexDirection: 'row',
    maxWidth: Platform.OS === 'ios' ? null : 270
  },
  colText: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoLight,
    fontSize: 15,
    color: globals.COLOR.greyText,
    minWidth: 60,
  },
  ovText: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: 15,
    color: globals.COLOR.text,
  },
  color: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  coor: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
});

export { styles, images };
