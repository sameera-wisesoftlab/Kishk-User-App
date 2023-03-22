import {StyleSheet, I18nManager} from 'react-native';
import globals from '../../lib/globals';

const images = {
  homeIconSelected: require('../../assets/images/footerTabItem/Homefill.png'),
  homeIconUnSelected: require('../../assets/images/footerTabItem/home.png'),
  offerIconSelected: require('../../assets/images/footerTabItem/Categorfill.png'),
  offerIconUnSelected: require('../../assets/images/footerTabItem/categor.png'),
  orderIconSelected: require('../../assets/images/footerTabItem/dealfill.png'),
  orderIconUnSelected: require('../../assets/images/footerTabItem/deal.png'),
  scanIconSelected: require('../../assets/images/footerTabItem/cartfill.png'),
  scanIconUnSelected: require('../../assets/images/footerTabItem/cart.png'),
  profileIconSelected: require('../../assets/images/footerTabItem/profilefill.png'),
  profileIconUnSelected: require('../../assets/images/footerTabItem/profile.png'),
};

const styles = StyleSheet.create({
  tabBarItem: {
    width: globals.SCREEN_SIZE.width / 4,
    height: globals.INTEGER.footerTabBarHeight,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
    //backgroundColor:'white'
  },

  tabBarIconContainerScan: {
    marginBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 62,
    height: 62,
    alignItems: 'center',
    justifyContent: 'center',

    shadowOpacity: globals.INTEGER.opacityLow,
    shadowOffset: {x: 2, y: 0},
    shadowRadius: 2,
    borderRadius: 30,
    position: 'absolute',
    bottom: 20,
    right: 0,
    top: 5,
    left: 5,
    shadowOpacity: globals.INTEGER.opacityMedium,
  },
  scanBtn: {
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: '#F0F1F0',
    width: 72,
    height: 72,
    borderRadius: 35,
    bottom: 35,
    zIndex: 10,
  },
  actionBtn: {
    textShadowOffset: {width: 20, height: 5},
  },
  badgeCountContainer: {
    position: 'absolute',
    top: globals.INTEGER.footerTabBarHeight / 2 - 15,
    left: globals.SCREEN_SIZE.width / 4 / 2,
    width: 18,
    height: 18,
    backgroundColor: 'red',
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  bottomimage: {
    height: 30,
    width: 30,
  },

  badgeCount: {
    color: globals.COLOR.white,
    fontFamily: globals.FONTS.cairoLight,
    textAlign: 'center',
    fontSize: globals.SCREEN_SIZE.width * 0.03,
  },
  tabLabel: {
    top: 0,
    color: 'black',
    fontSize: 10,
  },

  tabBarIconContainer: {
    width: globals.SCREEN_SIZE.width / 4,
    height: globals.INTEGER.footerTabBarHeight - 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
    marginBottom: '5%',
    //backgroundColor:'white'
  },
  badgeCountContainer: {
    position: 'absolute',
    top: globals.INTEGER.footerTabBarHeight / 2 - 15,
    left: globals.SCREEN_SIZE.width / 4 / 2,
    width: 18,
    height: 18,
    backgroundColor: 'red',
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  badgeCount: {
    color: globals.COLOR.white,
    fontFamily: globals.FONTS.cairoLight,
    textAlign: 'center',
    fontSize: globals.SCREEN_SIZE.width * 0.03,
  },
  tabLabel: {
    top: 0,
    color: 'black',
    fontSize: 10,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoLight,
  },
  tabIconStyle: {
    width: 19,
    height: 19,
  },
  barText: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoLight,
    color: globals.COLOR.text,
    fontSize: I18nManager.isRTL ? 10 : 12,
  },
  tabTextView: {
    top: 20,
  },
});

export {images, styles};
