import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import DealsView from './DealsView';

import {
  getDealsContent,
  resetUpdateSearchFilterData,
  addRemoveToWishlist,
} from '../../actions';
import functions from '../../lib/functions';
import appTexts from '../../lib/appTexts';
import { I18nManager, BackHandler, ToastAndroid } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const DealsScreen = props => {
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState(null);

  const dispatch = useDispatch();
  const { wishExecuting } = useSelector(state => state.wishlistReducer);

  const initialData = () => {
    dispatch(
      getDealsContent(
        res => {
          setListData(res.data.list);
          setLoading(false);
        },
        error => {
          setApiError(error);
          setLoading(false);

          if (error && _.get(error, 'data.success') === false) {
            functions.displayToast(
              'error',
              'top',
              appTexts.ALERT_MESSAGES.error,
              _.get(error, 'data.error.msg'),
            );
          }
        },
      ),
    );
  };

  //mounted
  useEffect(() => handleComponentMounted(), []);

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
  //unmount
  useEffect(() => {
    return () => {
      handleComponentUnmount();
    };
  }, []);

  const handleComponentUnmount = () => { };

  //updated
  useEffect(() => handleComponentUpdated(), [apiError]);

  const handleComponentUpdated = () => {
    if (apiError) {
      setApiError(null);
    }
  };

  const onRefreshContent = () => {
    initialData();
  };
  const redirectToSearchScreen = category_id => {
    dispatch(resetUpdateSearchFilterData({ category_id, brand_id: null }));
    props.navigation.navigate('SearchDetailScreen');
  };
  const onAdBannerClick = ({ type, category_id, product_id }) => {
    if (type === 'C' && category_id) {
      redirectToSearchScreen(category_id);
    }
    if (type === 'P' && product_id) {
      props.navigation.navigate('ProductDetailScreen', { id: product_id });
    }
  };
  const onCatItemClick = catId => {
    redirectToSearchScreen(catId);
  };
  const onItemClick = id => {
    props.navigation.navigate('ProductDetailScreen', { id: id });
  };
  const onLogoPress = () => {
    props.navigation.navigate('HomeScreen');
  };
  const onSearchClick = () => {
    props.navigation.navigate('SearchScreen');
  };
  const onProductHeartClick = (type, prodID) => {
    if (!wishExecuting) {
      dispatch(addRemoveToWishlist(prodID));
    }
  };

  return (
    <DealsView
      loading={loading}
      listData={listData}
      onLogoPress={onLogoPress}
      onSearchClick={onSearchClick}
      onItemClick={onItemClick}
      onAdBannerClick={onAdBannerClick}
      onCatItemClick={onCatItemClick}
      onRefreshContent={onRefreshContent}
      onHeartClick={onProductHeartClick}
      wishExecuting={wishExecuting}
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

const DealsScreenWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DealsScreen);

export default DealsScreenWithRedux;
