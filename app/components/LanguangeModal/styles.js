import { StyleSheet,I18nManager } from "react-native";
import globals from "../../lib/globals";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from "react-native-responsive-screen";

const images = {
    
  //   close:require("../../assets/images/profileicon/Close.png"),
  //   redFlag:require('../../assets/images/chooseLanguage/eng.png'),
  // sFlag:require('../../assets/images/chooseLanguage/Arabic.png'),
  // radioOn:require('../../assets/images/listCard/radioOn.png'),
  // radioOff:require('../../assets/images/listCard/radioOff.png'),
   
};
const styles = StyleSheet.create({
modalMaincontentLogout: {
    justifyContent: "center",
    alignItems:'center',
  
  },
  modalmainviewLogout: {
    backgroundColor: "white",
    paddingLeft:'3%',
    paddingRight:'3%',
    paddingVertical: "2%",
    width:330,
    borderRadius:15,
    justifyContent:'center',
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  logoutTextView:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:'5%',
    marginBottom:'10%'
  

  },
  
  boxView:{
    //height:60,
    marginTop:'5%',
    width:'90%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    //marginLeft:'10%',
    marginRight:'5%',
    marginBottom:'8%',
     },
     boxViewnew:{
      //height:60,
     marginTop:'6%',
      width:'90%',
      flexDirection:'row',
      justifyContent:'space-between',
      marginRight:'5%',
      marginBottom:'8%',
       },
     flagLine:{
       flexDirection:'row',
       justifyContent:'center',
       alignItems:'flex-start',
       //marginTop:'6%',
       marginLeft:'10%',
       marginRight:'10%'
     },
     flagIon:{
       justifyContent:'center',
       alignItems:'center'
     },
     engText:{
       paddingLeft:'12%',
     },
     engTexts:{
       fontFamily:globals.FONTS.openSansSemiBold,
      fontSize:16,
     },
     varrow:{
       width:25,
       height:25,
             
     },
     arrowv:{
       alignSelf:'center',
      // alignItems:'center',
      },
     flagView:{
      width:40,
      height:20,
      borderRadius:8,
     
     },
     border:{
      width:'80%',
      height: 0.5,
      backgroundColor: globals.COLOR.borderColor,
      marginVertical:"2%",
      marginLeft:'10%',
      marginRight:'10%',
      // width:'70%'
     },
     closeX:{
       justifyContent:'flex-end',
       alignItems:'flex-end',
       marginTop:'8%',
       marginRight:'6%',
     },
     xClose:{
       fontSize:18,
       fontFamily:globals.FONTS.openSansLight,
       color: globals.COLOR.closebuttoncolor,
     },
     logoutTextStyle:{
        fontFamily:I18nManager.isRTL ? globals.FONTS.notokufiArabic : globals.FONTS.openSansSemiBold,
        color:globals.COLOR.blackTextColor,
        fontSize:16,
      },
      logoutTetStyle:{
        fontFamily:I18nManager.isRTL ? globals.FONTS.notokufiArabic : globals.FONTS.openSansSemiBold,
        color:globals.COLOR.blackTextColor,
        fontSize:18,
      },
    });

    export { styles,images  };