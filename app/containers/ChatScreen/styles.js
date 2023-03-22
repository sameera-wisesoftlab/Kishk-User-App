import { StyleSheet,I18nManager } from "react-native";
import globals from "../../lib/globals"
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
let headerButtonContainerWidth = globals.SCREEN_SIZE.width - (globals.MARGIN.marginTen*2);
let headerButtonWidth = (headerButtonContainerWidth-(globals.MARGIN.marginTen*2)) / 3;

const images = {
  
};

const styles = StyleSheet.create({
  screenMain:{
      flex:1,
      //flexDirection:'column',
      backgroundColor: globals.COLOR.background
  },
  screenContainer:{
    flex:1,
    marginTop:  globals.INTEGER.heightTen,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent:'center'
  },
  headerButtonContianer:{
    flexDirection: 'row',
    width: headerButtonContainerWidth,
    height: globals.INTEGER.heightFifty,
    alignItems: 'center'
  },
  headerButton:{
    width: headerButtonWidth,
    height: globals.INTEGER.heightThirty
  },
  headerButtonMargin:{
    marginLeft: globals.MARGIN.marginTen
  },
  toWrapper:{
    paddingLeft:'4.5%',
    paddingRight:'15%',


  },
  fromWrapper:{
    
    paddingRight:'4%',
    paddingLeft:'15%'


  },
  privacyContent:{
    paddingLeft:'5%',
    paddingRight:'5%',
    paddingTop:hp('2%'),
    fontFamily: I18nManager.isRTL ? globals.FONTS.notokufiArabic : globals.FONTS.CairoRegular,
    color:globals.COLOR.red,
    fontSize:13,
  },
  toChat:{
    backgroundColor:'#E4E4E4',
    //padding:18,
    //flexBasis:'20%',
    marginTop:25,
    borderTopLeftRadius:1,
    borderBottomLeftRadius:30,
    borderTopRightRadius:40,
    borderBottomRightRadius:40,
   

  },
  fromChat:{
    backgroundColor: '#E4E4E4',
    //padding:18,
    //flexBasis:'20%',
    marginTop:20,
    borderTopLeftRadius:40,
    borderBottomLeftRadius:40,
    borderTopRightRadius:1,
    borderBottomRightRadius:30,
  },
  tochatText:{
    color: '#123',
    fontSize:14,
    padding:16,
   
    paddingLeft:'6%',
    paddingRight:'6%',
    //textAlign:'center',
    fontFamily: I18nManager.isRTL ? globals.FONTS.notokufiArabic : globals.FONTS.CairoRegular,
  },
  fromchatText:{
   color:'white',
    fontSize:14,
    padding:15,
    paddingLeft:'6%',
    paddingRight:'6%',
    //textAlign:'center',
    fontFamily: I18nManager.isRTL ? globals.FONTS.notokufiArabic : globals.FONTS.CairoRegular,
  }, 
  inputmessage: {
    height: 140,
    marginTop: "5%",
    borderColor: "#DEDEDE",
    //backgroundColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 1,
    textAlignVertical: "top",
    fontFamily: I18nManager.isRTL ? globals.FONTS.notokufiArabic : globals.FONTS.CairoRegular,
    color:'black',
    //fontFamily: "Montserrat-Medium",
    textAlign: I18nManager.isRTL ? "right" : "left",
   
    // fontFamily: isRTL ? "Noto Kufi Arabic" : "Montserrat-Medium",
    fontSize: 15,
    padding: 10
  },
  buttonWrappers:{
    // paddingLeft:'3%',
     paddingRight:'4%',
    paddingBottom:'1%',
    //paddingTop:'1%',
    alignSelf:'center'
  },
  submitButton: {
    backgroundColor:  globals.COLOR.red,
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  // sendbuttonText:{
  //   color: globals.COLOR.white,
  //   fontFamily:I18nManager.isRTL ? globals.FONTS.notokufiArabic : globals.FONTS.poppinsRegular,
  //   fontSize: 15, 
  // },
  typeMessage:{
    paddingBottom: "3%",
    paddingTop: "2%",
    paddingLeft: "4%",
    paddingRight: "4%",
  }
});

export { images, styles };
