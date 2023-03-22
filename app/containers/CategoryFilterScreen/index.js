import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CategoryFilterView from './CategoryFilterView';
import globals from '../../lib/globals';
import {updateSearchFilterData} from '../../actions';

const CategoryFilterScreen = props => {
  const {filterParams, productFilterData} = useSelector(state => state.search);
  const dispatch = useDispatch();

  //will focus
  useEffect(() => {}, [props.navigation]);

  //mounted
  useEffect(() => handleComponentMounted(), []);

  const handleComponentMounted = () => {};

  //unmount
  useEffect(() => {
    return () => {
      handleComponentUnmount();
    };
  }, []);

  const handleComponentUnmount = () => {};

  //updated
  useEffect(() => handleComponentUpdated());

  const handleComponentUpdated = () => {
    if (props.homepageAPIReponse) {
    }
  };
  const onBackButtonClick = () => {
    props.navigation.goBack();
  };

  const onTopCatClick = () => {
    props.navigation.navigate('CategoryScreen');
  };
  const onClickApply = subSubCats => {
    let _filterParams = filterParams;
    if (subSubCats) {
      _filterParams = {..._filterParams, subSubCats};
    } else {
      _filterParams.subSubCats = null;
    }
    dispatch(updateSearchFilterData(_filterParams));
    props.navigation.navigate('FilterScreen');
  };

  return (
    <CategoryFilterView
      onBackButtonClick={onBackButtonClick}
      productFilterData={productFilterData}
      filterParams={filterParams}
      topCatClick={onTopCatClick}
      onClickApply={onClickApply}
    />
  );
};

export default CategoryFilterScreen;
