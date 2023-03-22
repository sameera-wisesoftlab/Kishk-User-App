import React, { useEffect, useState } from 'react';
import { BackHandler } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {
  getallProducts,
  resetUpdateSearchFilterData,
  updateSearchFilterData,
  addRemoveToWishlist,
} from '../../actions';
import SearchDetailView from './SearchDetailView';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const SearchDetailScreen = props => {
  const [isLinearClicked, setIsLinearClicked] = useState(false);
  const [isSortModalVisible, setIsSortModalVisible] = useState(false);
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [allProdLoaded, setAllProdLoaded] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const { filterParams } = useSelector(state => state.search);
  const { wishExecuting } = useSelector(state => state.wishlistReducer);

  //will focus
  useEffect(() => { }, [props.navigation]);

  const getInitialData = (pageNum = page) => {
    dispatch(
      getallProducts(
        { page: pageNum }, // filterData,
        res => {
          if (pageNum > 1) {
            setProducts([...products, ...res.data.products.data]);
            if (
              res.data.products.current_page === res.data.products.last_page
            ) {
              setAllProdLoaded(true);
            }
            setLoadingMore(false);
          } else {
            setProducts(res.data.products.data);
            setTotalCount(res.data.products.total);
            if (
              res.data.products.current_page === res.data.products.last_page
            ) {
              setAllProdLoaded(true);
            }
            setLoading(false);
          }
        },
        err => {
          setLoading(false);
          setLoadingMore(false);
        },
      ),
    );
  };

  //mounted
  useEffect(() => handleComponentMounted(), []);

  useEffect(() => {
    getInitialData(1);
    setPage(1);
    setAllProdLoaded(false);
    setLoading(true);
  }, [filterParams, filterParams.search]);

  const handleComponentMounted = () => {
    const onBackPress = () => {
      props.navigation.goBack(null);
      return true;
    };

    BackHandler.addEventListener('hardwareBackPress', onBackPress);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  };

  //updated
  useEffect(() => handleComponentUpdated());

  const onRefreshList = () => {
    getInitialData(1);
    setAllProdLoaded(false);
    setPage(1);
  };

  const handleComponentUpdated = () => {
    if (props.homepageAPIReponse) {
    }
  };
  const onLinearClick = () => {
    setIsLinearClicked(!isLinearClicked);
  };

  const onFilterPress = () => {
    props.navigation.navigate('FilterScreen');
  };
  const onSortPress = () => {
    setIsSortModalVisible(!isSortModalVisible);
  };
  const onLogoPress = () => {
    props.navigation.navigate('HomeScreen');
  };
  const onSearchClick = searchText => {
    dispatch(
      resetUpdateSearchFilterData({
        search: searchText,
      }),
    );
  };
  const loadMoreProducts = () => {
    if (allProdLoaded || loadingMore || loading) {
      return;
    }

    setLoadingMore(true);
    let addPageNum = page + 1;
    setPage(addPageNum);
    getInitialData(addPageNum);
  };

  const onProductCardClick = id => {
    props.navigation.navigate('ProductDetailScreen', { id: id });
  };

  const onSortChange = sortVal => {
    setPage(1);
    setIsSortModalVisible(!isSortModalVisible);
    dispatch(updateSearchFilterData({ sort: sortVal }));
  };

  const onProductHeartClick = (type, prodID) => {
    if (!wishExecuting) {
      dispatch(addRemoveToWishlist(prodID));
    }
  };

  const onBackButtonClick = () => {
    props.navigation.goBack();
  };

  const goToSearchScreen = () => {
    props.navigation.navigate('SearchScreen');
  };

  return (
    <SearchDetailView
      onBackButtonClick={onBackButtonClick}
      filterParams={filterParams}
      productList={products}
      loading={loading}
      totalCount={totalCount}
      onLinearClick={onLinearClick}
      isLinearClicked={isLinearClicked}
      onFilterPress={onFilterPress}
      onSortPress={onSortPress}
      isSortModalVisible={isSortModalVisible}
      onLogoPress={onLogoPress}
      onSearchClick={onSearchClick}
      onRefreshList={onRefreshList}
      onProductCardClick={onProductCardClick}
      loadMoreProducts={loadMoreProducts}
      loadingMore={loadingMore}
      onSortChange={onSortChange}
      onHeartClick={onProductHeartClick}
      wishExecuting={wishExecuting}
      goToSearchScreen={goToSearchScreen}
      is_guest_logged_in={props.is_guest_logged_in}
    />
  );
};

const mapStateToProps = (state, props) => {
  return {
    is_guest_logged_in: state.loginReducer.is_guest_logged_in,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

const SearchDetailScreenWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchDetailScreen);

export default SearchDetailScreenWithRedux;
