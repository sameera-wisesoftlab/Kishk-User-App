import {StyleSheet, I18nManager} from 'react-native';
import globals from '../../lib/globals';

const images = {
  shoe: require('../../assets/images/SmallProductCard/shoe.png'),
  star: require('../../assets/images/review/star.png'),
  noStar: require('../../assets/images/review/noStar.png'),
  starHalf: require('../../assets/images/review/halfStar.png'),
  man: require('../../assets/images/review/man.png'),
  picon: require('../../assets/images/checkout/profile-image.jpg'),
};

const styles = StyleSheet.create({
  reviewRow: {
    backgroundColor: 'white',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: '5%',
  },
  imageBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  custImgWrap: {
    marginRight: 5,
  },
  per: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  str: {
    width: 14,
    height: 14,
  },
  starLine: {
    flexDirection: 'row',
  },
  para: {
    marginTop: '4%',
    marginBottom: '4%',
    flexDirection: 'row',
  },
  par: {
    lineHeight: 30,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: 14,
  },
});
export {styles, images};
