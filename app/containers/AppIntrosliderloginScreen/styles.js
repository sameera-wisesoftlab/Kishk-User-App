import { StyleSheet, I18nManager } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import globals from "../../lib/globals";


const images = {
  backImage: require("../../assets/images/ChooseLanguage/Back.png"),


};

const styles = StyleSheet.create({
  screenMain: {
    flex: 1,
    backgroundColor: 'white'
  },
  slide: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: wp('80%'),
    height: hp('30%'),
    alignSelf: "center",
    resizeMode: 'contain',
    marginTop: hp('7%')
  },
  title: {
    color: "#233249",

    textAlign: "center",
    marginLeft: "4%",
    marginRight: "4%",

    marginVertical: hp('1%'),

    fontFamily: I18nManager.isRTL ? globals.FONTS.notokufiArabic : globals.FONTS.cairoBold,
    fontSize: hp('2.5%'),
  },
  titlestyle: {
    marginTop: hp('5%')
  },
  Textwidth: {
    width: "90%",
    marginTop: hp('1%')
  },
  text: {
    color: "#707070",

    textAlign: "center",
    marginLeft: "4%",
    marginRight: "4%",
    lineHeight: 24,
    marginVertical: hp('1%'),

    fontFamily: I18nManager.isRTL ? globals.FONTS.notokufiArabic : globals.FONTS.cairoSemiBold,
    fontSize: hp('2.1%'),
  },
  IntroView: {
    width: "100%",
    flex: 1,
    borderBottomWidth: 0,
    borderColor: globals.COLOR.lightgrey,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  dotB: {
    backgroundColor: globals.COLOR.custombuttoncolor,
    marginTop: globals.SCREEN_SIZE.height <= 600 ? hp('15%') : (globals.SCREEN_SIZE.height <= 700 ? hp('0%') : hp('0%')),
    height: 5,
    width: 25
  },
  dotA: {
    marginTop: globals.SCREEN_SIZE.height <= 600 ? hp('15%') : (globals.SCREEN_SIZE.height <= 700 ? hp('0%') : hp('0%')),
    backgroundColor: globals.COLOR.lightgrey,
    height: 5,
    width: 25
  },
  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',

    marginVertical: hp('5%'),

  },

});

export { images, styles };
