import { StyleSheet, I18nManager, Platform } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import globals from "../../lib/globals";

const images = {
  driverImage: require("../../assets/images/SplashScreen/Splash.png"),
  drivergif: require("../../assets/images/SplashScreen/spalsh.gif"),
  bell: require("../../assets/images/SplashScreen/bell.gif"),
  teaImage: require("../../assets/images/ChooseLanguage/tea.png"),
  foodImage: require('../../assets/images/ChooseLanguage/Bottom.png'),
  kishkLogo: require('../../assets/images/ChooseLanguage/MLogo.png'),
  backgroundImage: require('../../assets/images/ChooseLanguage/Bg.png'),

};
const styles = StyleSheet.create({
  screenMain: {
    flex: 1,
    backgroundColor: 'white'
  },
  bgroundImage: {
    flex: 1,

    resizeMode: 'cover',
    borderBottomWidth: 0,
    borderColor: globals.COLOR.lightgrey,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: globals.COLOR.grey,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: globals.INTEGER.opacityHigh,
    shadowRadius: 2,
    elevation: 2,
  },
  imageContainer: {
    bottom: 0,
    position: "absolute",
    justifyContent: 'center',
    alignItems: 'center'

  },
  design: {
    bottom: 0,
    position: "absolute",
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: Platform.OS === 'ios' ? '5%' : null
  },
  logo: {
    width: 360,
    height: 400,
    resizeMode: 'contain'
  },
  imageoneDesign: {
    width: 400,
    height: 370,
    resizeMode: 'contain'
  },
  imageViewOne: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp('33%'),
    position: 'absolute',
    height: '100%',
    alignSelf: 'center'
  },
  logoi: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch'
  },
  greenDesign: {
    width: 370,
    height: 330,
    resizeMode: 'contain',
  },

});

export { images, styles };
