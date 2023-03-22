import React, { useEffect, useState } from 'react';
import { I18nManager, BackHandler, Keyboard } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import EditProfileView from './EditProfileView';

import { bindActionCreators } from 'redux';
import * as editUserActions from '../../actions/editUserActions';
import globals from '../../lib/globals';
import { connect } from 'react-redux';
import _ from 'lodash';

import functions from '../../lib/functions';
import ServiceWrapperAwait from '../../service/ServiceWrapperAwait';
import FastImageLoader from '../../components/FastImage/FastImage';
import moment from 'moment';
import appTexts from '../../lib/appTexts';
let cropViewRef = null;

const EditProfileScreen = props => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [birthDate, setBirthDate] = useState(new Date());

  const [imageData, setImageData] = useState({ logo: null });
  const [loader, setLoader] = useState(false);
  const [backDropOpacity, setBackDropOpacity] = useState(0.7);

  const [name, setName] = useState(
    _.get(props, 'editUserDetails.data.cust_name', ''),
  );
  const [middle_name, setMiddlename] = useState(
    _.get(props, 'editUserDetails.data.mid_name', ''),
  );
  const [last_name, setLastname] = useState(
    _.get(props, 'editUserDetails.data.last_name', ''),
  );
  const [phone, setPhone] = useState(
    _.get(props, 'editUserDetails.data.phone', ''),
  );
  const [email, setEmail] = useState(
    _.get(props, 'editUserDetails.data.email', ''),
  );

  let _b_date = _.get(
    props,
    'editUserDetails.data.dob',
    moment().format('YYYY-MM-DD'),
  );
  if (!_b_date || _b_date == null) {
    /** If date is null set current date */
    _b_date = null;
  } else {
    /** Format date to YYYY-MM-DD */
    _b_date = moment(_b_date, 'DD-MM-YYYY').format('YYYY-MM-DD');
  }
  const [bdate, setBdate] = useState(_b_date);
  const [photo, setPhoto] = useState(
    _.get(props, 'editUserDetails.data.photo', null),
  );
  const [gender, setGender] = useState(
    _.get(props, 'editUserDetails.data.gender', ''),
  );
  //mounted
  useEffect(() => handleComponentMounted(), []);
  const handleComponentMounted = () => {
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        props.editUserData(props.token);
      } else {
        functions.displayAlert(
          null,
          appTexts.ALERT_MESSAGES.noInternet,
          'EditProfile',
        );
      }
    });
    BackHandler.addEventListener(
      'hardwareBackPress',
      (backPressed = () => {
        props.navigation.goBack();
        return true;
      }),
    );
  };

  //unmount
  useEffect(() => {
    return () => {
      handleComponentUnmount();
    };
  }, []);
  const handleComponentUnmount = () => { };

  const onBackButtonClick = () => {
    props.navigation.goBack();
  };

  const onCalendarPress = () => {
    setDate(birthDate);
    setShowDatePicker(true);
  };

  const cancelClick = () => {
    setDate(birthDate);
    setShowDatePicker(false);
  };
  const doneClick = () => {
    // setBirthDate(date);
    setShowDatePicker(false);
  };

  const profileupdateClick = () => {
    //alert('Cprofileupadted');
    if (name.trim() === '' || name === null) {
      functions.displayToast(
        'error',
        'top',
        appTexts.ALERT_MESSAGES.error,
        appTexts.ALERT_MESSAGES.firstnameRequired,
      );
      return;
    } else if (middle_name.trim() === '' || middle_name === null) {
      functions.displayToast(
        'error',
        'top',
        appTexts.ALERT_MESSAGES.error,
        appTexts.ALERT_MESSAGES.middlenameRequired,
      );
      return;
    } else if (last_name.trim() === '' || last_name === null) {
      functions.displayToast(
        'error',
        'top',
        appTexts.ALERT_MESSAGES.error,
        appTexts.ALERT_MESSAGES.lastnameRequired,
      );
      return;
    } else {
      let _imageData = imageData;
      if (_imageData.logo != null && _imageData.cropped == false) {
        setImageData({
          logo: null,
          cropped: false,
          selected: false,
        });
        _imageData = { logo: null };
      }
      Keyboard.dismiss();
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
          let _data = new FormData();
          if (_imageData.logo != null) {
            _data.append('photo', {
              name: _imageData.nameImage,
              type: _imageData.typeImage,
              uri:
                Platform.OS === 'android'
                  ? _imageData.logo.uri
                  : _imageData.logo.uri.replace('file://', ''),
            });
          }
          let todayDate = moment(new Date()).format('DD-MM-YYYY');
          _data.append('f_name', name);
          _data.append('m_name', middle_name == null ? '' : middle_name);
          _data.append('l_name', last_name == null ? '' : last_name);
          _data.append('dob', bdate == '' ? todayDate : bdate);
          _data.append('gender', gender);
          _data.append('phone', phone);
          _data.append('email', email);
          saveUserData(_data);
        } else {
          functions.displayToast('error', 'top', '!!!!ERROR', 'MESSAGE ERROR');
        }
      });
    }
  };

  const changeBackDropOpacity = () => {
    setBackDropOpacity(0.1);
    setTimeout(() => {
      setBackDropOpacity(0.7);
    }, 3000);
  };

  const updateProfile = async _data => {
    const sAsyncWrapper = new ServiceWrapperAwait();
    setLoader(true);
    const response = await sAsyncWrapper.post(
      'api/profile/update',
      _data,
      'multipart/form-data',
    );
    setLoader(false);
    try {
      const data = new Promise((resolve, reject) => {
        try {
          resolve(response);
        } catch (err) {
          reject(err);
        }
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const saveUserData = async _data => {
    const data = await updateProfile(_data);
    if (data.success == true) {
      props.editUserData(props.token);
      functions.displayToast(
        'success',
        'top',
        appTexts.ALERT_MESSAGES.success,
        appTexts.PROFILE.profilemsg,
      );

      props.navigation.navigate('TabNavigator', { screen: 'ProfileScreen' });
    } else {
      functions.displayToast('error', 'top', 'Error', data.error.msg);
    }
  };
  let mydate = moment(date).format('YYYY-MM-DD');

  return (
    <EditProfileView
      onBackButtonClick={onBackButtonClick}
      isLoading={props.isLoading || loader}
      onCalendarPress={onCalendarPress}
      setSelectedDate={_date => {
        setDate(_date);
        setBdate(moment(_date).format('YYYY-MM-DD'));
      }}
      selectedDate={date}
      userdetails={props.editUserDetails}
      isShowDatePicker={showDatePicker}
      cancelClick={cancelClick}
      doneClick={doneClick}
      profileupdateClick={profileupdateClick}
      birthDate={birthDate}
      name={name}
      setName={setName}
      middle_name={middle_name}
      last_name={last_name}
      setMiddlename={setMiddlename}
      setLastname={setLastname}
      phone={phone}
      setPhone={setPhone}
      email={email}
      setEmail={setEmail}
      bdate={bdate}
      setBdate={setBdate}
      imageData={imageData}
      setImageData={setImageData}
      gender={gender}
      setGender={setGender}
      photo={photo}
    />
  );
};

const mapStateToProps = (state, props) => {
  return {
    token: _.get(state, 'loginReducer.userData.data.access_token', null),
    editUserDetails: _.get(state, 'editUserReducer.editUserData', ''),
    isLoading: _.get(state, 'editUserReducer.isLoading', ''),
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      editUserData: editUserActions.doUserDetailsEdit,
    },
    dispatch,
  );
};

const EditProfileScreenWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditProfileScreen);

EditProfileScreenWithRedux.navigationOptions = ({ navigation }) => ({
  header: null,
});

export default EditProfileScreenWithRedux;
