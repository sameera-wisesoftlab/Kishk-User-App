import { StyleSheet, I18nManager } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import globals from "../../lib/globals";

const images = {
  backgroundImage: require('../../assets/images/ChooseLanguage/Background.png')
};
const styles = StyleSheet.create({
  screenMain: {
    flex: 1,
    // width: globals.SCREEN_SIZE.width,
    // height: globals.SCREEN_SIZE.height,
    // flexDirection: "column",
    backgroundColor: globals.COLOR.headerColor,
    
  },
  
  formWrapper: {
     flex: 1,
    // marginHorizontal: "3.5%",
    backgroundColor:globals.COLOR.background,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    // width: globals.SCREEN_SIZE.width,
    // height: globals.SCREEN_SIZE.height,
   // marginBottom: 30,
  },
  nodataf:{
    textAlign:'center',
    fontFamily: I18nManager.isRTL
    ? globals.FONTS.notokufiArabic
    : globals.FONTS.cairoRegular,
  },
    flatListStyle: {
      flex:1,
      marginTop: 20,
      marginLeft: '5%',
      width: '95%',
      marginBottom: 10,
    },
      
 
});

export { images, styles };
