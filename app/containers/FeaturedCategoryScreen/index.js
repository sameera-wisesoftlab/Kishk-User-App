import React, {useEffect, useState} from 'react';
import {BackHandler} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {resetUpdateSearchFilterData, getFeatCategories} from '../../actions';
import FeaturedCategoryView from './FeaturedCategoryView';

const FeaturedCategoryScreen = props => {
  const dispatch = useDispatch();
  const {homeData} = useSelector(state => state.home);
  const featuredCatData = homeData.list.find(i => i.area_type === 'FC');
  const featCatList = featuredCatData?.details;

  const [featCats, setFeatCats] = useState(featCatList || []);
  const [loading, setLoading] = useState(true);
  const [allLoaded, setAllLoaded] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);

  const getInitialData = (pageNum = page) => {
    dispatch(
      getFeatCategories(
        {page: pageNum},
        res => {
          if (pageNum > 1) {
            setFeatCats([...featCats, ...res.data.featured_category.data]);
            if (
              res.data.featured_category.current_page ===
              res.data.featured_category.last_page
            ) {
              setAllLoaded(true);
            }
            setLoadingMore(false);
          } else {
            setFeatCats(res.data.featured_category.data);
            if (
              res.data.featured_category.current_page ===
              res.data.featured_category.last_page
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

  const onCatItemClick = category_id => {
    dispatch(resetUpdateSearchFilterData({category_id, brand_id: null}));
    props.navigation.navigate('SearchDetailScreen');
  };

  const onRefreshFlatList = () => {
    getInitialData(1);
    setAllLoaded(false);
    setPage(1);
  };

  return (
    <FeaturedCategoryView
      featCatList={featCats}
      onBackButtonClick={onBackButtonClick}
      onItemClick={onCatItemClick}
      onRefreshList={onRefreshFlatList}
      isLoading={loading}
      loadMoreItems={loadMoreItems}
      loadingMore={loadingMore}
    />
  );
};

export default FeaturedCategoryScreen;
