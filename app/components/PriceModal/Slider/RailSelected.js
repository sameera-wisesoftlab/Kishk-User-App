import React, { memo } from 'react';
import {StyleSheet,I18nManager, View} from 'react-native';

const RailSelected = () => {
  return (
    <View style={styles.root}/>
  );
};

export default memo(RailSelected);

const styles = StyleSheet.create({
  root: {
    height: 5,
    backgroundColor: '#DB0000',
    borderRadius: 2,
    
  },
});
