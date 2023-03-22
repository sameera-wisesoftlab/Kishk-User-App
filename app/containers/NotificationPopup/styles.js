import { StyleSheet,I18nManager } from "react-native";
import globals from "../../lib/globals"
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default class StyleSheetFactory {
  static getSheet(isRTL) {
    
    return StyleSheet.create({
      thirdwrapper: {
        flex: 1,
        justifyContent: "flex-start",
        paddingTop: "50%",
      },
      Signupwrapper: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        paddingTop: "2%",
      },
      modalMainContent: {
        justifyContent: "center",
      },
      modalmainView: {
        backgroundColor: "white",
        width: wp("90%"),
        padding: "5%",
        borderRadius: 10,
        borderColor: "rgba(0, 0, 0, 0.1)",
      },
      ModalContent: {
        flexDirection: "row",
        justifyContent: isRTL ? "flex-start" : "flex-end",
      },
      closeText: {
        fontSize: 20,
        color: "#aeaeae",
        marginRight: 10,
        fontFamily:I18nManager.isRTL ? globals.FONTS.notokufiArabic : globals.FONTS.avenirMedium,
        //fontWeight: "bold",
        //fontFamily: "Montserrat-SemiBold",
      },
      logo: {
        flexDirection: "row",
        justifyContent: "center",
        paddingBottom: "8%",
      },
      body: {
        flexDirection: "column",
        justifyContent: "center",
      },
      bodytext: {
        fontSize: 17,
        textAlign: "center",
        //fontFamily: "Montserrat-Regular",
        fontFamily:I18nManager.isRTL ? globals.FONTS.notokufiArabic : globals.FONTS.avenirMedium,
        color: "#000000",
      },
      contenttext: {
        fontSize: 15,
        textAlign: "center",
        //fontFamily: "Montserrat-SemiBold",
        fontFamily:I18nManager.isRTL ? globals.FONTS.notokufiArabic : globals.FONTS.avenirLight,
        marginTop: "4%",
        marginBottom: "9%",
        color: "#1e2324",
        lineHeight: 17,
      },
      listcontent: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: "5%",
        paddingLeft: "5%",
        paddingRight: "5%",
      },
      listdetails: {
        flexDirection: "row",
        alignItems: "center",
      },
      datetext: {
        paddingLeft: "3%",
        paddingRight: "3%",
        //fontFamily: "Montserrat-SemiBold",
        fontFamily: isRTL ? "NotoKufiArabic-Bold" : 'Montserrat-SemiBold',
        color: "#434a5e",
        fontSize: 12,
      },
      timetext: {
        //fontFamily: "Montserrat-Medium",
        fontFamily: isRTL ? "Noto Kufi Arabic" : 'Montserrat-Medium',
        color: "#777777",
        fontSize: 11,
      },
      pendingtext: {
        //fontFamily: "Montserrat-SemiBold",
        fontFamily: isRTL ? "NotoKufiArabic-Bold" : 'Montserrat-SemiBold',
        color: "#f12626",
        fontSize: 11,
      },
    });
  }
}
