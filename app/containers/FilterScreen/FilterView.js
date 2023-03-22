import React, { useState, useRef, useEffect } from 'react';
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
import FloatButton from '../../components/FloatButton';
import FilterCard from '../../components/FilterCard';
import RatingModal from '../../components/RatingModal';
import PriceModal from '../../components/PriceModal';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const FilterView = props => {
  const {
    onBackButtonClick,
    onColorPress,
    isColorPressed,
    onCategoryPress,
    onBrandsPress,
    onApplyBtnClick,
    filterParams, // store filter data
    productFilterData,
    productCount,
    resetFilterParam,
    filterIsLoading
  } = props;

  const [filterParam, setFilterParam] = useState({
    min_price: filterParams.min_price || 0,
    max_price: filterParams.max_price || 1000,
    rating: filterParams.rating || null,
    subSubCats: null,
  });

  const [isPriceModalVisible, setIsPriceModalVisible] = useState(false);
  const [isRatingModalVisible, setIsRatingModalVisible] = useState(false);
  const [categoryLabel, setCategoryLabel] = useState('');
  const [brandLabel, setBrandLabel] = useState('');

  const [hasNextLevel, setHasNextLevel] = useState(false);

  useEffect(() => {
    setFilterParam({ ...filterParam, subSubCats: filterParams.subSubCats });
  }, [filterParams.subSubCats]);

  useEffect(() => {
    // Try to get label of parent cat or subcategory selected on filter
    if (!filterParams.category_id || !productFilterData) {
      // return null;
    } else {
      const catID = filterParams.category_id;
      const { maincategory } = productFilterData;
      const firstLevelCat = maincategory.find(i => i.id === catID);

      if (firstLevelCat) {
        const firstLevelCatLangDetail = firstLevelCat?.lang;
        const langItem = firstLevelCatLangDetail.find(
          i => i.language === getLang(),
        );
        const firstLevelLabel = langItem?.name;
        setCategoryLabel(firstLevelLabel);
        if (firstLevelCat.subcategory.length > 0) {
          setHasNextLevel(true);
        } else {
          setHasNextLevel(false);
        }

      } else {
        maincategory.map((topCat, index) => {
          const subCat = topCat.subcategory.find(subItem => subItem.id === catID);

          if (subCat) {
            if (subCat.subsubcategory.length > 0) {
              setHasNextLevel(true);
            } else {
              setHasNextLevel(false);
            }
            const firstLevelCatLangDetail = topCat?.lang;
            const langItem = firstLevelCatLangDetail.find(
              i => i.language === getLang(),
            );
            const firstLevelLabel = langItem?.name;
            const secondLevelCat = subCat;
            const secondLevelCatLangDetail = secondLevelCat?.lang;
            const slangItem = secondLevelCatLangDetail.find(
              i => i.language === getLang(),
            );
            const secondLevelLabel = slangItem?.name;
            setCategoryLabel(`${firstLevelLabel} >> ${secondLevelLabel}`);
          }
        });
      }
    }
  }, [filterParams.category_id, productFilterData]);

  useEffect(() => {
    // Try to get label of Brand selected on filter
    if (!filterParams.brand_id || !productFilterData) {
      setBrandLabel('');
      // return null;
    } else {
      // All brands avaialble
      const { brands } = productFilterData;
      // selected brand from store
      const selectedBrandArr = filterParams.brand_id?.toString().split(',');

      const label = brands.reduce((previous, current) => {
        if (selectedBrandArr.indexOf(current.id.toString()) !== -1) {
          const langItem = current.lang;
          return (
            (previous ? previous + ', ' : previous) +
            langItem.find(i => i.language === getLang()).name
          );
        } else {
          return previous;
        }
      }, '');
      setBrandLabel(label);
    }
  }, [filterParams.brand_id]);

  const onPriceApplied = (min, max) => {
    const newFilterParam = { ...filterParam, min_price: min, max_price: max };
    setIsPriceModalVisible(!isPriceModalVisible);
    setFilterParam(newFilterParam);
    onApplyBtnClick(newFilterParam, false);
  };

  const onRatingApplied = val => {
    const newFilterParam = { ...filterParam, rating: val };
    setIsRatingModalVisible(!isRatingModalVisible);
    setFilterParam(newFilterParam);
    onApplyBtnClick(newFilterParam, false);
  };

  const applyFilter = () => {
    onApplyBtnClick(filterParam, true);
  };

  const clearFilter = () => {
    setFilterParam({
      ...filterParam,
      rating: null,
      min_price: 0,
      max_price: 100000,
      subSubCats: null,
    });
    setCategoryLabel('');
    setBrandLabel('');
    // Reset all filter param on store
    resetFilterParam();
  };

  const getLang = () => {
    return I18nManager.isRTL ? 'ar' : 'en';
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
        isLeftTitleRequired={true}
        title={appTexts.FILTER.filter}
        customHeaderStyle={{
          height: globals.INTEGER.headerHeight,
          alignItems: 'center',
          backgroundColor: globals.COLOR.headerColor,
        }}
      />
      <ScrollView
        style={styles.screenContainerScrollView}
        showsVerticalScrollIndicator={false}>
        <View style={styles.screenDesignContainer}>
          <View style={styles.textRow}>
            <Text style={styles.rowText}>{appTexts.FILTER.your}</Text>
            <View style={styles.resultBox}>
              <Text style={styles.result}>
                {productCount} {appTexts.FILTER.result}
              </Text>
            </View>
          </View>
          <View style={styles.listView}>
            <FilterCard
              onFilterCardPress={() => onCategoryPress(hasNextLevel)}
              title={I18nManager.isRTL ? 'الفئات' : 'Category'}
              subtitle={categoryLabel} // filterParams.category_id //filterParams.subSubCats
            />
            <FilterCard
              onFilterCardPress={onBrandsPress}
              title={I18nManager.isRTL ? 'العلامات التجارية' : 'Brands'}
              subtitle={brandLabel} // 'Samsung,Apple,Huawei B&O'}
            />
            <FilterCard
              onFilterCardPress={() =>
                setIsPriceModalVisible(!isPriceModalVisible)
              }
              title={I18nManager.isRTL ? 'السعر' : 'Price'}
              subtitle={` ${appTexts.PRODUCT.sar} ${filterParam.min_price}-${filterParam.max_price}`}
            />
            <FilterCard
              onFilterCardPress={() =>
                setIsRatingModalVisible(!isRatingModalVisible)
              }
              title={I18nManager.isRTL ? 'التقييم' : 'Rating'}
              subtitle={filterParam.rating && `${filterParam.rating} & above`}
            />
          </View>
          <RatingModal
            isRatingModalVisible={isRatingModalVisible}
            RatingcloseModal={() =>
              setIsRatingModalVisible(!isRatingModalVisible)
            }
            onradioClicked={onRatingApplied}
          />
          <PriceModal
            onPriceApplied={onPriceApplied}
            isPriceModalVisible={isPriceModalVisible}
            pricecloseModal={() => setIsPriceModalVisible(!isPriceModalVisible)}
            minPrice={filterParam.min_price}
            maxPrice={filterParam.max_price}
          />
        </View>
      </ScrollView>

      <FloatButton
        onButtonClick={applyFilter}
        onclearButtonclick={clearFilter}
        isFilter={true}
        productCount={productCount}
        filterIsLoading={filterIsLoading}
      />
    </View>
  );
};

FilterView.propTypes = {
  //onCartButtonPress: PropTypes.func,
};

export default FilterView;
