import React, {useState} from 'react';

import {View, Image, Text, TouchableOpacity} from 'react-native';
import {images, styles} from './styles';

import appTexts from '../../lib/appTexts';
// import DateModal from '../DateModal';

const CartButton = props => {
  const {
    isCart,
    onCheckoutClick,
    grant_total,
    length,
    resetCustomEdit,
    submitCustomEdit,
  } = props;

  const [isDateModalVisible, setIsDateModalVisibile] = useState(false);

  const closeModal = () => {
    setIsDateModalVisibile(!isDateModalVisible);
  };
  return (
    <View style={isCart ? styles.float : styles.floatabc}>
      {isCart ? (
        <View style={styles.price}>
          <View style={styles.row}>
            {length > 0 && (
              <Text style={styles.lightSAR}>
                {length}{' '}
                {length == 1 ? appTexts.CART.incart : appTexts.CART.incart_s}{' '}
              </Text>
            )}
          </View>
          <View style={styles.row}>
            <Text style={styles.lightSARar}>{appTexts.CART.price} </Text>
            <Text style={styles.dark}>{grant_total} </Text>
          </View>
        </View>
      ) : (
        
        <TouchableOpacity
            onPress={() => {
              resetCustomEdit();
            }}>
        <View style={styles.butabc}>
          
            <Text style={styles.butTextabc}>{appTexts.CART.reset}</Text>
         
        </View>
         </TouchableOpacity>
      
      )}

      {isCart ? (
        <View style={styles.but1}>
          <TouchableOpacity
            onPress={() => {
              onCheckoutClick();
            }}>
            <Text style={styles.butText}>{appTexts.CART.confirmorder}</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
        onPress={() => {
          submitCustomEdit();
        }}>
        <View style={styles.but}>
         
            <Text style={styles.butText}>{appTexts.CART.submit}</Text>
         
        </View>
        </TouchableOpacity>
      )}
    </View>
  );
};
CartButton.propTypes = {};

export default CartButton;
