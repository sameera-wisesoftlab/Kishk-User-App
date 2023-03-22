import React, {useEffect, useState} from 'react';
import {BackHandler} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {resetUpdateSearchFilterData, getTopBrands} from '../../actions';
import TopBrandsListView from './TopBrandsListView';

const TopBrandsListScreen = props => {
  const dispatch = useDispatch();
  const {homeData} = useSelector(state => state.home);

  const brandData = homeData.list.find(i => i.area_type === 'TB');
  let topBrandList = brandData?.details?.featured_brand;

  const [topBrands, setTopBrands] = useState(topBrandList || []);
  const [loading, setLoading] = useState(true);
  const [allLoaded, setAllLoaded] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);

  const getInitialData = (pageNum = page) => {
    dispatch(
      getTopBrands(
        {page: pageNum},
        res => {
          if (pageNum > 1) {
            setTopBrands([...topBrands, ...res.data.top_brands.data]);
            if (
              res.data.top_brands.current_page === res.data.top_brands.last_page
            ) {
              setAllLoaded(true);
            }
            setLoadingMore(false);
          } else {
            setTopBrands(res.data.top_brands.data);
            if (
              res.data.top_brands.current_page === res.data.top_brands.last_page
            ) {
              setAllLoaded(true);
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

  const loadMoreItems = () => {
    if (allLoaded || loadingMore || loading) {
      return;
    }

    setLoadingMore(true);
    let addPageNum = page + 1;
    setPage(addPageNum);
    getInitialData(addPageNum);
  };

  //will focus
  useEffect(() => {}, [props.navigation]);

  //mounted
  useEffect(() => handleComponentMounted(), []);

  const handleComponentMounted = () => {
    getInitialData();

    const onBackPress = () => {
      props.navigation.goBack(null);
      return true;
    };

    BackHandler.addEventListener('hardwareBackPress', onBackPress);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  };

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

  const onLogoPress = () => {
    props.navigation.navigate('HomeScreen');
  };

  const onBrandItemClick = brand_id => {
    dispatch(resetUpdateSearchFilterData({category_id: null, brand_id}));
    props.navigation.navigate('SearchDetailScreen');
  };

  const onRefreshFlatList = () => {
    getInitialData(1);
    setAllLoaded(false);
    setPage(1);
  };

  return (
    <TopBrandsListView
      topBrandList={topBrands}
      onBackButtonClick={onBackButtonClick}
      onLogoPress={onLogoPress}
      onItemClick={onBrandItemClick}
      onRefreshList={onRefreshFlatList}
      isLoading={loading}
      loadMoreItems={loadMoreItems}
      loadingMore={loadingMore}
    />
  );
};

const mapStateToProps = (state, props) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default TopBrandsListScreen;
