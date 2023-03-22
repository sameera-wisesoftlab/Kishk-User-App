import React, {useEffect, useState} from 'react';
//import { connect } from 'react-redux';
import CheckoutView3 from './CheckoutView3';
import globals from '../../lib/globals';
import {BackHandler} from 'react-native';

const CheckoutScreen3 = props => {
  const [isOnlineVisible, setIsOnlineVisible] = useState(false);

  //will focus
  useEffect(() => {}, [props.navigation]);

  useEffect(() => {
    const backAction = () => {
      props.navigation.navigate('HomeScreen');
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const _params = props?.route?.params;
  const id = _params?.id;

  //mounted
  useEffect(() => handleComponentMounted(), []);
  const handleComponentMounted = () => {};

  //updated
  useEffect(() => handleComponentUpdated());

  const handleComponentUpdated = () => {
    if (props.homepageAPIReponse) {
    }
  };
  const onBackButtonClick = () => {
    props.navigation.goBack();
  };
  const onCategoryPress = () => {
    props.navigation.navigate('CategoryFilterScreen');
  };
  const onBrandsPress = () => {
    props.navigation.navigate('BrandsScreen');
  };
  const onlineClick = () => {
    setIsOnlineVisible(!isOnlineVisible);
  };
  const onViewOrderClick = () => {
    props.navigation.navigate('OrderDetailsScreen', {id: id});
  };
  const toHome = () => {
    props.navigation.navigate('HomeScreen');
  };

  return (
    <CheckoutView3
      onBackButtonClick={onBackButtonClick}
      onlineClick={onlineClick}
      isOnlineVisible={isOnlineVisible}
      onViewOrderClick={onViewOrderClick}
      _params={_params}
      toHome={toHome}
    />
  );
};

const mapStateToProps = (state, props) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

// const homeScreenWithRedux = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(HomeScreen);

// homeScreenWithRedux.navigationOptions = ({ navigation }) => ({
//   header: null
// });

export default CheckoutScreen3;
