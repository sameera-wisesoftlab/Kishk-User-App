import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';
import appTexts from '../../lib/appTexts';

const FaqView = props => {
  const {onBackButtonPress} = props;

  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity
        style={styles.imageWrapper}
        onPress={() => {
          onBackButtonPress();
        }}>
        <Image
          source={require('../../assets/images/ChooseLanguage/Back.png')}
          style={styles.arrowImage}
        />
      </TouchableOpacity>
      <View style={styles.verifyWrapper}>
        <Text style={styles.verifyText}> {appTexts.FAQ.Faq}</Text>
      </View>
    </View>
  );
};

FaqView.propTypes = {
  logoutButtonPress: PropTypes.func,
};

export default FaqView;
