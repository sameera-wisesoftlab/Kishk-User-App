import { StyleSheet,I18nManager } from "react-native";
const styles = StyleSheet.create({
  bannerContainer: {
    width: '100%',
    height:140,
  },
  imageContainer:{
    width: '94%',
    height: '100%',
    
    marginLeft:'3%',
    marginRight:'3%',
  },
  imageStyle:{
    width: '100%',
    height: '100%',
    borderRadius:10,
   // transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }] 
  }
});

export { styles };
