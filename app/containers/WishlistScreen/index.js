import React, {useEffect} from 'react';
import {BackHandler, Alert} from 'react-native';
import {connect} from 'react-redux';
import WishlistView from './WishlistView';

import * as wishlistActions from '../../actions/wishlistActions';
import functions from '../../lib/functions';

import appTexts from '../../lib/appTexts';

import NetInfo from '@react-native-community/netinfo';
import _ from 'lodash';

import {bindActionCreators} from 'redux';

const WishlistScreen = props => {
  const loginButtonPress = () => {
    props.navigation.navigate('TabNavigator', {screen: 'HomeScreen'});
  };

  const onBackButtonClick = () => {
    props.navigation.goBack();
  };

  //mounted
  useEffect(() => handleComponentMounted(), []);

  const handleComponentMounted = () => {
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        props.getWishlist();
      } else {
        functions.displayAlert(
          null,
          appTexts.ALERT_MESSAGES.noInternet,
          'WishList',
        );
      }
    });
    BackHandler.addEventListener(
      'hardwareBackPress',
      (backPressed = () => {
        props.navigation.goBack();
        return true;
      }),
    );
  };

  const removeFromWishlist = productId => {
    Alert.alert(
      appTexts.CART.remove,
      appTexts.STRING.removewish,
      [
        {text: appTexts.STRING.yes, onPress: () => props.addRemoveToWishlist(productId)},
        {
          text: appTexts.LOGOUT.cancel,
          onPress: () => null,
        },
      ],
      {cancelable: true},
    );
  };

  const addProductToCart = productId => {
    props.navigation.navigate('ProductDetailScreen', {
      id: productId,
      from: 'wishlist',
    });
  };

  return (
    <WishlistView
      onBackButtonClick={onBackButtonClick}
      wishlistData={props.wishlistData}
      removeFromWishlist={removeFromWishlist}
      addProductToCart={addProductToCart}
      // wishlistCardDetails = {_.get(props, 'wishlistData', [])}
    />
  );
};

const mapStateToProps = (state, props) => {
  return {
    wishlistData: _.get(state, 'wishlistReducer.wishlistData', ''),
    isLoading: _.get(state, 'termsFaqPrivacyReducer.isLoading', ''),
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getWishlist: wishlistActions.getWishlistData,
      addRemoveToWishlist: wishlistActions.addRemoveToWishlist,
    },
    dispatch,
  );
};

const WishlistScreenWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WishlistScreen);

WishlistScreenWithRedux.navigationOptions = ({navigation}) => ({
  header: null,
});

export default WishlistScreenWithRedux;
