import { StyleSheet } from "react-native";
import globals from "../../lib/globals"
const styles = StyleSheet.create({
  buttonContainer: {
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:17
  },
  linearGradientContainer:{
    height:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 17,
    backgroundColor: globals.COLOR.red,
    // shadowColor: globals.COLOR.tabUnderLineColor,
    // shadowOffset: {
    //   width: 20,
    //   height: 16,
    // },
    // shadowOpacity: 0.58,
    // shadowRadius: 16.00,
    // elevation: 5,
  }
});

export { styles  };
