import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StatusBar } from 'react-native';
import globals from '../../lib/globals';
import appTexts from '../../lib/appTexts';
import { styles } from './styles';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import FloatButton from '../../components/FloatButton';
import CategoryFilterCard from '../../components/CategoryFilterCard';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const BrandsView = props => {
  const {
    onBackButtonClick,
    productFilterData,
    onColorPress,
    isColorPressed,
    onCategoryPress,
    filterParams,
    onClickApply,
  } = props;
  const [brandList, setBrandList] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  useEffect(() => {
    if (!productFilterData) {
      return null;
    }
    // All brands avaialble
    const { brands } = productFilterData;
    setBrandList(brands);
  }, [productFilterData]);

  useEffect(() => {
    if (filterParams.brand_id) {
      setSelectedBrands(filterParams.brand_id?.toString().split(','));
    }
  }, [filterParams]);

  const onBrandChkBoxChecked = brandId => {
    if (selectedBrands.indexOf(brandId.toString()) !== -1) {
      //remove selected brand from array
      const afterRemoveVal = selectedBrands.filter(i => i != brandId);
      setSelectedBrands(afterRemoveVal);
    } else {
      // add new brand selected from checkbox
      const afterAddVal = [...selectedBrands, brandId.toString()];
      setSelectedBrands([...new Set(afterAddVal)]);
    }
  };

  const renderBrandItem = ({ item, index }) => {
    const selectedItemsIds = filterParams?.brand_id?.toString().split(',');

    return (
      <CategoryFilterCard
        item={item}
        onCheckBoxChecked={onBrandChkBoxChecked}
        checkBox={
          selectedItemsIds?.indexOf(item.id.toString()) > -1 ? true : false
        }
      />
    );
  };

  const onButtonClick = () => {
    onClickApply(selectedBrands.join());
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
        title={appTexts.CATEGORY.brands}
        customHeaderStyle={{
          height: globals.INTEGER.headerHeight,
          alignItems: 'center',
          backgroundColor: globals.COLOR.headerColor,
        }}
      />
      {/* <ScrollView
        style={styles.screenContainerScrollView}
        showsVerticalScrollIndicator={false}> */}
      <View style={styles.screenDesignContainer}>
        <View style={styles.box}>
          <View style={styles.list}>
            <FlatList
              showsVerticalScrollIndicator={false}
              style={styles.flatListStyle}
              data={brandList}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderBrandItem}
              ListEmptyComponent={() => (
                <View style={styles.noDataContainer}>
                  <Text style={styles.nodataf}>
                    {appTexts.STRING.nodata}
                  </Text>
                </View>
              )}
            />
          </View>
        </View>
      </View>
      {/* </ScrollView> */}

      <FloatButton
        isCategory={true}
        buttonText={appTexts.FILTER.apply}
        onButtonClick={onButtonClick}
      />
    </View>
  );
};

BrandsView.propTypes = {
  //onCartButtonPress: PropTypes.func,
};

export default BrandsView;
