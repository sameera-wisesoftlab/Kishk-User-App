import { StyleSheet, I18nManager } from 'react-native';
import globals from '../../lib/globals';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const images = {
  varrowred: require('../../assets/images/ChooseLanguage/radioa.png'),
  varrowgrey: require('../../assets/images/ChooseLanguage/Radio.png'),
  star: require('../../assets/images/products/star.png'),
};

const styles = StyleSheet.create({
  modalStyle: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  starRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
  },
  arrowv: {
    marginRight: '4%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  varrow: {
    width: 25,
    height: 25,
    alignSelf: 'center',
    transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
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
    alignItems: 'center',
    // alignSelf: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'row',
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
  pic: {
    resizeMode: 'contain',
    width: 25,
    height: 25,
  },
  cancelStyle: {
    color: globals.COLOR.black,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
    fontSize: 16,
  },
  borderphoneb: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '9%',
    marginVertical: '3%',
  },

  shold: {
    color: globals.COLOR.black,
    fontFamily: globals.FONTS.cairoRegular,
    fontSize: 14,
  },
  centi: {
    left: '65%',
  },
  modalHeader: {
    marginHorizontal: '6%',
  },
  phoneNo: {
    paddingLeft: '6%',
    marginTop: hp('.4%'),
  },
  phoneNoab: {
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
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp('4%'),

    //paddingLeft:'7%'
  },
  phoneSectionb: {
    bottom: 8,

    right: 4,
  },
});

export { images, styles };
