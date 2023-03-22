import React, { useEffect, useState } from 'react';
import CategoryView from './CategoryView';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories, resetUpdateSearchFilterData } from '../../actions';
import { BackHandler, ToastAndroid } from 'react-native';

const CategoryScreen = props => {
  const dispatch = useDispatch();
  const { isLoading, allCategories, error, successMsg } = useSelector(
    state => state.allCats,
  );

  //will focus
  useEffect(() => {
    return props.navigation.addListener('focus', () => {
      BackHandler.addEventListener('hardwareBackPress', () => {
        // BackHandler.exitApp();
        // return true;
        if (backPressed > 0) {
          BackHandler.exitApp();
          backPressed = 0;
        } else {
          backPressed++;
          ToastAndroid.show('Please tap again to exit', ToastAndroid.SHORT);

          setTimeout(() => {
            backPressed = 0;
          }, 2000);
          return true;
        }
      });
    });
  }, [props.navigation]);

  //mounted
  useEffect(() => handleComponentMounted(), []);

  const initialData = () => {
    dispatch(getAllCategories());
  };

  const handleComponentMounted = () => {
    initialData();
    // BackHandler.addEventListener(
    //   'hardwareBackPress',
    //   (backPressed = () => {
    //     BackHandler.exitApp();
    //     return true;
    //   }),
    // );
    BackHandler.addEventListener('hardwareBackPress', () => {
      // BackHandler.exitApp();
      // return true;
      if (backPressed > 0) {
        BackHandler.exitApp();
        backPressed = 0;
      } else {
        backPressed++;
        ToastAndroid.show('Please tap again to exit', ToastAndroid.SHORT);

        setTimeout(() => {
          backPressed = 0;
        }, 2000);
        return true;
      }
    });
  };

  //unmount
  useEffect(() => {
    return () => {
      handleComponentUnmount();
    };
  }, []);

  const handleComponentUnmount = () => { };

  //updated
  useEffect(() => handleComponentUpdated());

  const onRefreshContent = () => {
    initialData();
  };

  const handleComponentUpdated = () => {
    if (props.homepageAPIReponse) {
    }
  };

  const redirectToSearchScreen = category_id => {
    dispatch(
      resetUpdateSearchFilterData({
        search: null,
        brand_id: null,
        category_id: category_id,
      }),
    );
    props.navigation.navigate('SearchDetailScreen');
  };

  const onSeeAllClick = parentCatId => {
    dispatch(
      resetUpdateSearchFilterData({
        search: null,
        brand_id: null,
        category_id: null,
      }),
    );
    redirectToSearchScreen(parentCatId === 'recommendation' ? '' : parentCatId);
  };
  const onSearchClick = ({ category_id, search }) => {
    dispatch(resetUpdateSearchFilterData({ category_id, search }));
    props.navigation.navigate('SearchDetailScreen');
  };
  const onBrandsClick = () => {
    props.navigation.navigate('TopBrandsListScreen');
  };

  const onSubCatClick = subCatId => {
    redirectToSearchScreen(subCatId);
  };

  const onTopBrandclick = (brand_id, category_id) => {
    dispatch(
      resetUpdateSearchFilterData({
        search: null,
        brand_id: brand_id,
        category_id: category_id,
      }),
    );
    props.navigation.navigate('SearchDetailScreen');
  };

  const goToSearchScreen = () => {
    props.navigation.navigate('SearchScreen');
  };

  return (
    <CategoryView
      isLoading={isLoading}
      allCategories={allCategories} //.category}
      onSeeallClick={onSeeAllClick}
      onSubCatClick={onSubCatClick}
      onTopBrandclick={onTopBrandclick}
      onSearchClick={onSearchClick}
      onBrandsClick={onBrandsClick}
      onRefreshContent={onRefreshContent}
      goToSearchScreen={goToSearchScreen}
    />
  );
};

const mapStateToProps = (state, props) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default CategoryScreen;
