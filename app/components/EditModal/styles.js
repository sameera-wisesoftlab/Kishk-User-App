import {StyleSheet, I18nManager} from 'react-native';
import globals from '../../lib/globals';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const images = {
  boysImage: require('../../assets/images/products/MaskG.png'),
};

const styles = StyleSheet.create({
  listItem: {
    width: '95%',
    height: 40,
  },
  labelView: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
  },
  modalStyle: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  favIconContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '10%',
    height: 40,
  },
  popupContainer: {
    width: '100%',

    //	height: '100%',
    flexDirection: 'column',
    backgroundColor: 'white',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // borderWidth: 1,
    // overflow:'hidden',
    marginTop: 'auto',

    //padding:'3%',
  },
  closeContainer: {
    // width: '100%',
    // height: 50,
    // alignItems: 'flex-end',
    alignSelf: 'flex-end',

    paddingTop: '4%',
    // paddingRight:'3%',
    paddingLeft: '3%',
    //   //paddingTop:'2%',
    paddingBottom: '2%',
  },
  popupClose: {
    height: 30,
    width: 40,
    marginTop: 10,
  },
  shoulderView: {
    marginBottom: '30%',
  },
  borderphoneb: {
    borderWidth: 1,
    marginHorizontal: '4%',
    borderRadius: 5,
    borderColor: globals.COLOR.lightgrey,
    marginTop: 16,
    backgroundColor: globals.COLOR.backgroundColor,
  },
  phoneNo: {
    paddingLeft: '6%',
    marginTop: hp('.4%'),
  },

  phoneStyle: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    color: globals.COLOR.grey,
    textAlign: 'left',
    fontSize: 12,
  },
  item: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    color: globals.COLOR.grey,
    textAlign: 'center',
    fontSize: 15,
    marginLeft: 20,
    marginRight: 28,
    height: '100%',
    marginTop: 5,
  },
  phoneSectionb: {
    right: 4,
  },
  secondSection1: {
    paddingLeft: 13,
    flexDirection: 'row',
  },
  disableText: {
    fontSize: 15,
    color: globals.COLOR.blackTextColor,
    width: '100%',
    flexDirection: 'row',
    marginLeft: 5,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.openSansLight,
  },
  ImageCon: {
    alignItems: 'center',
    marginTop: '5%',
    marginBottom: '34.5%',
  },
  logo: {
    resizeMode: 'contain',
    width: 278,
    height: 278,
  },
  pic: {
    resizeMode: 'contain',
    width: 25,
    height: 25,
  },
});

export {images, styles};
