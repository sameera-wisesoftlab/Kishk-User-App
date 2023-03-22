import React, { useEffect, useState } from 'react';
import {
  I18nManager,
  Keyboard,
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  PermissionsAndroid,
  Platform,
  ToastAndroid,
  Alert,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import AddnewaddressView from './AddnewaddressView';
import { bindActionCreators } from 'redux';
import NetInfo from '@react-native-community/netinfo';
import _ from 'lodash';
import appTexts from '../../lib/appTexts';
import functions from '../../lib/functions';
import Toast from 'react-native-toast-message';
import * as AddressActions from '../../actions/AddressActions';
import * as editUserActions from '../../actions/editUserActions';
import Modal from 'react-native-modal';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';
import CustomButton from '../../components/CustomButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from '../../lib/apiHelper';
import globals from '../../lib/globals';
// import * as _ from "lodash";

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const AddnewaddressScreen = props => {
  //Initialising states
  const [tabIndex, setTabIndex] = useState(0);
  const [isCheckboxClicked, setIsCheckboxClicked] = useState(
    props?.route?.params?.length <= 0,
  );
  const [apartment, setApartment] = useState('');
  const [pobox, setPobox] = useState('');
  const [landmark, setLandmark] = useState('');
  const [region, setRegion] = useState('');
  const [billtype, setbillType] = useState('');
  const [deliveryaddress, setdeliveryAddress] = useState(
    props?.route?.params?.lengthAll <= 0
      ? true
      : props?.route?.params?.tabIndex == 0,
  );
  const [billingaddress, setbillingAddress] = useState(
    props?.route?.params?.lengthAll <= 0
      ? true
      : props?.route?.params?.tabIndex == 1,
  );
  const [deliverytype, setdeliveryType] = useState('');
  const [loader, setLoader] = useState(false);
  const [mapModelVisible, setMapModelVisible] = useState(false);
  const [phone, setPhone] = useState(
    _.get(props, 'editUserDetails.data.phone', ''),
  );
  const [name, setName] = useState(
    _.get(props, 'editUserDetails.data.cust_name', ''),
  );

  const [mapType, setMapType] = useState('standard');

  const [currentLocation, setCurrentLocation] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  const [addressLocation, setAddressLocation] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  const [mapViewLocation, setMapViewLocation] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  const [mapAddress, setMapAddress] = useState(null);
  const [markAddress, setMarkAddress] = useState(null);
  const [locationMarkFlag, setLocationMarkFlag] = useState(false);
  // const [locationPermissionFlag, setLocationPmissionFlag] = useState(false);

  const from = props?.route?.params?.from;
  const addr_flag = props?.route?.params?.addr_flag;

  // if (from == 'checkout') {
  //   if (deliveryaddress == false && addr_flag == 'D') {
  //     setdeliveryAddress(true);
  //   }
  //   if (billingaddress == false && addr_flag == 'B') {
  //     setbillingAddress(true);
  //   }
  // }

  const onBackButtonClick = () => {
    props.navigation.goBack();
  };

  const addressdefaultClick = () => {
    setIsCheckboxClicked(!isCheckboxClicked);
  };

  const isValidPhone = phoneField => {
    let reg = /^[0-9]{8}$/;
    if (reg.test(phoneField)) return true;
    else false;
  };

  /** will focus */
  useEffect(() => {
    return props.navigation.addListener('focus', () => {
      props.editUserData(props.token);
      props.getalldeliveryAddress(props.token);
      props.getallbillingAddress(props.token);
    });

    return () => {
      unsubscribe();
    };
  }, [props.navigation, props.token]);

  useEffect(() => handleComponentMounted(), []);
  const handleComponentMounted = () => {
    props.editUserData(props.token);
    props.resetSuccessMessage({});
    props.getalldeliveryAddress(props.token);
    props.getallbillingAddress(props.token);
  };

  useEffect(() => {
    if (deliveryaddress && !billingaddress) {
      setbillType('delivery');
    }
    if (billingaddress && !deliveryaddress) {
      setbillType('billing');
    }
    if (deliveryaddress && billingaddress) {
      setbillType('both');
    }
  }, [billingaddress, deliveryaddress]);

  useEffect(() => handleComponentUpdated());
  const handleComponentUpdated = () => {
    if (
      _.get(props, 'addressRequestSuccess.success') === true &&
      _.get(props, 'addressRequestSuccess.success')
    ) {
      functions.displayToast(
        'success',
        'top',
        appTexts.ALERT_MESSAGES.success,
        _.get(props, 'addressRequestSuccess.msg'),
      );
      props.resetSuccessMessage({});
      if (from == 'checkout') {
        props.navigation.navigate('CheckoutScreen1');
      } else {
        props.navigation.navigate('AddressScreen');
      }
    }
    if (
      _.get(props, 'addressError') &&
      _.get(props, 'addressError.success') === false
    ) {
      functions.displayToast(
        'error',
        'top',
        appTexts.ALERT_MESSAGES.error,
        _.get(props, 'addressError.error.msg'),
      );
      props.addressActionError({});
    }

    if (
      props.editUserDetails?.data?.phone &&
      props.editUserDetails?.data?.phone != phone
    ) {
    }
    if (
      props.editUserDetails?.data?.cust_name &&
      props.editUserDetails?.data?.cust_name != name
    ) {
      setName(props.editUserDetails.data.cust_name);
    }
  };

  const addnewAddress = () => {
    if (name.trim() === '' || name === null) {
      functions.displayToast(
        'error',
        'top',
        appTexts.ALERT_MESSAGES.error,
        appTexts.ALERT_MESSAGES.nameRequired,
      );
      return;
    } else if (phone.trim() === '' || phone === null) {
      functions.displayToast(
        'error',
        'top',
        appTexts.ALERT_MESSAGES.error,
        appTexts.ALERT_MESSAGES.phoneRequired,
      );
      return;
    } else if (!isValidPhone(phone.trim())) {
      functions.displayToast(
        'error',
        'top',
        appTexts.ALERT_MESSAGES.error,
        appTexts.LOGIN_TOASTMESSAGES.digit,
      );
      return;
    } else if (apartment.trim() === '' || apartment === null) {
      functions.displayToast(
        'error',
        'top',
        appTexts.ALERT_MESSAGES.error,
        appTexts.ALERT_MESSAGES.apartmentRequired,
      );
      return;
    } else if (!pobox || pobox === null || pobox.trim() === '') {
      functions.displayToast(
        'error',
        'top',
        appTexts.ALERT_MESSAGES.error,
        appTexts.ALERT_MESSAGES.poRequired,
      );
      return;
    } else if (region.trim() === '' || region === null) {
      functions.displayToast(
        'error',
        'top',
        appTexts.ALERT_MESSAGES.error,
        appTexts.ALERT_MESSAGES.regionRequired,
      );
      return;
    } else if (landmark.trim() === '' || landmark === null) {
      functions.displayToast(
        'error',
        'top',
        appTexts.ALERT_MESSAGES.error,
        appTexts.ALERT_MESSAGES.landmarkRequired,
      );
      return;
    } else {
      Keyboard.dismiss();
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
          let apiParams = {
            address_type: billtype,
            apartment: apartment.trim(),
            street: region.trim(),
            landmark: landmark.trim(),
            is_default: isCheckboxClicked ? 'Y' : 'N',
            name: name.trim(),
            type: deliverytype,
            ph_no: phone.trim(),
            pin: pobox.trim(),
            lat: addressLocation?.latitude,
            long: addressLocation?.longitude,
          };
          props.createAddress(apiParams, props.token);
        } else {
          functions.displayToast(
            'error',
            'top',
            appTexts.ALERT_MESSAGES.error,
            appTexts.ALERT_MESSAGES.noInternet,
          );
          return;
        }
      });
    }
  };

  useEffect(() => {
    const fetchLocation = async () => {
      const locationStatus = await hasLocationPermission();
      if (locationStatus) {
        getLocationPosition();
      }
    };

    fetchLocation();
  }, []);

  const getLocationPosition = async () => {
    Geolocation.getCurrentPosition(
      position => {
        var lat = parseFloat(position.coords.latitude);
        var long = parseFloat(position.coords.longitude);
        var initialRegion = {
          latitude: lat,
          longitude: long,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        };
        setCurrentLocation(initialRegion);
        setMapViewLocation(initialRegion);
        getLocationAddress(initialRegion);
      },
      error => console.error(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
    // if (mapModelVisible) {
    //   getLocationAddress(initialRegion);
    // } else {
    //   setMapAddress(null);
    // }
  };

  const getLocationAddress = data => {
    Geocoder.init(GOOGLE_API_KEY);

    Geocoder.from(data.latitude, data.longitude)
      .then(json => {
        var addressComponent = json.results[0].address_components;

        let postCodeData = _.find(addressComponent, function (data) {
          return data?.types[0] === 'postal_code';
        });
        let countryData = _.find(addressComponent, function (data) {
          return data?.types[0] === 'country';
        });
        let stateData = _.find(addressComponent, function (data) {
          return data?.types[0] === 'administrative_area_level_1';
        });
        let districtData = _.find(addressComponent, function (data) {
          return data?.types[0] === 'administrative_area_level_2';
        });
        let placeData = _.find(addressComponent, function (data) {
          return data?.types[0] === 'locality';
        });
        let localityData = _.find(addressComponent, function (data) {
          return data?.types[0] === 'sublocality';
        });
        let routeData = _.find(addressComponent, function (data) {
          return data?.types[0] === 'route';
        });
        let premiseData = _.find(addressComponent, function (data) {
          return data?.types[0] === 'premise';
        });

        var mapAddress = {
          post_code: postCodeData?.long_name,
          country: countryData?.long_name,
          state: stateData?.long_name,
          district: districtData?.long_name,
          place: placeData?.long_name,
          locality: localityData?.long_name,
          route:
            routeData?.long_name ||
            placeData?.long_name ||
            addressComponent?.[0]?.long_name,
          premise: premiseData?.long_name,
        };

        if (locationMarkFlag) {
          setMarkAddress(mapAddress);
        } else {
          setMapAddress(mapAddress);
        }
      })
      .catch(error => console.log(error));
  };

  const handleRegionPress = mapData => {
    setLocationMarkFlag(true);
    var changeRegion = {
      latitude: mapData.nativeEvent.coordinate.latitude,
      longitude: mapData.nativeEvent.coordinate.longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    };
    setMapViewLocation(changeRegion);
    setAddressLocation(changeRegion);
    getLocationAddress(changeRegion);
  };

  const handleRegionChange = mapData => {
    setLocationMarkFlag(true);
  };

  const handleRegionChangeComplete = mapData => {
    setMapViewLocation(mapData);
    getLocationAddress(mapData);
    setAddressLocation(mapData);
  };

  const setLocationButton = () => {
    setPobox(
      markAddress?.post_code === undefined ? pobox : markAddress?.post_code,
    );
    setRegion(markAddress?.route === undefined ? region : markAddress?.route);
    setMapModelVisible(false);
  };

  const hasLocationPermissionIOS = async () => {
    const status = await Geolocation.requestAuthorization('whenInUse');

    if (status === 'granted') {
      return true;
    }

    if (status === 'denied') {
      Alert.alert(`Allow Pink App to determine your location.`, '', [
        { text: 'Go to Settings', onPress: openAppSetting },
        { text: "Don't Use Location", onPress: () => { } },
      ]);
    }

    if (status === 'disabled') {
      Alert.alert(
        `Turn on Location Services to allow Pink App to determine your location.`,
        '',
        [
          { text: 'Go to Settings', onPress: openSetting },
          { text: "Don't Use Location", onPress: () => { } },
        ],
      );
    }

    return false;
  };
  const hasLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      const hasPermission = await hasLocationPermissionIOS();
      return hasPermission;
    }

    if (Platform.OS === 'android' && Platform.Version < 23) {
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show(
        'Location permission denied by user.',
        ToastAndroid.LONG,
      );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show(
        'Location permission revoked by user.',
        ToastAndroid.LONG,
      );
    }
    return false;
  };

  const checkLocationAccess = async () => {
    setMapModelVisible(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <AddnewaddressView
        tabIndex={props.tabIndex}
        addnewAddress={addnewAddress}
        isCheckboxClicked={isCheckboxClicked}
        setName={setName}
        name={name}
        phone={phone}
        setPhone={setPhone}
        onBackButtonClick={onBackButtonClick}
        apartment={apartment}
        setApartment={setApartment}
        pobox={pobox}
        setPobox={setPobox}
        landmark={landmark}
        setLandmark={setLandmark}
        region={region}
        setRegion={setRegion}
        billtype={billtype}
        setbillType={setbillType}
        addressdefaultClick={addressdefaultClick}
        deliverytype={deliverytype}
        setdeliveryType={setdeliveryType}
        isloading={props.isloading}
        loader={loader}
        addressdate={props.getalldeliveryaddressDetails}
        setMapModelVisible={setMapModelVisible}
        checkLocationAccess={checkLocationAccess}
        deliveryaddress={deliveryaddress}
        setdeliveryAddress={setdeliveryAddress}
        billingaddress={billingaddress}
        setbillingAddress={setbillingAddress}
        hideDefaultAddress={props?.route?.params?.length <= 0}
      />

      <Modal
        isVisible={mapModelVisible}
        style={{ justifyContent: 'flex-end', margin: 0 }}>
        <View
          style={{
            height: '80%',
            backgroundColor: '#fff',
            borderRadius: 10,
            marginBottom: '15%',
            position: 'relative',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              paddingVertical: 20,
            }}>
            <Text
              style={{
                fontSize: 15,
                color: '#707070',
                fontFamily: I18nManager.isRTL
                  ? globals.FONTS.notokufiArabic
                  : globals.FONTS.cairoSemiBold,
              }}>
              {appTexts.ADDRESS.MapModelHeader}
            </Text>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity
                style={{
                  borderColor: 'gray',
                  borderWidth: 0.5,
                  paddingLeft: 5,
                  paddingRight: 5,
                  borderRadius: 5,
                  marginRight: 15,
                }}
                onPress={() =>
                  setMapType(mapType == 'standard' ? 'satellite' : 'standard')
                }>
                <Text
                  style={{
                    color: '#017EE5',
                    fontSize: 15,
                    // color: '#707070',
                    fontFamily: I18nManager.isRTL
                      ? globals.FONTS.notokufiArabic
                      : globals.FONTS.cairoSemiBold,
                  }}>
                  {mapType == 'standard'
                    ? appTexts.HOME.satellite
                    : appTexts.HOME.mapView}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setMapModelVisible(false)}>
                <Text
                  style={{
                    marginRight: 15,
                    fontSize: 17,
                    fontWeight: '700',
                    color: '#707070',
                  }}>
                  X
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <MapView
            provider={PROVIDER_GOOGLE}
            mapType={mapType}
            region={mapViewLocation}
            onPress={handleRegionPress}
            onRegionChange={handleRegionChange}
            onRegionChangeComplete={handleRegionChangeComplete}
            style={{ height: '100%' }}>
            <Marker
              coordinate={currentLocation}
              title={mapAddress != null ? mapAddress?.place : 'i am here'}
              description={
                mapAddress != null ? mapAddress?.route : 'Current Location'
              }>
              <View>
                <Image
                  source={require('../../assets/images/map/pin-large.png')}
                  style={{ width: 60, height: 60 }}
                />
              </View>
            </Marker>

            {locationMarkFlag && (
              <Marker
                coordinate={addressLocation}
                title={markAddress != null ? markAddress?.place : 'i am here'}
                description={
                  markAddress != null ? markAddress?.route : 'Current Location'
                }
              />
            )}
          </MapView>
          <View
            style={{
              position: 'absolute',
              top: '12%',
              alignSelf: 'center',
              width: '100%',
              height: 42,
              paddingHorizontal: 20,
              marginTop: 20,
            }}>
            <GooglePlacesAutocomplete
              placeholder={appTexts.HOME.search}
              textInputProps={{ placeholderTextAlign: 'left' }}
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                var searchRegion = {
                  latitude: details?.geometry?.location?.lat,
                  longitude: details?.geometry?.location?.lng,
                  latitudeDelta: LATITUDE_DELTA,
                  longitudeDelta: LONGITUDE_DELTA,
                };

                setMapViewLocation(searchRegion);
                setLocationMarkFlag(true);
                getLocationAddress(searchRegion);
                setAddressLocation(searchRegion);
              }}
              minLength={2}
              debounce={400}
              nearbyPlacesAPI="GooglePlacesSearch"
              enablePoweredByContainer={false}
              fetchDetails={true}
              query={{
                key: GOOGLE_API_KEY,
                language: 'en',
              }}
              styles={{
                container: {
                  flex: 0,
                },
                textInput: {
                  textAlign: I18nManager.isRTL ? 'right' : 'left',
                },
              }}
            />
          </View>
          <TouchableOpacity
            onPress={setLocationButton}
            style={{
              position: 'absolute',
              bottom: 0,
              alignSelf: 'center',
            }}>
            <CustomButton buttonText={appTexts.ADDRESS.setLocation} />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const mapStateToProps = (state, props) => {
  return {
    token: _.get(state, 'loginReducer.userData.data.access_token', null),
    editUserDetails: _.get(state, 'editUserReducer.editUserData', ''),
    isloading: _.get(state, 'addressReducer.isLoading', ''),
    //isloading: _.get(state, 'signupReducer.isLoading', null),
    addressError: _.get(state, 'addressReducer.addresserror', ''),
    addressRequestSuccess: _.get(
      state,
      'addressReducer.addresssendsuccessmsg',
      '',
    ),
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
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      resetSuccessMessage: AddressActions.addressdetailsActionReset,
      createAddress: AddressActions.addressSubmitSend,
      addressActionError: AddressActions.createAddressActionError,
      editUserData: editUserActions.doUserDetailsEdit,
      getalldeliveryAddress: AddressActions.getdeliveryAddress,
      getallbillingAddress: AddressActions.getbillingAddress,
    },
    dispatch,
  );
};

const AddnewaddressWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddnewaddressScreen);

AddnewaddressWithRedux.navigationOptions = ({ navigation }) => ({
  header: null,
});

export default AddnewaddressWithRedux;
