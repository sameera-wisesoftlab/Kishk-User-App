import React, { useState, useRef } from 'react';
import {
  View,
  ScrollView,
  Text,
  FlatList,
  StatusBar,
  I18nManager,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import globals from '../../lib/globals';
import appTexts from '../../lib/appTexts';
import { styles, images } from './styles';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import FloatButton from '../../components/FloatButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Loader from '../../components/Loader';
import _ from 'lodash';
import DateTimePicker from '../../components/DateTimePicker';
import moment from 'moment';
import CropButton from '../../components/CropButton';
import { launchImageLibrary } from "react-native-image-picker"
import { CropView } from 'react-native-image-crop-tools';
import ServiceWrapperAwait from '../../service/ServiceWrapperAwait';
import FastImageLoader from '../../components/FastImage/FastImage';

const EditProfileView = props => {
  const {
    onBackButtonClick,
    userdetails,
    isLoading,
    selectedDate,
    setSelectedDate,
    mode,
    isShowDatePicker,
    birthDate,
    onCalendarPress,
    cancelClick,
    doneClick,
    profileupdateClick,
    setName,
    name,
    middle_name,
    last_name,
    phone,
    setPhone,
    setEmail,
    email,
    bdate,
    setBdate,
    gender,
    setGender,
    // pickLogo,
    imageData,
    setImageData,
    photo,
    setMiddlename,
    setLastname
  } = props;

  let cropViewRef = null;

  const pickLogo = async () => {
    const options = {
      title: 'Select profile picture',
    };
    try {
      launchImageLibrary(options, res => {
        if (res.didCancel) {
        } else if (res.error) {
        } else {
          if (res.fileSize / 1000000 > 10) {
            functions.displayToast(
              'error',
              'top',
              'Error',
              'Image size should not exceed 1MB',
            );
            return false;
          }
          try {
            const data = Object.assign({}, res.assets[0]);
            setImageData({
              logo: data,
              logoUrl: null,
              selected: true,
              cropped: false,
              typeImage: data.type,
              nameImage: data.fileName,
            });
          } catch (err) {
            console.log('select-rr');
          }
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const cropLogo = () => {
    const quality = Platform.OS === 'ios' ? 0.5 : 50;
    cropViewRef.saveImage(true, quality);
    return false;
  };

  return (
    <View style={styles.screenMain}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={globals.COLOR.screenBackground}
      />

      {isLoading && <Loader />}

      <Header
        navigation={props.navigation}
        isBackButtonRequired={true}
        onBackButtonClick={onBackButtonClick}
        isLeftTitleRequired={true}
        title={appTexts.FILTER.edit}
        customHeaderStyle={{
          height: globals.INTEGER.headerHeight,
          alignItems: 'center',
          backgroundColor: globals.COLOR.headerColor,
        }}
      />
      <KeyboardAwareScrollView
        style={styles.screenContainerScrollView}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always">
        <View style={styles.screenDesignContainer}>
          <View style={styles.profilePic}>
            <TouchableOpacity
              onPress={() => {
                pickLogo();
              }}>
              {imageData.logo == null && photo == null && (
                <Image
                  source={images.newF}
                  style={styles.pro}
                  resizeMode="contain"
                />
              )}

              {imageData.logo != null && (
                <>
                  {imageData.selected == false && imageData.cropped == true && (
                    <View>
                      <Image
                        source={{ uri: imageData.logo.uri }}
                        style={styles.modallogo}
                      />
                      {/* <Image source={images.frame} style={styles.fram} /> */}
                    </View>
                  )}
                </>
              )}

              {imageData.logo == null && (
                <>
                  {photo != null && (
                    <View>
                      <FastImageLoader
                        resizeMode={'cover'}
                        photoURL={photo}
                        style={styles.modallogo}
                        loaderStyle={{}}
                      />
                      <Image source={images.NewC} style={styles.male} />
                    </View>
                  )}
                  {photo == null && (
                    <View>
                      {/* <Image source={images.main} style={styles.modallogo} /> */}
                      {/* <Image source={images.frame} style={styles.pro} /> */}
                    </View>
                  )}
                </>
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.modalimageWarpper}>
            {imageData.selected == true && imageData.cropped == false && (
              <CropView
                style={{
                  width: 200,
                  height: 200,
                  alignItems: 'center',
                  marginHorizontal: '15%',
                }}
                sourceUrl={imageData.logo.uri}
                setLoader={false}
                ref={ref => (cropViewRef = ref)}
                onImageCrop={res => {
                  setImageData({
                    logo: res,
                    cropped: true,
                    selected: false,
                    typeImage: imageData.typeImage,
                    nameImage: imageData.nameImage,
                  });
                }}
                keepAspectRatio
                aspectRatio={{ width: 1, height: 1 }}
              />
            )}

            {imageData.selected == true && imageData.cropped == false && (
              <TouchableOpacity
                style={{ alignSelf: 'center' }}
                onPress={() => cropLogo()}>
                <View style={styles.cus}>
                  <CropButton
                    buttonstyle={styles.custombuttonStyle}
                    buttonText={appTexts.EDIT.crop}
                  />
                </View>
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.editSection}>
            <View style={styles.boxView}>
              <View style={styles.name}>
                <Text style={styles.name}>{appTexts.EDIT.name}</Text>
              </View>
              <View style={styles.textInput}>
                <TextInput
                  style={styles.input}
                  value={name}
                  onChangeText={val => {
                    setName(val);
                  }}
                />
              </View>
            </View>
            <View style={styles.boxView}>
              <View style={styles.name}>
                <Text style={styles.name}>{appTexts.STRING.middlename}</Text>
              </View>
              <View style={styles.textInput}>
                <TextInput
                  style={styles.input}
                  value={middle_name}
                  onChangeText={val => {
                    setMiddlename(val);
                  }}
                />
              </View>
            </View>
            <View style={styles.boxView}>
              <View style={styles.name}>
                <Text style={styles.name}>{appTexts.STRING.lastname}</Text>
              </View>
              <View style={styles.textInput}>
                <TextInput
                  style={styles.input}
                  value={last_name}
                  onChangeText={val => {
                    setLastname(val);
                  }}
                />
              </View>
            </View>
            <View style={[styles.boxView, { backgroundColor: '#F5F5F5' }]}>
              <View style={styles.name}>
                <Text style={styles.name}>{appTexts.EDIT.phone}</Text>
              </View>
              <View style={styles.flagLine}>
                <View style={styles.flagImage}>
                  <Image
                    source={require('../../assets/images/ChooseLanguage/mask.png')}
                    style={styles.flagSaudi}
                  />
                </View>
                {!I18nManager.isRTL &&
                  <View style={styles.disable}>
                    <Text style={styles.disText}>+973</Text>
                  </View>}
                <View style={styles.txt}>
                  <TextInput
                    style={styles.txtin}
                    keyboardType={'number-pad'}
                    value={phone}
                    onChangeText={val => {
                      setPhone(val);
                    }}
                    editable={false}
                  />
                </View>
                {I18nManager.isRTL &&
                  <View style={styles.disable}>
                    <Text style={styles.disText}>+973</Text>
                  </View>}
              </View>
            </View>

            <View style={[styles.boxView, { backgroundColor: '#F5F5F5' }]}>
              <View style={styles.mail}>
                <Text style={styles.name}>{appTexts.EDIT.email}</Text>
              </View>
              <View style={styles.textInput}>
                <TextInput
                  style={styles.input}
                  value={email}
                  onChangeText={val => {
                    setEmail(val);
                  }}
                  editable={false}
                />
              </View>
            </View>

            <TouchableOpacity
              onPress={() => {
                onCalendarPress();
              }}>
              <View style={styles.boxViewBirth}>
                <View>
                  <View style={styles.name}>
                    <Text style={styles.name}>{appTexts.EDIT.birth}</Text>
                  </View>
                  <View style={styles.textInpu}>
                    <TextInput
                      style={styles.input}
                      value={bdate ? moment(bdate).format('DD-MM-YYYY') : ''}
                    />
                  </View>
                </View>
                <View style={styles.calView}>
                  <Image source={images.cal} style={styles.calImage} />
                </View>
              </View>
            </TouchableOpacity>

            <View style={styles.genderLine}>
              <TouchableOpacity
                onPress={() => {
                  setGender('Male');
                }}
                style={{ flexDirection: 'row' }}>
                <View style={styles.checkImage}>
                  <Image
                    source={gender == 'Male' ? images.checkBox : images.check}
                    style={styles.check}
                  />
                </View>
                <View style={styles.males}>
                  <Image source={images.male} style={styles.males} />
                </View>
                <View style={styles.mText}>
                  <Text style={styles.mText}>{appTexts.EDIT.male}</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setGender('Female');
                }}
                style={{ flexDirection: 'row' }}>
                <View style={styles.checkImage}>
                  <Image
                    source={gender == 'Female' ? images.checkBox : images.check}
                    style={styles.check}
                  />
                </View>
                <View style={styles.males}>
                  <Image source={images.female} style={styles.males} />
                </View>
                <View style={styles.mText}>
                  <Text style={styles.mText}>{appTexts.EDIT.female}</Text>
                </View>
              </TouchableOpacity>
            </View>

            <DateTimePicker
              selectedDate={bdate}
              setSelectedDate={setSelectedDate}
              mode={'date'}
              isShowDatePicker={isShowDatePicker}
              cancelClick={cancelClick}
              doneClick={doneClick}
              placeholder=" "
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
      <FloatButton
        isCategory={true}
        buttonText={appTexts.EDIT.save}
        onButtonClick={profileupdateClick}></FloatButton>
    </View>
  );
};

EditProfileView.propTypes = {
  birthDate: PropTypes.any,
  onCalendarPress: PropTypes.func,
  isShowDatePicker: PropTypes.bool,
  selectedDate: PropTypes.any,
  setSelectedDate: PropTypes.func,
};

export default EditProfileView;
