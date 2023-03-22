 import React, { Component,useState } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text,TouchableOpacity,I18nManager} from 'react-native';
import { styles } from "./styles";
import appTexts from '../../lib/appTexts';
import Rating from '../../components/Rating';

const ProductDescriptionCard = (props) => {
  const {
        
      } = props;

    
  return (
<View style={styles.cardView}>
    <View style={styles.rateLine}>
        <View style={styles.name}>
            <Text style={styles.nameText}>{appTexts.PRODUCT.name}</Text>
        </View>
       <View style={styles.rate}>
           <Rating/>
       </View>
    </View>
    <View style={styles.tit}>
           <Text style={styles.title}>{appTexts.PRODUCT.title}</Text>
       </View>
</View>

  );
};
ProductDescriptionCard.propTypes = {
  item: PropTypes.object
};

export default ProductDescriptionCard;