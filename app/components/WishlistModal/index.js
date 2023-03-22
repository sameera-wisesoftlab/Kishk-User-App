import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
} from 'react-native';

import { styles } from './styles';
import appTexts from '../../lib/appTexts';
import Modal from 'react-native-modal';
import CartCard from '../CartCard';

import { BackHandler } from 'react-native';
import { connect } from 'react-redux';
import Loader from '../../components/Loader';
import * as wishlistActions from '../../actions/wishlistActions';

import NetInfo from '@react-native-community/netinfo';
import _ from 'lodash';
import functions from '../../lib/functions';
import { bindActionCreators } from 'redux';

const WishlistModal = props => {
  const { item, isWishlistModalVisible, closeModal, isTwelve, addProductToCart } =
    props;

  //mounted
  useEffect(() => {
    BackHandler.addEventListener(
      'hardwareBackPress',
      (backPressed = () => {
        BackHandler.exitApp();
        return true;
      }),
    );
  }, []);

  useEffect(() => handleComponentMounted(), [isWishlistModalVisible]);

  const handleComponentMounted = () => {
    NetInfo.fetch().then(state => {
      if (state.isConnected && isWishlistModalVisible) {
        props.getWishlist();
      }
      if (!state.isConnected) {
        functions.displayAlert(
          null,
          appTexts.ALERT_MESSAGES.noInternet,
          'WishListModal',
        );
      }
    });
  };

  const removeFromWishlist = productId => {
    Alert.alert(
      appTexts.CART.remove,
      appTexts.STRING.removewish,
      [
        { text: appTexts.STRING.yes, onPress: () => props.addRemoveToWishlist(productId) },
        {
          text: appTexts.LOGOUT.cancel,
          onPress: () => null,
        },
      ],
      { cancelable: true },
    );
  };

  const renderItem = ({ item, index }) => (
    <CartCard
      item={item}
      isWish={true}
      removeFromWishlist={() => removeFromWishlist(item.product_id)}
      addProdToCart={() => addProductToCart(item.product_id)}
    />
  );

  return (
    <Modal
      //animationType="fade"
      onRequestClose={() => null}
      style={styles.modalStyle}
      isVisible={isWishlistModalVisible}>
      <View style={styles.popupContainer}>
        {props.isLoading && <Loader />}

        <FlatList
          ListHeaderComponent={() => (
            <>
              <View style={styles.closeContainer}>
                <TouchableOpacity
                  style={styles.popupClose}
                  onPress={() => {
                    closeModal();
                  }}>
                  <Image
                    source={require('../../assets/images/products/Card.png')}
                    style={styles.pic}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ marginBottom: 10, marginTop: -10 }}>
                <Text style={styles.fontView}>
                  {appTexts.CART.wishlist}
                  {props.wishlistData.length > 0
                    ? ` (${props.wishlistData.length})`
                    : ' (0)'}
                </Text>
              </View>
            </>
          )}
          style={styles.flatListStyle}
          data={props.wishlistData}
          // extraData={props.wishlistData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          ListEmptyComponent={() => (
            <View
              style={{
                height: 50,
              }}>
              <Text style={styles.nodataf}>{appTexts.STRING.nodata}</Text>
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Modal>
  );
};

const mapStateToProps = (state, props) => {
  return {
    wishlistData: _.get(state, 'wishlistReducer.wishlistData', ''),
    isLoading: _.get(state, 'wishlistReducer.isLoading', ''),
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

const WishlistModalWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WishlistModal);

WishlistModalWithRedux.navigationOptions = ({ navigation }) => ({
  header: null,
});

export default WishlistModalWithRedux;
