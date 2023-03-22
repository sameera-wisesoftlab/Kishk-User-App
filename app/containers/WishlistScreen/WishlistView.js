import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Keyboard,
  ImageBackground,
  TouchableWithoutFeedback,
  ScrollView,
  addProductToCart,
} from 'react-native';

import { styles, images } from './styles';
import Header from '../../components/Header';
import globals from '../../lib/globals';
import appTexts from '../../lib/appTexts';

import CartCard from '../../components/CartCard';

const WishlistView = props => {
  const {
    loginButtonPress,
    onBackButtonClick,
    wishlistData,
    removeFromWishlist,
    addProductToCart,
  } = props;

  const renderItem = ({ item, index }) => (
    <CartCard
      item={item}
      isWish={true}
      removeFromWishlist={() => removeFromWishlist(item.product_id)}
      addProdToCart={() => addProductToCart(item.product_id)}
    />
  );

  return (
    <View style={styles.screenMain}>
      <Header
        isBackButtonRequired={true}
        onBackButtonClick={onBackButtonClick}
        isLeftTitleRequired={true}
        title={appTexts.STRING.wishlist}
        customHeaderStyle={{
          height: globals.INTEGER.headerHeight + 20,
          alignItems: 'center',
          marginRight: '10%',
          backgroundColor: globals.COLOR.headerColor,
        }}
      />

      <View style={styles.formWrapper}>
        <FlatList
          style={styles.flatListStyle}
          data={wishlistData}
          extraData={wishlistData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          ListEmptyComponent={() => (
            <View>
              <Text style={styles.nodataf}>
                {appTexts.STRING.nodata}
              </Text>
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

WishlistView.propTypes = {
  loginButtonPress: PropTypes.func,
  onBackButtonPress: PropTypes.func,
};

export default WishlistView;
