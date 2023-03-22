import React, {useState, useRef} from 'react';
import {
  View,
  ScrollView,
  Text,
  FlatList,
  StatusBar,
  TouchableOpacity,
  I18nManager,
  RefreshControl,
} from 'react-native';
import globals from '../../lib/globals';
import appTexts from '../../lib/appTexts';
import {styles} from './styles';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import HeadingWithRightLink from '../../components/HeadingWithRightLink';
import ProductCard from '../../components/ProductCard';
import BannerImage from '../../components/BannerImage';
import Loader from '../../components/Loader';

const DealsView = props => {
  const {
    loading,
    listData,
    onLogoPress,
    onSearchClick,
    onItemClick,
    onAdBannerClick,
    onCatItemClick,
    onRefreshContent,
    onHeartClick = () => {},
    wishExecuting,
    is_guest_logged_in,
  } = props;

  const renderItem2 = ({item, index}) => (
    <ProductCard
      item={item}
      isCustom={true}
      itemClick={onItemClick}
      onHeartClick={onHeartClick}
      wishExecuting={wishExecuting}
      is_guest_logged_in={is_guest_logged_in}
    />
  );

  const adBannerSection = (sectionData, i) => {
    const details = sectionData?.details;
    let adImage = '';

    if (details) {
      const {type, category_id, product_id} = details;
      adImage = details[`path_${I18nManager.isRTL ? 'ar' : 'en'}`];

      return (
        <TouchableOpacity
          key={i + ''}
          onPress={() => onAdBannerClick({type, category_id, product_id})}>
          <BannerImage
            bannerImage={
              adImage
                ? {uri: adImage}
                : require('../../assets/images/products/banner1.png')
            }
          />
        </TouchableOpacity>
      );
    }
    return null;
  };

  const productSection = (areaType, categoryID = 0, i) => {
    let sectionData = listData.find(
      i => i.area_type == areaType && i.link_id === categoryID,
    );

    const promotionalProducts =
      sectionData?.details?.promotional_products.slice(0, 6);

    return (
      <View key={i.toString()} style={styles.productSlideContainer}>
        <View style={styles.head}>
          <HeadingWithRightLink
            nameLabel={sectionData[`title_${I18nManager.isRTL ? 'ar' : 'en'}`]}
            rightLinkText={appTexts.HOME.seeall}
            isRightLinkRequired={true}
            onSeeallClick={() => onCatItemClick(categoryID)}
          />
        </View>
        <View style={styles.listContainer}>
          <View style={{flex: 1, flexDirection: 'row', marginHorizontal: 12}}>
            <FlatList
              style={styles.flatListStyle}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={promotionalProducts}
              extraData={promotionalProducts}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem2}
              ListEmptyComponent={() => (
                <View style={styles.noDataContainer}>
                  <Text style={styles.nodataf}>{appTexts.STRING.nodata}</Text>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    );
  };

  const renderSections = () => {
    if (listData.length > 0) {
      return listData.map((singleSection, i) => {
        if (singleSection.area_type === 'AA') {
          return adBannerSection(singleSection, i);
        } else if (singleSection.area_type === 'PSA') {
          return productSection(
            singleSection.area_type,
            singleSection.link_id,
            i,
          );
        }
        return null;
      });
    }

    return null;
  };

  const renderContent = () => {
    // if (loading) {
    //   return (
    //     <View style={styles.loaderContainer}>
    //       <Loader />
    //     </View>
    //   );
    // }

    return (
      <View style={styles.screenDesignContainer}>
        {renderSections()}

        {/* <SliderBox
				images={images}
				sliderBoxHeight={160}
				ImageComponentStyle={{
					borderRadius: 20,
					width: globals.SCREEN_SIZE.width - 40,
					marginTop: '5%',
				}}
				dotStyle={styles.dot}
				dotColor="red"
			/>
        <View style={styles.head}>
          <HeadingWithRightLink
            nameLabel={appTexts.DEALS.electronics}
            rightLinkText={appTexts.HOME.seeall}
            isRightLinkRequired={true}
          />
        </View>
        <View style={styles.listContainer}>
          {listItem.length === 0 ? (
            <View style={styles.noDataContainer}>
              <Text style={styles.noDataText}>{appTexts.STRING.nodata}</Text>
            </View>
          ) : (
            <FlatList
              style={styles.flatListStyle}
              horizontal={true}
              data={listItem}
              extraData={listItem}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem2}></FlatList>
          )}
        </View>
         */}
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
      <TouchableOpacity
        onPress={() => {
          onSearchClick();
        }}>
        <Header
          navigation={props.navigation}
          isLogoRequired={true}
          isSearchButtonRequired={true}
          onLogoPress={onLogoPress}
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
            refreshing={loading}
            onRefresh={onRefreshContent}
            tintColor={'red'}
            colors={['red']}
          />
        }
        style={styles.screenContainerScrollView}
        showsVerticalScrollIndicator={false}>
        {renderContent()}
      </ScrollView>
    </View>
  );
};

DealsView.propTypes = {
  loading: PropTypes.bool,
  //onCartButtonPress: PropTypes.func,
};

export default DealsView;
