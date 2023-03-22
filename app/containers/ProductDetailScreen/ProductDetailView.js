import React, { useState, useRef } from 'react';
import {
  View,
  ScrollView,
  Text,
  FlatList,
  StatusBar,
  I18nManager,
} from 'react-native';

import globals from '../../lib/globals';
import appTexts from '../../lib/appTexts';
import { styles } from './styles';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import { BannerSlider } from '../../components/BannerSlider';

import ProductDescriptionCard from '../../components/ProductDescriptionCard';
import ColorPalette from '../../components/ColorPalette';
import Delivery from '../../components/Delivery';

import HeadingWithRightLink from '../../components/HeadingWithRightLink';
import Specification from '../../components/Specification';
import Review from '../../components/Review';
import ProductCard from '../../components/ProductCard';
import FloatButton from '../../components/FloatButton';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import SliderHorizontal from '../../components/SliderHorizontal';
import moment from 'moment';
import Loader from '../../components/Loader';
import LoginRequiredModal from '../../components/LoginRequiredModal';
import CustomAttributesModal from '../../components/CustomAttributes';
import EditModal from '../../components/EditModal';
import ProductReviewModal from '../../components/ProductReviewModal';
import FastImage from 'react-native-fast-image';

let prdt_id = null;
const ProductDetailView = props => {
  const [isReviewMoreModalVisible, setIsReviewMoreModalVisible] =
    useState(false);

  const {
    onBackButtonClick,
    onColorPress,
    isColorPressed,
    onAddtoClick,
    productDetails,
    setSelectedData,
    selectedData,
    addCartPressed,
    setAddCartPressed,
    isLoading,
    updateProductDetails,
    product_id,
    userData,
    onHeartClick,
    wishExecuting,
    is_guest_logged_in,
    loginRequired,
    setLoginRequired,
    loginpage,
    setIsAddToWishList,
    isAddToWishList,
    isEditModalVisible,
    setIsEditModalVisibile,
    getCustomAttributes,
    onSubmitData,
    onRefreshContent,
    isRefresh,
    setCustomAttrModalVisible,
    customAttrModalVisible,
    submitItem,
  } = props;

  const product = productDetails?.Product;
  const lang = I18nManager.isRTL ? 'ar' : 'en';

  const delivery_charge =
    productDetails?.Delivery_charge?.[0]?.delivery_charge_domestic;
  let delivery_date = productDetails?.Delivery_date;
  if (delivery_date) {
    delivery_date = moment(delivery_date, 'DD-MM-YYYY').format('DD MMM YYYY');
  }
  const product_type = product?.product_type;
  const lang_p = product?.lang.filter(item => {
    return item.language == lang;
  });
  const name = lang_p?.[0]?.name;
  const description = lang_p?.[0]?.description;

  let photos =
    typeof productDetails?.Product_Images?.photos === 'undefined'
      ? []
      : productDetails?.Product_Images?.photos;

  if (product_id && prdt_id && prdt_id != product_id) {
    /*
     * Clear photo on item change. To hide previous item photo.
     */
    photos = [];
    prdt_id = product_id;
  }

  let picsArray = photos.map(photo => {
    return photo.path;
  });

  const cover_image = product?.cover_image;
  if (cover_image) {
    picsArray = picsArray.concat([cover_image]);
  }

  let brand = product?.brand?.lang;
  let brandName = '';
  if (brand) {
    brand = brand.filter(item => {
      return item.language == lang;
    });
    brandName = brand?.[0]?.name;
  }

  const normal_attributes = product?.product_attribute;
  let normal_aatrs = [];
  if (normal_attributes) {
    let name = '';
    let value = '';
    normal_attributes.map(attr => {
      let name = '';
      let value = '';
      if (attr.attibute_values.length > 0) {
        const attibute_value = attr.attibute_values.filter(item => {
          return item.language == lang;
        });
        value = attibute_value?.[0].name;
      }
      if (attr.variant !== null) {
        value = attr.variant.name;
      }
      if (attr?.attribute?.lang) {
        const attibute_name = attr.attribute.lang.filter(item => {
          return item.language == lang;
        });
        name = attibute_name?.[0].name;
      }
      normal_aatrs.push({
        name: name,
        value: value,
      });
    });
  }

  const product_variant_attributes = product?.product_variant_attributes;
  let attr_variant_1 = [];
  let processed_variant_1 = [];
  let attr_variant_2 = [];
  let processed_variant_2 = [];
  let p_v_name = '';
  let p_v_value = '';
  let complex_price = {};
  let simple_price = product?.product_price;
  if (product_variant_attributes) {
    let varnt_1 = '';
    let varnt_2 = '';
    /** get each variant details. */
    product_variant_attributes.map(item => {
      varnt_1 = item.variant_lang_id1 == null ? '' : item.variant_lang_id1;
      varnt_2 = item.variant_lang_id2 == null ? '' : item.variant_lang_id2;
      complex_price[`${varnt_1}_${varnt_2}_price`] = item.price;
      complex_price[`${varnt_1}_${varnt_2}_discount`] = item.discount;
      complex_price[`${varnt_1}_${varnt_2}_discount_price`] =
        item.discount_price;
      complex_price[`${varnt_1}_${varnt_2}_images`] = item.variant_images;
      // Attr 1
      if (item.attribute1 != null) {
        const attribute1 = item.attribute1.lang.filter(item => {
          return item.language == lang;
        });
        p_v_name = attribute1?.[0].name;
        if (item.lang1 != null) {
          p_v_value = item.lang1?.name;
        }
        if (processed_variant_1.indexOf(item.variant_lang_id1) == -1) {
          attr_variant_1.push({
            name: p_v_name,
            value: p_v_value,
            attr_id: item.attribute1.id,
            variant_id: item.variant_lang_id1,
          });
          processed_variant_1.push(item.variant_lang_id1);
        }
      }
      // Attr 2
      if (item.attribute2 != null) {
        const attribute2 = item.attribute2.lang.filter(item => {
          return item.language == lang;
        });
        p_v_name = attribute2?.[0].name;
        if (item.lang2 != null) {
          p_v_value = item.lang2?.name;
        }
        if (processed_variant_2.indexOf(item.variant_lang_id2) == -1) {
          attr_variant_2.push({
            name: p_v_name,
            value: p_v_value,
            attr_id: item.attribute2.id,
            variant_id: item.variant_lang_id2,
          });
          processed_variant_2.push(item.variant_lang_id2);
        }
      }
    });
  }

  const toNumberString = num => {
    try {
      if (!num.split('.')?.[1] || num.split('.')?.[1] == '00') {
        return num.split('.')?.[0] || num;
      } else {
        return parseFloat(num).toFixed(2);
      }
    } catch (err) {
      return num;
    }
  };

  let _discount = 0;
  if (product_type == 'simple') {
    _discount = product?.product_price?.discount || 0;
  } else {
    const varnt1 = selectedData?.variant_id1;
    const varnt2 = selectedData?.variant_id2;
    _discount = complex_price?.[`${varnt1}_${varnt2}_discount`] || 0;

    const variant_pics = complex_price?.[`${varnt1}_${varnt2}_images`] || [];
    if (variant_pics.length > 0) {
      picsArray = variant_pics.map(photo => {
        return photo.path;
      });
    }
  }
  _discount = toNumberString(_discount);

  const rating = product?.rating;
  const view_count = product?.view_count;

  const recently_viewed =
    typeof productDetails?.recently_viewed === 'undefined'
      ? []
      : productDetails?.recently_viewed;
  const similar_products =
    typeof productDetails?.similar_products === 'undefined'
      ? []
      : productDetails?.similar_products;

  const chkIfUserAlreadyWishListed = () => {
    if (!product) {
      return false;
    }

    const userDataInfo = userData?.data;

    if (userDataInfo && 'wishlist' in userDataInfo) {
      const { wishlist } = userDataInfo;
      if (wishlist) {
        if (wishlist.some(i => i.product_id === product.id)) {
          return true;
        }
      }
    }
    return false;
  };

  const custom_image = productDetails?.custom_image || null;
  const item_type = productDetails?.Product?.item_type;

  const renderItem2 = ({ item, index }) => (
    <ProductCard
      item={item}
      isCustom={true}
      isFav={true}
      itemClick={updateProductDetails}
      is_guest_logged_in={is_guest_logged_in}
      onHeartClick={onHeartClick}
    />
  );

  const headerComponent = () => {
    return (
      <>
        {_discount > 0 && (
          <View style={styles.discountTextContainer}>
            <Text style={styles.discountText}>
              {_discount}
              {'%'}
            </Text>
          </View>
        )}
        <View
          style={{
            // flex: 1,
            // borderBottomWidth: 0,
            // borderColor: globals.COLOR.grey,
            // borderTopLeftRadius: 20,
            // borderTopRightRadius: 20,
            // shadowColor: globals.COLOR.grey,
            // shadowOffset: {width: 9, height: 5},
            // shadowOpacity: globals.INTEGER.opacityHigh,
            // shadowRadius: 9,
            // elevation: 2,
            // backgroundColor: '#F6F6F6',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            //height: hp('31%'),
            shadowOpacity:
              Platform.OS === 'ios' ? 0.1 : globals.INTEGER.opacityHigh,
            elevation: Platform.OS === 'ios' ? 1 : 2,
            shadowRadius: Platform.OS === 'ios' ? 3 : 3,
            shadowOffset: {
              width: 1,
              height: 1,
            },
            height: globals.SCREEN_SIZE.width * (2 / 3),
          }}>
          <BannerSlider
            images={picsArray}
            ImageComponentStyle={{
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              width: globals.SCREEN_SIZE.width,
              height: globals.SCREEN_SIZE.width * (2 / 3),
              marginTop: '.5%',
            }}
            dotStyle={styles.dot}
            dotColor="red"
            resizeMode={'cover'}
            autoplay={true}
            ImageComponent={FastImage}
            imageLoadingColor={'#E91E63'}
          />
        </View>
        <ProductDescriptionCard
          name={name}
          brandName={brandName}
          rating={rating}
          view_count={view_count}
        />
        <View style={{ height: hp('.5%'), backgroundColor: '#F8F8F8' }} />
        {product_type != 'simple' && (
          <ColorPalette
            onColorPress={onColorPress}
            isColorPressed={isColorPressed}
            variant1={attr_variant_1}
            variant2={attr_variant_2}
            setSelectedData={setSelectedData}
            selectedData={selectedData}
          />
        )}
        <View style={{ height: hp('.5%'), backgroundColor: '#F8F8F8' }} />
        <Delivery
          leftText1={appTexts.PRODUCT.charge}
          rightText1={
            typeof delivery_charge === 'undefined'
              ? ''
              : delivery_charge + ' BHD'
          }
          leftText2={appTexts.PRODUCT.date}
          rightText2={delivery_date}
        />
        <View style={styles.head}>
          <HeadingWithRightLink nameLabel={appTexts.PRODUCT.details} />
        </View>
      </>
    );
  };

  const renderReviewSection = () => {
    const productReviews = product?.reviews || [];
    if (!productReviews || productReviews.length === 0) {
      return null;
    }

    return (
      <>
        <View style={styles.head}>
          <HeadingWithRightLink
            nameLabel={`${appTexts.PRODUCT.review} (${productReviews.length})`}
          />
        </View>
        {productReviews.slice(0, 2).map(review => (
          <Review key={review.id} reviewData={review} />
        ))}

        {productReviews.length > 2 && (
          <View style={styles.heading}>
            <HeadingWithRightLink
              nameLabel={`${productReviews.length} ${appTexts.PRODUCT.reviews}`}
              isReview={true}
              isRightLinkRequired={true}
              rightLinkText={appTexts.PRODUCT.view}
              onSeeallClick={() => setIsReviewMoreModalVisible(true)}
            />
          </View>
        )}
      </>
    );
  };

  const footerComponent = () => {
    return (
      <View style={{ flex: 1, backgroundColor: '#F9F7F7', marginBottom: 40 }}>
        {renderReviewSection()}
        {similar_products.length > 0 && (
          <View style={{ paddingLeft: '3.5%' }}>
            <View style={styles.head}>
              <HeadingWithRightLink nameLabel={appTexts.PRODUCT.similar} />
            </View>
            <SliderHorizontal
              type={'similar'}
              renderItem={renderItem2}
              listItem={similar_products}
            />
          </View>
        )}
        {recently_viewed.length > 0 && (
          <View style={{ paddingLeft: '3.5%' }}>
            <View style={styles.head}>
              <HeadingWithRightLink nameLabel={appTexts.PRODUCT.recent} />
            </View>
            <SliderHorizontal
              type={'recent'}
              renderItem={renderItem2}
              listItem={recently_viewed}
            />
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.screenMain}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={globals.COLOR.screenBackground}
      />
      <Header
        navigation={props.navigation}
        isBackButtonRequired={true}
        onBackButtonClick={onBackButtonClick}
        isRightButtonRequired={true}
        isHeartRequired={true}
        isHeartRed={chkIfUserAlreadyWishListed() ? true : false}
        customHeaderStyle={{
          height: globals.INTEGER.headerHeight,
          alignItems: 'center',
          backgroundColor: globals.COLOR.headerColor,
        }}
        onHeartClick={onHeartClick}
        wishExecuting={wishExecuting}
      />

      {isLoading && !isRefresh && <Loader />}

      <View style={{ paddingBottom: 120 }}>
        <View style={styles.screenDesignContainer}>
          <Specification
            header={headerComponent()}
            footer={footerComponent()}
            normal_aatrs={normal_aatrs}
            description={description}
            product_id={product_id}
            isRefresh={isRefresh}
            onRefreshContent={onRefreshContent}
          />
        </View>
      </View>

      <LoginRequiredModal
        isVisible={loginRequired}
        closeModal={() => {
          setIsAddToWishList(false);
          setLoginRequired(false);
        }}
        setLoginRequired={setLoginRequired}
        loginpage={loginpage}
        isAddToWishList={isAddToWishList}
      />

      <CustomAttributesModal
        isVisible={customAttrModalVisible}
        closeModal={() => {
          setCustomAttrModalVisible(false);
        }}
        simple_price={simple_price}
        complex_price={complex_price}
        submitItem={submitItem}
        variant1={attr_variant_1}
        variant2={attr_variant_2}
        product_type={product_type}
        setSelectedData={setSelectedData}
        selectedData={selectedData}
      />

      {isEditModalVisible && (
        <EditModal
          isEditModalVisible={isEditModalVisible}
          closeModal={() => setIsEditModalVisibile(false)}
          firstTabText={appTexts.CART.enterdetails}
          secondTabText={appTexts.CART.howto}
          data={getCustomAttributes()}
          onSubmitData={onSubmitData}
          custom_image={custom_image}
          page={'product'}
          editItemsCount={1}
        />
      )}

      {isReviewMoreModalVisible && (
        <ProductReviewModal
          isVisible={isReviewMoreModalVisible}
          closeModal={() => setIsReviewMoreModalVisible(false)}
          product_id={product_id}
        />
      )}

      <FloatButton
        onAddtoClick={onAddtoClick}
        selectedData={selectedData}
        simple_price={simple_price}
        complex_price={complex_price}
        product_type={product_type}
        prodct_detail={true}
        addCartPressed={addCartPressed}
        setAddCartPressed={setAddCartPressed}
        setCustomAttrModalVisible={setCustomAttrModalVisible}
      />
    </View>
  );
};

export default ProductDetailView;
