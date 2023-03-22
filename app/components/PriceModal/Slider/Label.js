import React, { memo } from 'react';
import { View, Text, StyleSheet , I18nManager} from 'react-native';
import globals from "../../../lib/globals"
const Label = ({ text }) => {
  
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{text +' SAR'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 1,
    //backgroundColor: 'green',
    borderRadius: 4,
    position:"absolute",
    top:35,
    left:-22,
    color:'#343438',
    //paddingLeft:'5%',
    fontSize: 14,
    //transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }]
    
  },
  text: {
    fontSize: 14,
    //color:'#818181',
    
    textAlign: I18nManager.isRTL ? "right" : "left", 
    //textAlign:I18nManager.isRTL ? 'leftt' :'right',
    //transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    fontFamily: I18nManager.isRTL ? globals.FONTS.notokufiArabic : globals.FONTS.cairoSemiBold,
  },
});

export default memo(Label);
