import { StyleSheet,I18nManager } from "react-native";
import globals from "../../lib/globals"

const images = {
    shoe:require('../../assets/images/SmallProductCard/shoe.png'),
  };

const styles = StyleSheet.create({
    ratingRow:{
        flexDirection:'row',
        //marginTop:'4%',
       // marginBottom:"1%",
      },
      numberRating:{
        fontSize:14,
        fontFamily:I18nManager.isRTL ? globals.FONTS.notokufiArabic : globals.FONTS.cairoRegular,
        color:'green'
      },
      star:{
        paddingLeft:'1%',
        paddingRight:'5%',
       alignSelf:'center',
      },
      starStyle:{
        width:14,
        height:14,
        resizeMode:'contain',
      },
      ratingK:{
        fontFamily:I18nManager.isRTL ? globals.FONTS.notokufiArabic : globals.FONTS.cairoRegular,
        fontSize:14
      },
      eye:{
        paddingLeft:'8%',
        alignSelf:'center',
      },
      eyeStyle:{
        width:14,
        height:14,
        resizeMode:'contain',
      },
    
      
      secondContainer: {
        width: '90%',
        height: 35,
        //alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop:'3%',
        paddingLeft:'2%',
        
      },
});
export { styles,images };