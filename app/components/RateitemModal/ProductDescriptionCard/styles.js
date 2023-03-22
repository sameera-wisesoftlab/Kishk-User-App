import { StyleSheet,I18nManager } from "react-native";
import globals from "../../lib/globals"

const images = {
    shoe:require('../../assets/images/SmallProductCard/shoe.png'),
  };

const styles = StyleSheet.create({
    listContainer: {
        width: '100%',
        flex:1,
        //marginLeft:10,
        //marginVertical:"10%",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row'
      },
      flatListStyle: {
        width: '100%',
        flexDirection:'row',
        
      },
      rateLine:{
          flexDirection:'row',
          width:'100%',
          alignItems:'center',
          justifyContent:'space-between'
      },
      cardView:{
          backgroundColor:'white',
          paddingLeft:'5%',
          paddingRight:'5%',
          paddingTop:'5%',
          paddingBottom:'5%'
      },
      rate:{
          alignItems:'flex-end',
          //justifyContent:'center'
      },
      nameText:{
        fontFamily: I18nManager.isRTL ? globals.FONTS.notokufiArabicBold : globals.FONTS.cairoSemiBold,
        color:globals.COLOR.text,
        fontSize:16,   
        textAlign:'left'
      },
      tit:{
          width:'60%',
      },
      title:{
        fontFamily: I18nManager.isRTL ? globals.FONTS.notokufiarabicBold : globals.FONTS.cairoBold,
        color:globals.COLOR.text,
        fontSize:16,  
        textAlign:'left'
      }
});
export { styles,images };