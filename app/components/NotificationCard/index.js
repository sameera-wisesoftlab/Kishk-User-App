import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, TouchableOpacity} from 'react-native';
import { styles } from "./styles";
import DotedDivider from '../DotedDivider';

import appTexts from '../../lib/appTexts';
const NotificationCard = (props) => {
  const {
        onCheckoutPress,
        isOrderDetails,
        isOrder,
      } = props;

  return (
    <View style={styles.fullWidthRowContainer}>
         <View style={styles.box1}>
          <View style={styles.lineOne}>
            
            <View style={styles.textOne}>
              <Text style={styles.textOneStyle}>{appTexts.NOTIFY.content1}</Text>
            </View>
          </View>
          <View style={styles.lineTwo}>
            
            <Text style={styles.min1}>{appTexts.NOTIFY.click}</Text>
            <Text style={styles.min}>{appTexts.NOTIFY.hrs}</Text>
          </View>
         </View>
    </View>
  );
};
NotificationCard.propTypes = {
  
  nameLabel:PropTypes.string
};

export default NotificationCard;