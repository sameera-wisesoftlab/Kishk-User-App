import { StyleSheet,I18nManager } from "react-native";
import globals from "../../lib/globals"

const images = {
 
};

const styles = StyleSheet.create({
    float:{
        position:'absolute',
        bottom:0,
        width:'100%',
        height:90,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        backgroundColor:'white',
        borderBottomWidth:0,
        borderBottomColor:'white',
        // paddingLeft:'2%',
        // paddingRight:'2%',
        // borderWidth:0.5,
        shadowColor: "#000",
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: globals.INTEGER.opacityMedium,
        shadowRadius:10,
        elevation: 3,
        flexDirection:'row',
        //justifyContent:'space-between',
        alignItems:'center',
        justifyContent:'center'
        // paddingLeft:'4%',
        // paddingRight:'4%'
        
    },
    floatabc:{
        position:'absolute',
        bottom:0,
        width:'100%',
        height:90,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        backgroundColor:'white',
        paddingLeft:'2%',
        paddingRight:'2%',
        
        //borderWidth:0.5,
        shadowColor: "#000",
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: globals.INTEGER.opacityMedium,
        shadowRadius:10,
        elevation: 3,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:'4%',
        paddingRight:'4%'
        
    },
    floata:{
        position:'absolute',
        bottom:0,
        width:'100%',
        height:90,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        backgroundColor:'white',
        paddingLeft:'2%',
        paddingRight:'2%',
        //borderWidth:0.5,
        shadowColor: "#000",
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: globals.INTEGER.opacityMedium,
        shadowRadius:10,
        elevation: 3,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:'4%',
        paddingRight:'4%'
        
    },
    content:{
       
    },
    price:{
        alignItems:'center',
        justifyContent:'center'
    },
    dark:{
        textAlign: "left",
    color: globals.COLOR.text,
    fontFamily: I18nManager.isRTL ? globals.FONTS.notokufiarabicBold :globals.FONTS.cairoBold,

    fontSize:18
    },
    light:{
        textAlign: "left",
        color: globals.COLOR.greyText,
        fontFamily: I18nManager.isRTL ? globals.FONTS.notokufiarabic :globals.FONTS.cairoLight,
        textDecorationLine:'line-through',
        //fontSize: globals.SCREEN_SIZE.width * 0.04,
        fontSize:14
    },
    lightSAR:{
        textAlign: "left",
        color: globals.COLOR.red,
        fontFamily: I18nManager.isRTL ? globals.FONTS.notokufiarabic :globals.FONTS.cairoLight,
        fontSize:13
    },
    lightSARar:{
        textAlign: "left",
        color: globals.COLOR.grey,
        fontFamily: I18nManager.isRTL ? globals.FONTS.notokufiarabic :globals.FONTS.cairoLight,
        fontSize:12
    },
    butabc:{
        width:163,
        height:40,
        borderRadius:10,
        backgroundColor:globals.COLOR.lightgrey,
        alignItems:'center',
        justifyContent:'center',
        
    },
    but:{
        width:163,
        height:40,
        borderRadius:10,
        backgroundColor:globals.COLOR.custombuttoncolor,
        alignItems:'center',
        justifyContent:'center'
    },
    but1:{
        width:130,
        height:40,
        borderRadius:5,
        backgroundColor:globals.COLOR.red,
        alignItems:'center',
        justifyContent:'center'
    },
    butText:{
        color: 'white',
        fontFamily: I18nManager.isRTL ? globals.FONTS.notokufiArabic :globals.FONTS.cairoLight,
        fontSize:14
    },
    butTextabc:{
        color: 'black',
        fontFamily: I18nManager.isRTL ? globals.FONTS.notokufiArabic :globals.FONTS.cairoLight,
        fontSize:14
    },
    row:{
        flexDirection:'row',
        alignItems:'center'
    },
    clearBox:{
        width:80,
        height:40,
        borderWidth:0.5,
        borderRadius:5,
        backgroundColor:'grey',
        alignItems:'center',
        justifyContent:'center'
    },
    clearText:{
        color: globals.COLOR.textGrey,
        fontFamily: I18nManager.isRTL ? globals.FONTS.notokufiArabicBold :globals.FONTS.cairoBold,
        fontSize:14
    },
    butFill:{
        width:220,
        height:40,
        borderRadius:5,
        backgroundColor:globals.COLOR.red,
        alignItems:'center',
        justifyContent:'space-between',
        marginLeft:'2%',
        flexDirection:'row',
        paddingLeft:'2%',
        paddingRight:'2%'
    },
    results:{
        color: 'white',
        fontFamily: I18nManager.isRTL ? globals.FONTS.notokufiArabicBold :globals.FONTS.cairoBold,
        fontSize:14
    },
    buttonStyle:{
        backgroundColor:'#ff2c2c',
         width:250,
         height: 40,
         borderRadius:8,
         justifyContent:'center',
         alignItems:'center',
        
        // backgroundColor:'#cccccc'
      },
      buttonText:{
        color:'white',
        fontFamily: I18nManager.isRTL ? globals.FONTS.notokufiArabic :globals.FONTS.cairoSemiBold,
        // fontFamily: globals.FONTS.avenirMedium,
        fontSize:globals.FONTSIZE.fontSizeFifteen,
        },
  
});

export { images, styles  };
