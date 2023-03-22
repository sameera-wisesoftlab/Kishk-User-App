import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { images, styles } from "./styles";
import globals from "../../lib/globals"

const Loader = (props) => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color={globals.COLOR.custombuttoncolor} />
     </View>
  );
};

export default Loader;
 