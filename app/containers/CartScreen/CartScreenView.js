import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

import globals from '../../lib/globals';
import appTexts from '../../lib/appTexts';
import { styles, images } from './styles';
import Header from '../../components/Header';
import HeadingWithRightLink from '../../components/HeadingWithRightLink';

import CartList from '../../components/CartCard/CartList';
import PromoCode from '../../components/PromoCode';
import CartButton from '../../components/CartButton';
import PriceCard from '../../components/PriceCard';

import WishlistModal from '../../components/WishlistModal';
import Loader from '../../components/Loader';
import LoginRequiredModal from '../../components/LoginRequiredModal';
import EditModal from '../../components/EditModal';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import CustomButton from '../../components/CustomButton';

const CartScreenView = props => {
  const {
    onBackButtonClick,
    onCheckoutClick,
    cartData,
    updateCart,
    isLoading,
    applyCode,
    userData,
    onHeartClick,
    is_guest_logged_in,
    loginpage,
    homePage,
    loginRequired,
    addProductToCart = () => { },
    isEditModalVisible,
    setIsEditModalVisibile,
    fetchEditDetails,
    custom_attrs,
    custom_image,
    onSubmitData,
    isWishlistModalVisible,
    openWishlistModal,
    closeWishlistModal,
    gotoHome,
    isAddCustomAttr,
    isRemoveCustomItem,
    removeAttr,
    isAddToWishList,
  } = props;

  const items =
    typeof cartData?.cartDetails?.items !== 'undefined'
      ? cartData?.cartDetails?.items
      : [];
  const _length = items.length;
  let grant_total = cartData?.cartDetails?.grant_total;
  if (grant_total) {
    grant_total = parseFloat(grant_total).toFixed(2);
  }
  const coupon_code = cartData?.cartDetails?.coupon_code || '';
  const coupon_amount = cartData?.cartDetails?.coupon_amount || 0;
  const [editItemsCount, setEditItemsCount] = useState(0);

  const renderItem2 = ({ item, index }) => (
    <CartList
      item={item}
      index={index}
      firstTabText={appTexts.CART.enterdetails}
      secondTabText={appTexts.CART.howto}
      updateCart={(data, qty, current_qty, item_type, all_attrs) => {
        updateCart(data, qty, current_qty, item_type, all_attrs);
        const _len = item?.item_count || 1;
        setEditItemsCount(_len);
      }}
      isCart={true}
      userData={userData}
      onHeartClick={onHeartClick}
      openEditModal={id => {
        const _len = item?.item_count || 1;
        setEditItemsCount(_len);
        fetchEditDetails(id);
      }}
      is_guest_logged_in={is_guest_logged_in}
    />
  );

  return (
    <View style={styles.screenMain}>
      <Header
        isCloseImageRequired={true}
        onBackButtonClick={onBackButtonClick}
        isLeftTitleRequired={true}
        isCartScreen={true}
        title={appTexts.FOOTER.cart}
        customHeaderStyle={{
          height: globals.INTEGER.headerHeight,
          backgroundColor: globals.COLOR.headerColor,
        }}
      />

      {isLoading && <Loader />}

      {is_guest_logged_in !== true && (
        <View style={styles.wishView}>
          <TouchableOpacity
            style={styles.modalView}
            onPress={() => {
              openWishlistModal();
            }}>
            <Image source={images.loveimage} style={styles.loveimage} />
            <Text style={styles.addfromView}>{appTexts.CART.addfrom}</Text>
            <WishlistModal
              isWishlistModalVisible={isWishlistModalVisible}
              closeModal={closeWishlistModal}
              addProductToCart={productId => {
                closeWishlistModal();
                addProductToCart(productId);
              }}
            />
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.screenContainerScrollView}>
        <View style={styles.screenDesignContainer}>
          <View style={styles.listContainer}>
            <FlatList
              ListEmptyComponent={
                <>
                  {!isLoading && (
                    <View
                      style={{
                        height: heightPercentageToDP('100%'),
                        width: widthPercentageToDP('100%'),
                      }}>
                      <Image
                        source={images.empty}
                        style={{
                          width: 200,
                          height: '55%',
                          alignSelf: 'center',
                        }}
                        resizeMode={'contain'}
                      />
                      <View style={{ width: '100%', alignItems: 'center' }}>
                        <Text style={styles.emptyItem}>
                          {appTexts.CART.empty}
                        </Text>
                        <Text style={styles.emptyItem}>
                          {appTexts.CART.addfew}
                        </Text>
                      </View>
                      <TouchableOpacity onPress={gotoHome}>
                        <CustomButton
                          buttonText={appTexts.CART.startshop}
                          btnStyle={{
                            width: '80%',
                            alignSelf: 'center',
                            marginTop: 20,
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  )}
                </>
              }
              ListHeaderComponent={
                <View style={styles.head}>
                  <HeadingWithRightLink nameLabel={appTexts.CART.mycarr} />
                  <View style={styles.itemBox}>
                    <Text style={styles.item}>
                      {_length == 0 && isLoading ? '' : _length}{' '}
                      {_length == 1 ? appTexts.CART.item : appTexts.CART.items}
                    </Text>
                  </View>
                </View>
              }
              ListFooterComponent={
                <>
                  {_length > 0 && (
                    <PromoCode
                      coupon_code={coupon_code}
                      applyCode={applyCode}
                      coupon_amount={coupon_amount}
                    />
                  )}
                  {_length > 0 && <PriceCard cartData={cartData} />}
                </>
              }
              style={styles.flatListStyle}
              data={items}
              renderItem={renderItem2}
            />
          </View>
        </View>
      </View>
      {_length > 0 && (
        <CartButton
          isCart={true}
          onCheckoutClick={onCheckoutClick}
          length={_length}
          grant_total={grant_total}
        />
      )}

      <LoginRequiredModal
        isVisible={loginRequired === true}
        closeModal={homePage}
        loginpage={loginpage}
        isAddToWishList={isAddToWishList}
      />

      {isEditModalVisible && (
        <EditModal
          isEditModalVisible={isEditModalVisible}
          closeModal={() => setIsEditModalVisibile(false)}
          firstTabText={appTexts.CART.enterdetails}
          secondTabText={appTexts.CART.howto}
          data={custom_attrs}
          onSubmitData={onSubmitData}
          custom_image={custom_image}
          editItemsCount={isAddCustomAttr === true ? 1 : editItemsCount}
          isAddCustomAttr={isAddCustomAttr}
          isRemoveCustomItem={isRemoveCustomItem}
          removeAttr={removeAttr}
        />
      )}
    </View>
  );
};

CartScreenView.propTypes = {};

export default CartScreenView;
