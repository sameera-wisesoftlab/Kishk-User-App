import { StyleSheet,I18nManager } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import globals from "../../lib/globals"

let headerButtonContainerWidth = globals.SCREEN_SIZE.width - (globals.MARGIN.marginTen*2);
let headerButtonWidth = (headerButtonContainerWidth-(globals.MARGIN.marginTen*2)) / 3;

const images = {
image:require('../../assets/images/category/img2.png'),
  
};

const styles = StyleSheet.create({


  
  screenMain:{
      flex:1,
      flexDirection:'column',
      backgroundColor: 'white'
      
      
  },
  screenContainerScrollView:{
    width: globals.SCREEN_SIZE.width,
    height: globals.SCREEN_SIZE.height,
    backgroundColor:'white',
    flex:1,
    marginBottom:'10%'
  },
  
  screenDesignContainer:{
    width: globals.SCREEN_SIZE.width,
    paddingBottom: globals.INTEGER.screenPaddingFromFooter,
    //backgroundColor:globals.COLOR.background,
    height: globals.SCREEN_SIZE.height,
   
flex:1,
  },
  sliderView:{
      
      paddingBottom:'10%',
      backgroundColor:'white',
  },
  paySection:{
    width: globals.SCREEN_SIZE.width,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:globals.COLOR.background,
    flex:0.4,
   borderTopLeftRadius:30,
   borderTopRightRadius:30,
   paddingBottom:'5%',
    
    
  },
  sectionPay:{
    width: globals.SCREEN_SIZE.width,
    paddingBottom: globals.INTEGER.screenPaddingFromFooter,
    backgroundColor:'white',
   bottom:20,
   flex:1,
   borderTopLeftRadius:30,
   borderTopRightRadius:30, 
   paddingTop:'10%',
   //paddingBottom:'10%'
   
  },
  imageView:{
      paddingBottom:'10%'
  },
  image:{
      width:160,
      height:160,
      resizeMode:'contain',
  },
  thanks:{
      alignItems:'center',
      justifyContent:'center',
  },
  bold:{

  },
  thanksText:{
    color: globals.COLOR.text,
    fontFamily:I18nManager.isRTL ? globals.FONTS.notokufiarabicBold : globals.FONTS.cairoBold,
    fontSize:18
  },
  grey:{
      width:'80%',
     marginTop:'5%',
     flexDirection:'row',
  },
  light:{
      textAlign:'center',
      color: globals.COLOR.text,
    fontFamily:I18nManager.isRTL ? globals.FONTS.notokufiArabic : globals.FONTS.cairoSemiBold,
    fontSize:16
  },
  id:{
//textAlign:'right'
  },
  del:{
      marginLeft:'5%',
      marginRight:'5%',
  },
  buttons:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:'10%',
    marginBottom:'10%',
    width:'92%',
    marginLeft:'4%',
    marginRight:'4%'

  },
  butCancel:{
    width:'48%',
    height:50,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:globals.COLOR.lightgrey,
  },
  butLogout:{
    width:'48%',
    height:50,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:globals.COLOR.red, 
  },
  cancelText:{
    color: globals.COLOR.text,
    fontFamily:I18nManager.isRTL ? globals.FONTS.notokufiArabic : globals.FONTS.cairoSemiBold,
    fontSize:14,
  },
  logoutText:{
    color: 'white',
    fontFamily:I18nManager.isRTL ? globals.FONTS.notokufiArabic : globals.FONTS.cairoSemiBold,
    fontSize:14,
  }

 
 
 

});

export { images, styles };
