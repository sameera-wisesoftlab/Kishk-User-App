import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  resetUpdateSearchFilterData,
  elasticSearch,
  resetElasticSearch,
} from '../../actions';
import SearchView from './SearchView';
import globals from '../../lib/globals';

const SearchScreen = props => {
  const {filterParams, elasticSearchData, isLoading} = useSelector(
    state => state.search,
  );
  const {homeData} = useSelector(state => state.home);
  const dispatch = useDispatch();

  //will focus
  useEffect(() => {
    dispatch(resetElasticSearch());
  }, [props.navigation]);

  //mounted
  useEffect(() => handleComponentMounted(), []);

  const handleComponentMounted = () => {};

  const onBackButtonClick = () => {
    props.navigation.goBack();
  };

  const onSearchClick = (searchedText = '', category_id = null) => {
    dispatch(
      resetUpdateSearchFilterData({
        search: searchedText,
        brand_id: null,
        category_id: category_id,
      }),
    );
    props.navigation.navigate('SearchDetailScreen');
  };

  const onCategoryPress = () => {
    props.navigation.navigate('CategoryFilterScreen');
  };

  const onBrandsPress = () => {
    props.navigation.navigate('BrandsScreen');
  };

  const onElasticSearch = searchTerm => {
    dispatch(elasticSearch(searchTerm));
  };

  const toProductDetails = id => {
    props.navigation.navigate('ProductDetailScreen', {id: id});
  };

  return (
    <SearchView
      searchedText={filterParams.search}
      onBackButtonClick={onBackButtonClick}
      onSearchClick={onSearchClick}
      onCategoryPress={onCategoryPress}
      onBrandsPress={onBrandsPress}
      topCats={homeData?.top_category}
      onElasticSearch={onElasticSearch}
      elasticSearchData={elasticSearchData}
      toProductDetails={toProductDetails}
      isLoading={isLoading}
    />
  );
};

export default SearchScreen;
