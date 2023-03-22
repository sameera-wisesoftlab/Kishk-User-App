import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  FlatList,
  StatusBar,
  I18nManager,
  TouchableOpacity,
  RefreshControl,
  Platform,
} from 'react-native';
import globals from '../../lib/globals';
import appTexts from '../../lib/appTexts';
import { styles } from './styles';
import PropTypes from 'prop-types';
import Header from '../../components/Header';

import SmallProductCard from '../../components/SmallProductCard';
import HeadingWithRightLink from '../../components/HeadingWithRightLink';
import ProductCard from '../../components/ProductCard';
import BannerImage from '../../components/BannerImage';
import { BannerSlider } from '../../components/BannerSlider';

import CategoryCard from '../../components/CategoryCard';
import SliderHorizontal from '../../components/SliderHorizontal';
import FlatListing from '../../components/FlatListing';
import Loader from '../../components/Loader';
import { color } from 'react-native-reanimated';
import LoginRequiredModal from '../../components/LoginRequiredModal';
import FastImage from 'react-native-fast-image';

const HomeView = props => {
  const {
    isLoading,
    isSettingsLoading,
    homeData,
    onCatItemClick,
    onBrandItemClick,
    onItemClick,
    onTopBannerClick,
    onAdBannerClick,
    onRefreshContent,
    onFeaturedCatSeeAllClick,
    onTopBrandSeeAllClick,
    onSearchClick,
    onRecommendClick,
    onHeartClick = () => { },
    wishExecuting,
    loginRequired,
    setLoginRequired,
    loginPage,
  } = props;

  const renderTopCatItem = ({ item, index }) => (
    <SmallProductCard
      item={item}
      isCatHome={true}
      onItemClick={onCatItemClick}
    />
  );

  const renderProductItem = ({ item, index }) => (
    <ProductCard
      item={item}
      itemClick={onItemClick}
      isCustom={true}
      isFav={true}
      onHeartClick={onHeartClick}
      wishExecuting={wishExecuting}
    />
  );

  const renderFeatCatItem = ({ item, index }) => (
    <CategoryCard item={item} itemClick={onCatItemClick} />
  );

  const renderTopBrandItem = ({ item, index }) => (
    <SmallProductCard
      item={item}
      isBrands={true}
      onItemClick={onBrandItemClick}
    />
  );

  const headingWithRightLink = ({
    label,
    onBtnclick,
    isProductSection = false,
    itemLength,
    brandData
  }) => {
    return (
      <HeadingWithRightLink
        nameLabel={label}
        itemLength={itemLength}
        brandData={brandData}
        rightLinkText={appTexts.HOME.seeall}
        isRightLinkRequired={true}
        onSeeallClick={onBtnclick}
        fromHomeProduct={isProductSection}
      />
    );
  };

  const homeSection = (areaType = '', categoryID = 0) => {
    const { list } = homeData;
    let sectionData = null;

    if (areaType === 'RFU') {
      sectionData = list.find(i => i.area_type == areaType);
    } else {
      sectionData = list.find(
        i => i.area_type == areaType && i.link_id === categoryID,
      );
    }
    const promotionalProducts =
      sectionData?.details?.promotional_products.slice(0, 6);

    const isAndroidRTL =
      Platform.OS === 'android' &&
      I18nManager.isRTL &&
      promotionalProducts?.length === 1;

    const withProducts = promotionalProducts && promotionalProducts.filter(i => {
      return i.products != null;
    });

    return (
      <View key={areaType + categoryID}>
        <View style={styles.head}>
          {headingWithRightLink({
            label: sectionData[`title_${I18nManager.isRTL ? 'ar' : 'en'}`],
            onBtnclick: categoryID
              ? () => onCatItemClick(categoryID)
              : onRecommendClick,
            isProductSection: true,
            itemLength: withProducts ? withProducts.length : null,
            brandData: false
          })}
        </View>
        <View
          style={[
            { flex: 1, flexDirection: 'row', marginHorizontal: 12 },
            isAndroidRTL && styles.androidRTL,
          ]}>
          <FlatListing
            isLoading={isLoading}
            type={'products'}
            renderItem={renderProductItem}
            listItem={promotionalProducts}
          />
        </View>
      </View>
    );
  };

  const topBrandSection = () => {
    const brandData = homeData.list.find(i => i.area_type === 'TB');
    const title = brandData[`title_${I18nManager.isRTL ? 'ar' : 'en'}`];
    const listBrandsData = brandData?.details?.featured_brand
      ? brandData?.details?.featured_brand
      : [];

    const isAndroidRTL =
      Platform.OS === 'android' &&
      I18nManager.isRTL &&
      listBrandsData.length < 4;

    return (
      <View key={'TB'}>
        <View style={styles.head}>
          {headingWithRightLink({
            label: title,
            onBtnclick: onTopBrandSeeAllClick,
            itemLength: listBrandsData.length,
            brandData: true
          })}
        </View>
        <View style={isAndroidRTL && styles.androidRTLTopBrand}>
          <SliderHorizontal
            type={'brands'}
            renderItem={renderTopBrandItem}
            listItem={listBrandsData}
          />
        </View>
      </View>
    );
  };

  const featuredCategorySection = () => {
    const featuredCatData = homeData.list.find(i => i.area_type === 'FC');
    //const title = featuredCatData[`title_${I18nManager.isRTL ? 'ar' : 'en'}`];
    const title = I18nManager.isRTL ? 'فئات مميزة' : 'Featured Categories';
    const featCategoryData = featuredCatData?.details?.slice(0, 4);

    return (
      <View key={'FC'}>
        <View style={styles.head}>
          {headingWithRightLink({
            label: title,
            onBtnclick: onFeaturedCatSeeAllClick,
            itemLength: featCategoryData.length,
            brandData: true
          })}
        </View>
        <View style={styles.listContainer}>
          <FlatList
            ListEmptyComponent={
              <View style={styles.noDataContainer}>
                <Text style={styles.nodataf}>{appTexts.STRING.nodata}</Text>
              </View>
            }
            style={styles.flatListStyle}
            data={featCategoryData}
            extraData={featCategoryData}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderFeatCatItem}
          />
        </View>
      </View>
    );
  };

  const adBannerSection = sectionData => {
    const details = sectionData?.details;
    let adImage = '';

    if (details) {
      const { type, category_id, product_id } = details;
      adImage = details[`path_${I18nManager.isRTL ? 'ar' : 'en'}`];

      return (
        <TouchableOpacity
          key={sectionData && sectionData.area_type + sectionData.id}
          onPress={() => onAdBannerClick({ type, category_id, product_id })}
          style={{ marginVertical: 20 }}>
          <BannerImage
            bannerImage={
              adImage
                ? { uri: adImage }
                : require('../../assets/images/products/banner1.png')
            }
          />
        </TouchableOpacity>
      );
    }
    return null;
  };

  const renderSections = () => {
    const { list } = homeData;
    if (list.length > 0) {
      return list.map((singleSection, i) => {
        if (singleSection.area_type === 'FC') {
          return featuredCategorySection();
        } else if (singleSection.area_type === 'RFU') {
          return homeSection(singleSection.area_type);
        } else if (singleSection.area_type === 'AA') {
          return adBannerSection(singleSection);
        } else if (singleSection.area_type === 'PSA') {
          return homeSection(singleSection.area_type, singleSection.link_id);
        } else if (singleSection.area_type === 'TB') {
          return topBrandSection();
        }
        return null;
      });
    }

    return null;
  };

  const renderContent = () => {
    // if (isLoading)
    //   return (
    //     <View style={styles.loaderContainer}>
    //       <Loader />
    //     </View>
    //   );

    if (homeData === null) {
      return;
    }
    // console.log("HOME DATA", homeData)
    return (
      <View style={styles.screenDesignContainer}>
        <BannerSlider
          images={homeData.slider.map(
            item => item[`path_${I18nManager.isRTL ? 'ar' : 'en'}`],
          )}
          sliderDelay={homeData.slider_delay}
          sliderBoxHeight={160}
          ImageComponentStyle={{
            borderRadius: 20,
            width: '94%',
            marginTop: '5%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          dotStyle={styles.dot}
          dotColor="red"
          onCurrentImagePressed={index => onTopBannerClick(index)}
          imageComponent={FastImage}
          autoplay={true}
          loop={true}
        //paginationBoxVerticalPadding={0}
        />

        <View style={styles.sliderboxCustom}>
          <SliderHorizontal
            type={'topCat'}
            renderItem={renderTopCatItem}
            listItem={homeData.top_category}
          />
        </View>

        {renderSections()}
      </View>
    );
  };

  return (
    <View style={styles.screenMain}>
      <StatusBar
        barStyle="dark-content"
        translucent={false}
        hidden={false}
        backgroundColor={globals.COLOR.screenBackground}
      />

      {isSettingsLoading && <Loader />}
      <TouchableOpacity activeOpacity={0.5} onPress={onSearchClick}>
        <Header
          navigation={props.navigation}
          isLogoRequired={true}
          isSearchButtonRequired={true}
          onSearchClick={onSearchClick}
          customHeaderStyle={{
            height: globals.INTEGER.headerHeight,
            alignItems: 'center',
            backgroundColor: globals.COLOR.headerColor,
          }}
          onFocus={onSearchClick}
        />
      </TouchableOpacity>

      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={onRefreshContent}
            tintColor={'red'}
            colors={['red']}
          />
        }
        style={styles.screenContainerScrollView}
        showsVerticalScrollIndicator={false}>
        {renderContent()}
      </ScrollView>

      <LoginRequiredModal
        isVisible={loginRequired}
        closeModal={() => {
          setLoginRequired(false);
        }}
        loginpage={loginPage}
        isAddToWishList={true}
      />
    </View>
  );
};

HomeView.propTypes = {
  isLoading: PropTypes.bool,
  onCatItemClick: PropTypes.func,
  onItemClick: PropTypes.func,
};

export default HomeView;
