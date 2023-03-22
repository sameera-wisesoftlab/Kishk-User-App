import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import BrandsView from './BrandsView';
import globals from '../../lib/globals';
import {updateSearchFilterData} from '../../actions';

const BrandsScreen = props => {
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
  const onClickApply = brand_id => {
    dispatch(updateSearchFilterData({...filterParams, brand_id}));
    props.navigation.navigate('FilterScreen');
  };

  return (
    <BrandsView
      onBackButtonClick={onBackButtonClick}
      productFilterData={productFilterData}
      filterParams={filterParams}
      onClickApply={onClickApply}
    />
  );
};

export default BrandsScreen;
