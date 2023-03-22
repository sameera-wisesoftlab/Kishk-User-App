import React, { useState, useRef } from 'react';
import {
  View,
  ScrollView,
  Text,
  FlatList,
  StatusBar,
  I18nManager,
  Image,
  TouchableOpacity,
  RefreshControl,
  Platform,
} from 'react-native';
import globals from '../../lib/globals';
import appTexts from '../../lib/appTexts';
import { styles, images } from './styles';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import SmallProductCard from '../../components/SmallProductCard';
import HeadingWithRightLink from '../../components/HeadingWithRightLink';
import ProductCard from '../../components/ProductCard';

import FlatListing from '../../components/FlatListing';
import Loader from '../../components/Loader';
import ProductCardLinear from '../../components/ProductCardLinear';
import SortModal from '../../components/SortModal';

const SearchDetailView = props => {
  const {
    productList,
    loading,
    totalCount,
    onLinearClick,
    isLinearClicked,
    onFilterPress,
    onSortPress,
    isSortModalVisible,
    onLogoPress,
    onSearchClick,
    onRefreshList,
    onProductCardClick,
    filterParams,
    loadMoreProducts,
    loadingMore,
    onSortChange,
    onHeartClick = () => { },
    wishExecuting,
    onBackButtonClick,
    goToSearchScreen,
    is_guest_logged_in,
  } = props;

  const renderLoadMoreLoader = () => {
    if (loadingMore) {
      return (
        <View
          style={{
            marginTop: 15,
            marginBottom:
              Platform.OS === 'ios' ? (isLinearClicked ? 260 : 300) : 240,
          }}>
          <Loader />
        </View>
      );
    }
    return (
      <View
        style={{
          marginBottom: Platform.OS === 'ios' ? 280 : 240,
        }}
      />
    );
  };

  const renderItem = ({ item, index }) => (
    <ProductCard
      item={{ products: item }}
      isCustom={true}
      isFav={false}
      itemClick={() => onProductCardClick(item.id)}
      onHeartClick={onHeartClick}
      wishExecuting={wishExecuting}
      is_guest_logged_in={is_guest_logged_in}
    />
  );

  const renderItem2 = ({ item, index }) => (
    <ProductCardLinear
      item={item}
      isFav={true}
      itemClick={() => onProductCardClick(item.id)}
      onHeartClick={onHeartClick}
      wishExecuting={wishExecuting}
      is_guest_logged_in={is_guest_logged_in}
    />
  );

  return (
    <View style={styles.screenMain}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={globals.COLOR.screenBackground}
      />
      <Header
        searchTxtBefore={filterParams.search}
        navigation={props.navigation}
        // isLogoRequired={true}
        isSearchButtonRequired={true}
        onSearchClick={onSearchClick}
        onLogoPress={onLogoPress}
        customHeaderStyle={{
          height: globals.INTEGER.headerHeight,
          alignItems: 'center',
          backgroundColor: globals.COLOR.headerColor,
        }}
        isBackButtonRequired={true}
        onBackButtonClick={onBackButtonClick}
        onFocus={goToSearchScreen}
      />

      {/* <ScrollView
        style={styles.screenContainerScrollView}
        showsVerticalScrollIndicator={false}> */}
      <View style={styles.listContainer}>
        <View style={styles.screenDesignContainer}>
          <View style={styles.row}>
            <View style={styles.textColum}>
              <Text style={styles.result}>{appTexts.SEARCH.result}</Text>
              <Text style={styles.item}>
                {totalCount} {appTexts.SEARCH.item}
              </Text>
            </View>
            <View style={styles.tabBox}>
              <TouchableOpacity
                onPress={() => {
                  onFilterPress();
                }}>
                <View style={styles.filterBox}>
                  <View style={styles.filterText}>
                    <Text style={styles.fil}>{appTexts.SEARCH.filter}</Text>
                  </View>
                  <View style={styles.filImage}>
                    <Image source={images.filter} style={styles.filterImage} />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  onSortPress();
                }}>
                <View style={styles.filterBoxMiddle}>
                  <View style={styles.filterText}>
                    <Text style={styles.fil}>{appTexts.SEARCH.sort}</Text>
                  </View>
                  <View style={styles.filImage}>
                    <Image source={images.sort} style={styles.filterImage} />
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onLinearClick()}>
                <View style={styles.filterBox}>
                  <View style={styles.filImage}>
                    {isLinearClicked ? (
                      <Image source={images.grid} style={styles.filterImage} />
                    ) : (
                        <Image
                          source={images.linear}
                          style={styles.filterImage}
                        />
                      )}
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* {isLinearClicked ? (
            <View style={styles.listBox}>
              <FlatList
                style={styles.flatListStyle}
                data={products}
                extraData={products}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem2}
              />
            </View>
          ) : ( {/* <FlatListing
                renderItem={renderItem}
                listItem={products}
                isFav={true}
                horizontal={false}
              /> )} */}

          <View style={isLinearClicked ? styles.listBox2 : styles.listBox}>
            {loading ? (
              <View style={styles.loaderContainer}>
                <Loader />
              </View>
            ) : (
                <FlatList
                  key={isLinearClicked ? 'l_' : '_'}
                  style={styles.flatListStyle}
                  data={productList}
                  extraData={productList}
                  numColumns={isLinearClicked ? 0 : 2}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={isLinearClicked ? renderItem2 : renderItem}
                  ListEmptyComponent={() => (
                    <View style={styles.noDataContainer}>
                      <Text style={styles.nodataf}>{appTexts.STRING.nodata}</Text>
                    </View>
                  )}
                  showsVerticalScrollIndicator={false}
                  refreshControl={
                    <RefreshControl
                      refreshing={loading}
                      onRefresh={onRefreshList}
                      title=""
                      tintColor="red"
                      colors={['red']}
                    />
                  }
                  onEndReachedThreshold={0.5}
                  onEndReached={info => loadMoreProducts()}
                  ListFooterComponent={renderLoadMoreLoader}
                />
              )}
          </View>

          <SortModal
            isSortModalVisible={isSortModalVisible}
            closeModal={onSortPress}
            selectedSort={filterParams.sort}
            radioClicked={onSortChange}
          />
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

SearchDetailView.propTypes = {
  onItemClick: PropTypes.func,
  onLinearClick: PropTypes.func,
  isLinearClicked: PropTypes.bool,
};

export default SearchDetailView;
