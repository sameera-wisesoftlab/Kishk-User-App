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
        paddingLeft:'2%',
        paddingRight:'2%',
        //borderWidth:0.5,
        //shadowColor: "#000",
        // shadowOffset: { width: 3, height: 3 },
        // shadowOpacity: globals.INTEGER.opacityMedium,
        // shadowRadius:10,
        // elevation: 3,
    shadowOpacity: Platform.OS === 'ios' ? 0.1 : globals.INTEGER.opacityHigh,
    elevation: Platform.OS === 'ios' ? 1 : 10,
    shadowRadius: Platform.OS === 'ios' ? 0.1 : 3,
    shadowOffset:{
      width:1,
      height:1,
    },
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:'4%',
        paddingRight:'4%'
        
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
    price:{
        //alignItems:'center',
        //justifyContent:'center'
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        //justifyContent:'center'
    },
    lightSAR:{
        textAlign: "left",
        color: globals.COLOR.red,
        fontFamily: I18nManager.isRTL ? globals.FONTS.notokufiArabic :globals.FONTS.cairoLight,
        fontSize:13
    },
    lightSARar:{
        textAlign: "left",
        color: globals.COLOR.grey,
        fontFamily: I18nManager.isRTL ? globals.FONTS.notokufiArabic :globals.FONTS.cairoLight,
        fontSize:14
    },
    dark:{
        textAlign: "left",
    color: globals.COLOR.text,
    fontFamily: I18nManager.isRTL ? globals.FONTS.notokufiarabicBold :globals.FONTS.cairoBold,

    fontSize:18
    },
    butabc:{
        width:163,
        height:40,
        borderRadius:10,
        backgroundColor:globals.COLOR.lightgrey,
        alignItems:'center',
        justifyContent:'center',
        
    },
    butTextabc:{
        color: 'black',
        fontFamily: I18nManager.isRTL ? globals.FONTS.notokufiArabic :globals.FONTS.cairoLight,
        fontSize:14
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
    but:{
        width:163,
        height:40,
        borderRadius:10,
        backgroundColor:globals.COLOR.custombuttoncolor,
        alignItems:'center',
        justifyContent:'center'
    },
    
});

export { images, styles  };
