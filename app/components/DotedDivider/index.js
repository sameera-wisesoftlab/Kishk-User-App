import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View } from 'react-native';
import { styles } from "./styles";

const DotedDivider = (props) => {
	const {
		dividerStyle
	} = props;

  return (
	  <View style={styles.dividerStyle}/>
  );
};

DotedDivider.propTypes = {
	dividerStyle: PropTypes.object
};

export default DotedDivider;
