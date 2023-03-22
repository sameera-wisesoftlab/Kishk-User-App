import { StyleSheet, I18nManager } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import globals from '../../lib/globals';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const images = {
  addIcon: require('../../assets/images/Profile/Plusicon.png'),

  // supportIcon: require("../../assets/images/profileicon/support.png"),
  // logoutIcon:require("../../assets/images/profileicon/logout.png"),
  // arrowIcon:require("../../assets/images/profileicon/arrow.png"),
  // pencil:require("../../assets/images/profileicon/Edit.png"),

  // phone:require('../../assets/images/profileicon/Phone.png'),
  // mail:require('../../assets/images/profileicon/mail.png'),
  // close:require("../../assets/images/profileicon/cloo.png"),
  // main:require("../../assets/images/temp/main.png"),
  // cam:require("../../assets/images/Icons/camera.png"),

  // language:require('../../assets/images/profileicon/language.png'),
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 30, //60
    flexDirection: 'row',
    marginVertical: 10,
    marginRight: '2%',
    alignItems: 'center',
  },
  checkBox: {
    height: 22,
    width: 22,
    borderRadius: 5,
    resizeMode: 'contain',
    //top:3
  },
  leftHeadingContainer: {
    left: 0,
    width: wp('70%'),
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  summary: {
    left: 0,
    width: wp('80%'),
    // justifyContent: 'center',
    // alignItems: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressView: {
    left: 0,
    width: wp('90%'),
    // justifyContent: 'center',
    // alignItems: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftHeadingView: {
    flexDirection: 'row',
  },
  itemBox: {
    minWidth: 70,
    // height: 26,
    paddingLeft: 10,
    paddingRight: 10,
    // backgroundColor:'green',
    //padding: 12,
    backgroundColor: '#E8E8E8',
    borderRadius: 5,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    alignItems: 'center',
    marginLeft: 8,
    marginRight: 8,
    //borderStyle: 'dashed',
  },
  iText: {
    color: globals.COLOR.text,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: 12,
    //   height: '100%',
  },
  atext: {
    color: globals.COLOR.text,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabic
      : globals.FONTS.cairoSemiBold,
    fontSize: 13,
    marginLeft: 4,
  },
  leftHeadingLabelView: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  rightLinkContainer: {
    right: 0,
    left: 28,
    minWidth: '15%',
    paddingHorizontal: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 0.5,
    height: 24,
    //borderColor:globals.COLOR.red,
    borderColor: '#FF2c2B',
    //#FF2c2B
  },
  categoryRightLink: {
    right: 18,
    minWidth: '60%',
    paddingLeft: 5,
    paddingRight: 5,

    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: globals.COLOR.red,
  },
  nameLabel: {
    top: 0,
    color: globals.COLOR.text,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
    fontSize: I18nManager.isRTL ? 14 : 18,
  },
  nameLabelCat: {
    top: 0,
    color: globals.COLOR.red,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabic
      : globals.FONTS.cairoSemiBold,
    fontSize: 18,
  },
  label: {
    top: 0,
    color: globals.COLOR.greyText,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoSemiBold,
    fontSize: 18,
  },
  locationnameLabel: {
    top: 0,
    color: globals.COLOR.addressLabelColor,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: 14,
  },
  //   linkLabel:{
  //     top: 0,
  //     color: globals.COLOR.greenTexeColor,
  //     fontFamily:I18nManager.isRTL ? globals.FONTS.notokufiArabic: globals.FONTS.poppinsMedium,
  //     fontSize: 13
  //   },
  linkLabelRed: {
    top: 0,
    color: globals.COLOR.darkRed,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: I18nManager.isRTL ? 9 : 13,
  },
  linkLabelBlack: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    fontSize: 14,
    color: '#000000',
  },
  leftIcon: {
    width: 20,
    height: 20,
  },
  righttextImage: {},
});

export { styles, images };
