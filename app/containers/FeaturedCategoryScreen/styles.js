import {StyleSheet, I18nManager} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import globals from '../../lib/globals';

let headerButtonContainerWidth =
  globals.SCREEN_SIZE.width - globals.MARGIN.marginTen * 2;
let headerButtonWidth =
  (headerButtonContainerWidth - globals.MARGIN.marginTen * 2) / 3;

const images = {
  img1: require('../../assets/images/category/img1.png'),
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

    flex: 1,
  },

  screenDesignContainer: {
    width: globals.SCREEN_SIZE.width,
    //  paddingBottom: globals.INTEGER.screenPaddingFromFooter,
    backgroundColor: globals.COLOR.background,
    // height: globals.SCREEN_SIZE.height + 100,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
  },
  head: {
    marginLeft: '5%',
    marginRight: '5%',
  },
  listView: {
    flexDirection: 'row',
    width: '100%',
    flex: 1,
    //  paddingBottom:heightPercentageToDP('10%')
    marginTop: heightPercentageToDP('2%'),
  },
});

export {images, styles};
