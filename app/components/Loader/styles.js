import { StyleSheet } from "react-native";
import globals from "../../lib/globals"

const images = {
 
};

const styles = StyleSheet.create({
	loader:{
      position:'absolute',
      width:'100%',
      height:'100%',
      zIndex:999999,
      backgroundColor:globals.COLOR.transparent,
      justifyContent: "center",
      alignItems: "center"
    }
});

export { images, styles  };
