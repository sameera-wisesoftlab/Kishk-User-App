import { StyleSheet, I18nManager } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import globals from "../../../lib/globals";

const styles = StyleSheet.create({
  itemConatiner: {
    //width: '100%',
    //height: 60,
    //backgroundColor:'red'
  },
  listWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //paddingTop:hp('3%'),
    paddingBottom: hp('5%'),
    paddingLeft: '3%',
  },
  imageMain: {
    resizeMode: "contain", width: 30, height: 30,
  },
  contentHeading: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    fontSize: 14,

    paddingLeft: '5%',
    paddingRight: '4%',
    color: '#000000'
  },
  languageHeading: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    fontSize: 13,
    color: '#8B90A9'
  },
  arrowWrapper: {
    flexDirection: 'row',
    paddingRight: '4.5%'
  },
  languageWrapper: {
    marginRight: -54,
  },
  arrowImage: {
    resizeMode: "contain", width: 16,
    height: 16, transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }]
  },


});

export { styles };
