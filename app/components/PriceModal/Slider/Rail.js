import React, { memo } from 'react';
import { View, StyleSheet ,Text} from 'react-native';

const Rail = () => {
  return (
    <View style={styles.root}>
    <View style={styles.left}/>
    <View style={styles.left}/>
    </View>
  );
};

export default memo(Rail);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: 8,
    borderRadius: 6,
    backgroundColor: '#cfcfcf',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  left:{
    width: 22,
    height: 22,
    backgroundColor:'#cfcfcf',
    borderRadius: 11,
    marginLeft:-8,
    marginRight:-8
  }
});
