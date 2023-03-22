import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  TextInput,
} from 'react-native';

import { images, styles } from './styles';
import appTexts from '../../lib/appTexts';
import globals from '../../lib/globals';

const PromoCode = props => {
  const { coupon_code, applyCode, coupon_amount } = props;

  const [isApplyPress, setIsApplyPress] = useState(false);
  const [code, setCode] = useState('');
  const [error, resetError] = useState(false);

  const onApplyPress = () => {
    setIsApplyPress(!isApplyPress);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.OrderCard}>
        <View style={styles.lineOne}>
          <Text style={styles.apply}>{appTexts.CART.addpromo}</Text>
        </View>
        <View style={styles.arrow}>
          <Image source={images.arrowup} style={styles.arrowImage} />
        </View>
      </View>

      <View style={styles.textBox}>
        {coupon_code != '' && (
          <View style={styles.success}>
            <View style={styles.green}>
              <Image style={styles.tick} source={images.tick} />
            </View>
            <View style={styles.textLine}>
              <View style={{ marginLeft: 2 }}>
                <Text style={styles.coupon}>{appTexts.CART.coupon}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: '0.7%',
                  paddingTop: '.3%',
                }}>
                <Text style={styles.price}>{appTexts.CART.price} </Text>
                <Text style={styles.price}>{coupon_amount} </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                setCode('');
                applyCode('');
              }}
              style={styles.closeView}>
              <View style={styles.close}>
                <Text style={styles.closeText}>X</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}

        {coupon_code == '' && (
          <View style={{ height: '100%', flexDirection: 'row', alignItems: 'center' }}>
            <View
              style={[
                styles.pro,
                error && { borderColor: 'red', borderWidth: 1 },
              ]}>
              <TextInput
                style={styles.input}
                placeholder={appTexts.CART.enterpromo}
                onChangeText={txt => {
                  resetError(false);
                  setCode(txt);
                }}
              />
            </View>

            <View style={styles.applyBox}>
              <TouchableOpacity
                onPress={() => {
                  if (code == '') {
                    resetError(true);
                    return false;
                  }
                  applyCode(code);
                }}>
                <Text style={styles.applyText}>{appTexts.CART.apply}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};
PromoCode.propTypes = {
  isPastOrders: PropTypes.bool,
  orderId: PropTypes.string,
};

export default PromoCode;
