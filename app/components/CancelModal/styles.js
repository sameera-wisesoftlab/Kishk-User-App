import {StyleSheet, I18nManager} from 'react-native';
import globals from '../../lib/globals';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const images = {
  downArrow: require('../../assets/images/cart/arrow.png'),
};

const styles = StyleSheet.create({
  modalStyle: {
    justifyContent: 'flex-end',
    margin: 0,
    width: '100%',
    height: '80%',
  },
  popupContainer: {
    width: '100%',
    //height: '70%',
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
  modalHeader: {
    marginHorizontal: '6%',
  },
  cancelStyle: {
    color: globals.COLOR.black,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
    fontSize: 16,
  },
  popupClose: {
    height: 30,
    width: 40,
    marginTop: 10,
  },
  borderphoneb: {
    borderWidth: 1,
    marginHorizontal: '7.5%',
    // height: I18nManager.isRTL ? 66 : 64,
    width: 310,
    height: 70,
    borderRadius: 5,
    borderColor: globals.COLOR.lightgrey,
    top: 5,
  },
  phoneNoab: {
    paddingLeft: '5%',
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
  phoneSectionb: {
    // bottom: 8,

    right: 4,
  },
  secondSection1: {
    paddingLeft: 13,
    flexBasis: '74%',
    // height:60,
    alignItems: 'center',
    flexDirection: 'row',
    top: 18,
    position: 'absolute',
    zIndex: 0, //99999,
    //overflow:'hidden'
  },
  dropDownStyle: {
    borderColor: 'white',
    marginTop: 2,
  },
  borderphonebc: {
    borderWidth: 1,
    marginHorizontal: '7.5%',
    height: 160,
    width: 310,
    borderRadius: 5,
    borderColor: globals.COLOR.lightgrey,
    marginTop: '5%',
    // zIndex: 0,
  },

  phoneNo: {
    paddingLeft: '5%',
    marginTop: hp('.4%'),
    // backgroundColor:'green'
  },
  phoneSectionbc: {
    //bottom: 45,
    //backgroundColor:'red',
    height: '90%',
    width: '94%',
    marginLeft: '3%',
    marginRight: '2%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  disableText: {
    fontSize: 15,
    color: globals.COLOR.blackTextColor,
    width: '80%',
    flexDirection: 'row',
    marginLeft: 5,
    //  paddingLeft:I18nManager.isRTL ?'12%':0,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
  },
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    // marginVertical: hp('4%'),
    marginTop: 10,
    marginBottom: 20,
    //paddingLeft:'7%'
  },
  pic: {
    resizeMode: 'contain',
    width: 25,
    height: 25,
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
});

export {images, styles};
