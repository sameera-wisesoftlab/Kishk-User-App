import { StyleSheet,I18nManager } from "react-native";
import globals from "../../lib/globals";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from "react-native-responsive-screen";

const images = {
  shoe:require('../../assets/images/SmallProductCard/shoe.png'),
};

const styles = StyleSheet.create({
    square:{
        width:globals.SCREEN_SIZE.height <= 600 ? 150: (globals.SCREEN_SIZE.height <=700 ? 145:140),       
        height:40,
        borderRadius:5,
       
        backgroundColor:globals.COLOR.lightgrey,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:40,
        
    },
    Redsquare:{
        width:globals.SCREEN_SIZE.height <= 600 ? 150: (globals.SCREEN_SIZE.height <=700 ? 145:140),        
        height:40,
        borderRadius:5,
       borderWidth:1,
       backgroundColor:globals.COLOR.backgroundColor,
       borderColor:globals.COLOR.custombuttoncolor,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:40,
        
    },
    RedName:{
        color:globals.COLOR.custombuttoncolor,
        fontSize:12,
        fontFamily:I18nManager.isRTL ? globals.FONTS.notokufiArabic : globals.FONTS.cairoSemiBold,
    },
    shoe:{
        width:40,
        height:40,
    },
    brands:{
        width:80,
        height:80,
    },
    wrapperView:{
        marginLeft:20,
        alignItems:'center',
        justifyContent:'center',
        // marginTop:20,
        marginBottom: globals.SCREEN_SIZE.height <= 600 ?hp('12%'): (globals.SCREEN_SIZE.height <=700 ?hp('6%'):hp('7%')),

    },
    title:{
       
       
    
    },
    name:{
        textAlign:'center',
        fontSize:12,
        fontFamily:I18nManager.isRTL ? globals.FONTS.notokufiArabic : globals.FONTS.cairoSemiBold,
        color:globals.COLOR.grey
    }

});

export { images, styles  };