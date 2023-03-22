import React, { useEffect, useState } from 'react';
import { I18nManager, Alert } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

import { connect } from 'react-redux';
import AddressView from './AddressView';
import { bindActionCreators } from 'redux';

import appTexts from '../../lib/appTexts';
import functions from '../../lib/functions';
import RNRestart from 'react-native-restart';
import * as AddressActions from '../../actions/AddressActions';
import _ from 'lodash';
import { BackHandler } from 'react-native';

const AddressScreen = props => {
  //Initialising states
  const [tabIndex, setTabIndex] = useState(0);

  /** will focus */
  useEffect(() => {
    return props.navigation.addListener('focus', () => {
      props.getalldeliveryAddress(props.token);
      props.getallbillingAddress(props.token);
    });

    return () => {
      unsubscribe();
    };
  }, [props.navigation, props.token]);

  //mounted
  useEffect(() => handleComponentMounted(), []);
  const handleComponentMounted = () => {
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        BackHandler.addEventListener(
          'hardwareBackPress',
          (backPressed = () => {
            props.navigation.goBack();
            return true;
          }),
        );
        props.getalldeliveryAddress(props.token);
        props.getallbillingAddress(props.token);
      } else {
        functions.displayAlert(
          null,
          globals.ALERT_MESSAGES.noInternet,
          'Address',
        );
      }
    });
  };

  //updated
  useEffect(() => handleComponentUpdated());

  const handleComponentUpdated = () => {
    if (
      props.deleteAddressSucccess &&
      props.deleteAddressSucccess.success == true
    ) {
      functions.displayToast(
        'success',
        'top',
        appTexts.ALERT_MESSAGES.success,
        _.get(props.deleteAddressSucccess, 'msg'),
      );
      props.deleteResetAddressActionSuccess();
      props.getalldeliveryAddress(props.token);
      props.getallbillingAddress(props.token);
    }
  };

  const onBackButtonClick = () => {
    props.navigation.goBack();
  };

  const changeTab = index => {
    if (tabIndex !== index) {
      setTabIndex(index);
    }
    //  if (index === 0) {
    //   alert('Delivery address');
    // } else if (index === 1) {
    //   alert('Billing Address');
    // }
  };

  const addnewAddress = () => {
    let items = [];
    let items2 = [];
    if (
      props.getalldeliveryaddressDetails !== null &&
      props.getalldeliveryaddressDetails
    ) {
      items = props.getalldeliveryaddressDetails;
    }
    if (
      props.getallbillingaddressDetails !== null &&
      props.getallbillingaddressDetails
    ) {
      items2 = props.getallbillingaddressDetails;
    }
    props.navigation.navigate('AddnewaddressScreen', {
      length: tabIndex == 0 ? items.length : items2.length,
      lengthAll: items.length + items2.length,
      tabIndex: tabIndex,
    });
  };

  const itemClick = addressId => {
    let items = [];
    if (
      tabIndex === 0 &&
      props.getalldeliveryaddressDetails !== null &&
      props.getalldeliveryaddressDetails
    ) {
      items = props.getalldeliveryaddressDetails;
    }
    if (
      tabIndex === 1 &&
      props.getallbillingaddressDetails !== null &&
      props.getallbillingaddressDetails
    ) {
      items = props.getallbillingaddressDetails;
    }

    props.navigation.navigate('EditaddressScreen', {
      addressId: addressId,
      from: 'addresses',
      length: items.length,
    });
  };

  const deleteClick = addressId => {
    Alert.alert(appTexts.ADDRESS.deleteaddress, appTexts.ADDRESS.deleteaddressMessage, [
      {
        text: appTexts.LOGOUT.cancel,
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: appTexts.ADDRESS.ok,
        onPress: () => props.deleteAddress(addressId, props.token),
      },
    ]);
  };

  return (
    <AddressView
      onBackButtonClick={onBackButtonClick}
      addnewAddress={addnewAddress}
      changeTab={changeTab}
      tabIndex={tabIndex}
      itemClick={itemClick}
      deleteClick={deleteClick}
      addressData={
        tabIndex === 0
          ? props.getalldeliveryaddressDetails !== null &&
            props.getalldeliveryaddressDetails
            ? props.getalldeliveryaddressDetails
            : []
          : tabIndex === 1
            ? props.getallbillingaddressDetails !== null &&
              props.getallbillingaddressDetails
              ? props.getallbillingaddressDetails
              : []
            : 'null'
      }
      isLoading={props.isLoading}
    />
  );
};
const mapStateToProps = (state, props) => {
  return {
    getalldeliveryaddressDetails: _.get(
      state,
      'addressReducer.getdeliveryaddress',
      '',
    ),
    getallbillingaddressDetails: _.get(
      state,
      'addressReducer.getbillingaddress',
      '',
    ),
    token: _.get(state, 'loginReducer.userData.data.access_token', null),
    deleteAddressSucccess: state.addressReducer.deleteAddressSucccess,
    isLoading: state.addressReducer.isLoading,
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getalldeliveryAddress: AddressActions.getdeliveryAddress,
      getallbillingAddress: AddressActions.getbillingAddress,
      deleteAddress: AddressActions.removeAddress,
      deleteResetAddressActionSuccess:
        AddressActions.deleteResetAddressActionSuccess,
    },
    dispatch,
  );
};
const myOrdersScreenWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddressScreen);

myOrdersScreenWithRedux.navigationOptions = ({ navigation }) => ({
  header: null,
});

export default myOrdersScreenWithRedux;
