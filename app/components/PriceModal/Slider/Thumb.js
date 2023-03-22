import React, { memo } from 'react';
import { View, StyleSheet,Text,I18nManager } from 'react-native';

const THUMB_RADIUS = 12;

const Thumb = () => {
  return (
    <View style={styles.root}>
      <View style={styles.insideroot}>
        <View style={styles.innerinsideroot}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: THUMB_RADIUS * 2,
    height: THUMB_RADIUS * 2,
    borderRadius: THUMB_RADIUS,
    borderWidth: .5,
    borderColor: '#DB0000',
    backgroundColor: '#FF2C2C',
    transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    alignItems:'center',
    justifyContent:'center'
    },
  insideroot:{
    backgroundColor:'white',
    padding:9,
    height: 5,
  width: 5,
  borderRadius: 8,
  alignItems:'center',
  justifyContent:'center'
  //margin:1
  },
  innerinsideroot:{
    backgroundColor:'#DB0000',
    padding:4,
    height:13,
  width: 13,
  borderRadius: 10,
  }
});

export default memo(Thumb);
