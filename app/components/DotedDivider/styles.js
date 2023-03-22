import { StyleSheet } from "react-native";
import globals from "../../lib/globals"
const styles = StyleSheet.create({
  dividerStyle:{
    height: 1, 
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 0.5,
    borderStyle: 'dashed',
    borderColor: globals.COLOR.lightgrey,
    width:'100%',
    borderRadius: 1,
  }
});

export { styles  };
