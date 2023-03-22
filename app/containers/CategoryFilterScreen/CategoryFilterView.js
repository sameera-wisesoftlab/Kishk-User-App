import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  ScrollView,
  Text,
  FlatList,
  StatusBar,
  I18nManager,
  TouchableOpacity,
} from 'react-native';
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

const CategoryFilterView = props => {
  const {
    onBackButtonClick,
    onColorPress,
    isColorPressed,
    onCategoryPress,
    productFilterData,
    filterParams,
    topCatClick,
    onClickApply,
  } = props;

  const [firstCatLabel, setFirstCatLabel] = useState('');
  const [secondCatLabel, setSecondCatLabel] = useState('');
  const [thirdCats, setThirdCats] = useState([]);
  const [selectedSubSubCats, setSelectedSubSubCats] = useState([]);

  useEffect(() => {
    if (!productFilterData) {
      return;
    }
    const { maincategory } = productFilterData;
    let firstMainCatId = maincategory[0].id;

    // check if category_id exist in filterparam on store and it is only one in length
    const userFilteredCat = filterParams.category_id;

    const alreadyFilteredCatArray = userFilteredCat?.toString().split(',');
    if (alreadyFilteredCatArray && alreadyFilteredCatArray.length === 1) {
      // if firstMainCatId is main top category
      firstMainCatId = userFilteredCat;
    }

    const firstLevelCat = maincategory.find(i => i.id === firstMainCatId);

    if (firstLevelCat) {
      const firstLevelCatLangDetail = firstLevelCat?.lang;
      const langItem = firstLevelCatLangDetail.find(
        i => i.language === getLang(),
      );
      const firstLevelLabel = langItem?.name;
      setFirstCatLabel(firstLevelLabel);

      const secondLevelCat = firstLevelCat.subcategory[0];
      if (secondLevelCat) {
        const thirdLevelCats = secondLevelCat.subsubcategory;
        if (thirdLevelCats.length > 0) {
          const secondLevelCatLangDetail = secondLevelCat?.lang;
          if (secondLevelCatLangDetail) {
            const slangItem = secondLevelCatLangDetail.find(
              i => i.language === getLang(),
            );
            const secondLevelLabel = slangItem?.name;
            setSecondCatLabel(secondLevelLabel);
          }
          setThirdCats(thirdLevelCats);
        } else {
          setThirdCats(firstLevelCat.subcategory);
        }
      }
    } else {
      // if firstMainCatId is subcategory
      maincategory.map((topCat, index) => {
        const subCat = topCat.subcategory.find(
          subItem => subItem.id === userFilteredCat,
        );
        if (subCat) {
          const firstLevelCatLangDetail = topCat?.lang;
          const langItem = firstLevelCatLangDetail.find(
            i => i.language === getLang(),
          );
          const firstLevelLabel = langItem?.name;
          setFirstCatLabel(firstLevelLabel);

          const secondLevelCat = subCat;
          const secondLevelCatLangDetail = secondLevelCat?.lang;
          const slangItem = secondLevelCatLangDetail.find(
            i => i.language === getLang(),
          );
          const secondLevelLabel = slangItem?.name;
          setSecondCatLabel(secondLevelLabel);

          const thirdLevelCats = secondLevelCat.subsubcategory;
          setThirdCats(thirdLevelCats);
        }
      });
    }
  }, [productFilterData]);

  useEffect(() => {
    if (filterParams.subSubCats) {
      setSelectedSubSubCats(filterParams?.subSubCats?.split(','));
    }
  }, [filterParams.subSubCats]);

  const onSubSubCatChkBoxChecked = subSubCatId => {
    if (selectedSubSubCats.indexOf(subSubCatId.toString()) !== -1) {
      //remove selected subsubcat from array
      const afterRemoveVal = selectedSubSubCats.filter(i => i != subSubCatId);
      setSelectedSubSubCats(afterRemoveVal);
    } else {
      // add new subsubcat selected from checkbox
      const afterAddVal = [...selectedSubSubCats, subSubCatId];
      setSelectedSubSubCats([...new Set(afterAddVal)]);
    }
  };

  const renderSubSubCatItem = ({ item, index }) => {
    const selectedItemsIds = filterParams?.subSubCats?.toString().split(',');

    return (
      <CategoryFilterCard
        item={item}
        onCheckBoxChecked={onSubSubCatChkBoxChecked}
        checkBox={
          selectedItemsIds?.indexOf(item.id.toString()) > -1 ? true : false
        }
      />
    );
  };

  const getLang = () => {
    return I18nManager.isRTL ? 'ar' : 'en';
  };

  const onButtonClick = () => {
    onClickApply(selectedSubSubCats.join());
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
        title={appTexts.SEARCH.categories}
        customHeaderStyle={{
          height: globals.INTEGER.headerHeight,
          alignItems: 'center',
          backgroundColor: globals.COLOR.headerColor,
        }}
      />

      <View style={styles.screenDesignContainer}>
        <View style={styles.box}>
          <TouchableOpacity style={styles.head} onPress={topCatClick}>
            <Text style={styles.headLine}>
              {firstCatLabel}
              {secondCatLabel != '' ? ' >>' : ''}
              {secondCatLabel}
            </Text>
          </TouchableOpacity>

          <View style={styles.list}>
            <FlatList
              style={styles.flatListStyle}
              data={thirdCats}
              // extraData={listItem}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderSubSubCatItem}
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

CategoryFilterView.propTypes = {
  //onCartButtonPress: PropTypes.func,
};

export default CategoryFilterView;
