import React, { useEffect, useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StatusBar,
  I18nManager,
  RefreshControl,
  ScrollView,
} from 'react-native';
import globals from '../../lib/globals';
import appTexts from '../../lib/appTexts';
import { styles } from './styles';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Header from '../../components/Header';
import HeadingWithRightLink from '../../components/HeadingWithRightLink';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import FlatListing from '../../components/FlatListing';
import SmallProductCard from '../../components/SmallProductCard';
import Loader from '../../components/Loader';

const CategoryView = props => {
  const {
    isLoading,
    allCategories,
    onSearchClick,
    onBrandsClick,
    onSeeallClick = () => { },
    onSubCatClick = () => { },
    onTopBrandclick = () => { },
    onRefreshContent = () => { },
    goToSearchScreen,
  } = props;

  const [subCategories, setSubCategories] = useState([]);
  const [topBrands, setTopBrands] = useState([]);
  const [activeParentCategory, setActiveParentCategory] = useState('');

  useEffect(() => {
    if (allCategories && allCategories.length > 0) {
      // get first element of an array
      const activeCategory = _.first(allCategories);

      if (activeCategory) {
        setSubCategories(activeCategory.sub_category);
        setTopBrands(activeCategory?.top_brands?.featured_brand || []);
        setActiveParentCategory(activeCategory.id);
      } else {
        setSubCategories([]);
        setTopBrands([]);
      }
    }
  }, [allCategories]);

  const onTopBrandItemclick = brand_id => {
    onTopBrandclick(brand_id, activeParentCategory);
  };

  const onSearchBtnClick = text => {
    onSearchClick({ search: text, category_id: activeParentCategory });
  };

  const getLang = () => {
    return I18nManager.isRTL ? 'ar' : 'en';
  };

  const renderSubCatItem = ({ item, index }) => (
    <SmallProductCard
      item={item}
      isCatScreen={true}
      onItemClick={onSubCatClick}
    />
  );

  const renderTopBrandItem = ({ item, index }) => (
    <SmallProductCard
      item={item.brands}
      isCatScreen={true}
      isBrands={true}
      onItemClick={onTopBrandItemclick}
    />
  );

  const renderParentCatList = () => {
    if (!allCategories || allCategories.length <= 0) {
      return null;
    }

    return allCategories.map(parentCat => {
      let catLangData = parentCat.lang;
      let parentCatLabel = catLangData.find(i => i.language === getLang()).name;
      const isActiveCat = activeParentCategory === parentCat.id;

      return (
        <View key={parentCat.category_unique_id}>
          <TouchableOpacity
            onPress={() => {
              setSubCategories(parentCat.sub_category);
              setTopBrands(parentCat?.top_brands?.featured_brand || []);
              setActiveParentCategory(parentCat.id);
            }}
            style={styles.rowTouch}>
            <View style={[styles.row, isActiveCat && styles.activeRow]}>
              <Text
                style={[styles.rowText, isActiveCat && styles.nameLabelCat]}>
                {parentCatLabel}
              </Text>
            </View>
          </TouchableOpacity>
          {isActiveCat && <View style={styles.redLine} />}
        </View>
      );
    });
  };

  const renderScreenContent = () => {
    // if (isLoading) {
    //   return <Loader />;
    // }

    return (
      <View style={styles.screenDesignContainer}>
        <View
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
            flexDirection: 'row',
          }}>
          <View style={styles.rowStyle}>{renderParentCatList()}</View>
          <View style={(styles.listContainer, { paddingTop: 20 })}>
            <View style={styles.head}>
              <TouchableOpacity
                style={styles.categoryRightLink}
                onPress={() => onSeeallClick(activeParentCategory)}>
                <Text style={styles.linkLabelRed}>
                  {appTexts.CATEGORY.products}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.topList}>
              <FlatListing
                isLoading={isLoading}
                renderItem={renderSubCatItem}
                listItem={subCategories}
                // listItem={[]}
                isCategory={true}
              />
            </View>
            <View style={styles.heading}>
              <HeadingWithRightLink nameLabel={appTexts.HOME.top} />
            </View>
            <View style={styles.botList}>
              <FlatListing
                isLoading={isLoading}
                renderItem={renderTopBrandItem}
                listItem={topBrands}
                // listItem={[]}
                isCategory={true}
              />
            </View>
          </View>
        </View>
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
      {/* <TouchableOpacity onPress={() => onSearchClick()}> */}
      <Header
        navigation={props.navigation}
        isCategorySearch={true}
        isSearchButtonRequired={true}
        customHeaderStyle={{
          height: globals.INTEGER.headerHeight,
          alignItems: 'center',
          backgroundColor: globals.COLOR.headerColor,
        }}
        onSearchClick={onSearchBtnClick}
        onFocus={goToSearchScreen}
      />
      {/* </TouchableOpacity> */}

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
        {renderScreenContent()}
      </ScrollView>

      {/* <View style={styles.head}>
          <HeadingWithRightLink
            nameLabel={appTexts.CATEGORY.recommendation}
            rightLinkText={appTexts.CATEGORY.products}
            isRightLinkRequired={true}
            isCategoryScreen={true}
          />
        </View>
        {/* <View style={styles.redLine}></View> */}
    </View>
  );
};

CategoryView.propTypes = {
  //onCartButtonPress: PropTypes.func,
};

export default CategoryView;
