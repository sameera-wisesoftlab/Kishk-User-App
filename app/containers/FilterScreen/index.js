import React, {useEffect, useState} from 'react';
//import { connect } from 'react-redux';
import FilterView from './FilterView';
import globals from '../../lib/globals';
import {useDispatch, useSelector} from 'react-redux';
import {
  updateSearchFilterData,
  getAllFilterDatas,
  resetUpdateSearchFilterData,
} from '../../actions';

const FilterScreen = props => {
  const dispatch = useDispatch();
  const {filterParams, productFilterData, productCount, filterIsLoading} = useSelector(
    state => state.search,
  );

  //will focus
  useEffect(() => {}, [props.navigation]);

  //mounted
  useEffect(() => handleComponentMounted(), []);

  const handleComponentMounted = () => {
    // call all product filter data's
    if (productFilterData === null) {
      let params = {};
      if (filterParams.category_id) {
        params = {
          category_id: filterParams.category_id,
        };
      }
      dispatch(getAllFilterDatas(params));
    }
  };

  useEffect(() => {
    let params = {};
    if (filterParams.category_id) {
      params = {
        category_id: filterParams.category_id,
      };
    }
    dispatch(getAllFilterDatas(params));
  }, [filterParams.category_id]);

  //unmount
  useEffect(() => {
    return () => {
      handleComponentUnmount();
    };
  }, []);

  const handleComponentUnmount = () => {};

  //updated
  useEffect(() => handleComponentUpdated());
  const handleComponentUpdated = () => {};

  const onBackButtonClick = () => {
    props.navigation.goBack();
  };
  const onCategoryPress = hasNextLevel => {
    if (hasNextLevel) {
      props.navigation.navigate('CategoryFilterScreen');
    } else {
      props.navigation.navigate('CategoryScreen');
    }
  };
  const onBrandsPress = () => {
    props.navigation.navigate('BrandsScreen');
  };
  // const setFilterParam = data => {
  //   const newFilterData = {...filterParam, ...data};
  //   setFilterParam(newFilterData);
  // };

  const onApplyBtnClick = (filterData, navigate = false) => {
    dispatch(updateSearchFilterData(filterData));
    if (navigate) {
      props.navigation.navigate('SearchDetailScreen');
    }
  };

  const resetFilterParam = () => {
    dispatch(resetUpdateSearchFilterData({category_id: null}));
  };

  return (
    <FilterView
      onBackButtonClick={onBackButtonClick}
      onCategoryPress={onCategoryPress}
      onBrandsPress={onBrandsPress}
      onApplyBtnClick={onApplyBtnClick}
      filterParams={filterParams} // from store
      productFilterData={productFilterData}
      productCount={productCount}
      resetFilterParam={resetFilterParam}
      filterIsLoading={filterIsLoading}
    />
  );
};

const mapStateToProps = (state, props) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default FilterScreen;
