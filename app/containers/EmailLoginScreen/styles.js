import { StyleSheet, I18nManager } from "react-native";
import globals from "../../lib/globals"
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
const images = {
  backIcon: require("../../assets/images/ChooseLanguage/Back.png"),
  backgroundImage: require('../../assets/images/ChooseLanguage/Background.png')
 
};
const styles = StyleSheet.create({
  screenMain: {
    flex: 1,
    width: globals.SCREEN_SIZE.width,
    height: globals.SCREEN_SIZE.height,
    flexDirection: "column",
    backgroundColor: 'white'
  },
  bgroundImage: {
    width: wp('100%'),
    height: hp('95%'),
    resizeMode: 'cover',
    marginTop:hp('5%'),
    bottom:hp('4%'),
  },
  contentWrapper: {

    paddingLeft: '7%',
    marginTop: hp('6%'),
    // paddingTop: hp('0%'),
  },
  contentWrapperMain: {
    // paddingTop: hp('10%'),

    marginHorizontal: "3%"
  },
  contenttitle: {

    textAlign: 'left',
    fontFamily: I18nManager.isRTL ? globals.FONTS.notokufiarabicBold : globals.FONTS.cairoBold,
    color: globals.COLOR.themeGreen,
    fontSize: 24,
  },
  welView: {
    bottom: 13
  },
  contentHeader: {
    //textAlign:'center',
    textAlign: 'left',

    fontFamily: I18nManager.isRTL ? globals.FONTS.notokufiarabicBold : globals.FONTS.cairoBold,
    color: globals.COLOR.themeGreen,
    fontSize: 24,

  },
  bacView: {
    bottom: 25,
  },
  backText: {

    textAlign: 'left',
    fontFamily: I18nManager.isRTL ? globals.FONTS.notokufiarabicBold : globals.FONTS.cairoBold,
    color: 'black',
    fontSize: 24,

  },
  borderphone: {
    borderWidth: 1, 
    marginHorizontal: "7.5%",
    height: 65,
    borderRadius: 5,
    borderColor: globals.COLOR.lightgrey,
    marginTop: hp("0.8%"),
    backgroundColor: globals.COLOR.backgroundColor
  },
  phoneNo: {
    paddingLeft: '6%',
    marginTop: hp('1%'),
  },
  phoneStyle: {
    fontFamily: I18nManager.isRTL ? globals.FONTS.notokufiArabic : globals.FONTS.cairoSemiBold,
    color: globals.COLOR.grey,
    textAlign: 'left'
  },
  phoneScetion: {
    flexDirection: 'row',

    //bottom: 10,
    paddingLeft: "1%"
  },
  firstSection: {
    flexBasis: '30%',
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 15

  },
  maskImage: {
    height: 20,
    width: 28,
    borderRadius: 5
  },
  inpPhone: {
    flexDirection: 'row',
    marginLeft: 2
  },
  secondSection: {
    paddingLeft: 14,
    flexBasis: '100%',
    //top:10,
    //backgroundColor:'green',    
    flexDirection: 'row',
    height:40
  },
  disableText: {
    lineHeight: 20,
    fontSize: I18nManager.isRTL ? 14:16,
    color: globals.COLOR.blackTextColor,
    width: "80%",
    flexDirection: 'row',
    marginRight: 2,
    //  paddingLeft:I18nManager.isRTL ?'12%':0,
    textAlign: I18nManager.isRTL ? "right" : "left",
    fontFamily: I18nManager.isRTL ? globals.FONTS.notokufiArabic : globals.FONTS.cairoRegular,
  },
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('3%'),

    //paddingLeft:'7%'
  },
  orView: {
    flexDirection: 'row',
    marginHorizontal: "8%",
    marginTop: hp("2%"),
    alignItems:'center',
    justifyContent:"center"

  },
  dotView: { 
    color: globals.COLOR.lightgrey
  },
  orStyle: {
    color: globals.COLOR.custombuttoncolor,
    fontFamily: I18nManager.isRTL ? globals.FONTS.notokufiArabic : globals.FONTS.cairoSemiBold,
  },
  semailView: {
    marginTop: hp("1.5%")
  },
  semailStyle: {
    textAlign: 'center',
    fontFamily: I18nManager.isRTL ? globals.FONTS.notokufiArabic : globals.FONTS.cairoSemiBold,
    fontSize: 15,
  },
  NewUser: {
    marginTop: I18nManager.isRTL ? globals.SCREEN_SIZE.height <= 600 ? hp("13%") : (globals.SCREEN_SIZE.height <= 700 ? hp("18%") : hp("27%")) : globals.SCREEN_SIZE.height <= 600 ? hp("15%") : (globals.SCREEN_SIZE.height <= 700 ? hp("20%") : hp("29%")),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ssignView: {
    paddingLeft: 4
  },
  ssign: {
    textDecorationLine: 'underline',
    color: globals.COLOR.custombuttoncolor,
    fontFamily: I18nManager.isRTL ? globals.FONTS.notokufiarabicBold : globals.FONTS.cairoBold,

    fontSize: 15,
  },
  border:{
    width: '46%',
    //height: 50,
    //padding: 12,
    borderRadius: 1,
    borderColor: '#D0D0D0',
    borderWidth: .3,
    alignItems: 'center',
    borderStyle: 'dashed',
  }


});

export { images, styles };