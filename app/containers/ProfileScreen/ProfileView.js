import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
  I18nManager,
} from 'react-native';
import globals from '../../lib/globals';
import { styles, images } from './styles';
import appTexts from '../../lib/appTexts';
import ProfileItem from './ProfileItem';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import RateorderModal from '../../components/RateorderModal';
import RateitemModal from '../../components/RateitemModal';
import PriceModal from '../../components/PriceModal';

import CancelModal from '../../components/CancelModal';
import SupportModal from '../../components/SupportModal';
import LogoutModal from '../../components/LogoutModal';
import SelectLanguageModal from '../../components/SelectLanguageModal';

import Header from '../../components/Header';
import Loader from '../../components/Loader';
import _ from 'lodash';
import Modal from 'react-native-modal';
import FastImageLoader from '../../components/FastImage/FastImage';

const ProfileView = props => {
  const {
    orderPress,
    addressPress,
    privacyPolicyPress,
    termsAndConditionPress,
    toggleHelpModal,
    toggleModal,
    toggleLogoutModal,
    openBoxModal,
    isBoxModalVisible,
    isModalVisible,
    isHelpModalVisible,
    openHelpModal,
    isLogoutModalVisible,
    isContactModalVisible,
    toggleContactModal,
    faqPress,
    openContactModal,
    openLanguageModal,
    openLogoutModal,
    toggleLanguageModal,
    isLanguageModalVisible,
    selectLanguage,
    onBackButtonClick,
    onRightButtonPress,
    languageSelected,
    openWishlistModal,
    closeModal,
    isWishlistModalVisible,
    isRateModalVisible,
    isPriceModalVisible,
    openrateModal,
    ratecloseModal,
    openpriceModal,
    pricecloseModal,
    onEditClick,
    openSelectLanguageModal,
    SelectLanguagecloseModal,
    isSelectLanguageModalVisible,
    onClosePress,
    privacyPress,
    isCancelModalVisible,
    cancelCloseModal,
    openCancelModal,
    isSupport,
    wishlistPress,
    termsPress,
    openSupportModal,
    supportCloseModal,
    isSupportModalVisible,
    onCancelClick,
    onLogoutClick,
    userdetails,
    isLoading,
    notification_badge,
    is_guest_logged_in,
    loginPage,
    aboutPress,
    token,
  } = props;

  const pro_pic = _.get(userdetails, 'data.photo', null);

  return (
    <View style={styles.screenMain}>
      <StatusBar
        barStyle="dark-content"
        translucent={false}
        hidden={false}
        backgroundColor={'#fff'}
      />
      <Header
        navigation={props.navigation}
        notification_badge={notification_badge}
        iscenterLogoRequired={false}
        isRightButtonRequired={is_guest_logged_in !== true}
        onRightButtonPress={onRightButtonPress}
        isProfileScreen={true}
        isLeftHeadingRequired={true}
        title={appTexts.PROFILE.Head}
        customHeaderStyle={{
          height: globals.INTEGER.headerHeight,
          backgroundColor: globals.COLOR.headerColor,
        }}
      //is_notification_active={is_notification_active}
      />

      {isLoading && <Loader />}

      <View style={styles.screenContainer}>
        <View style={styles.lineBorder} />
        <ScrollView>
          <View style={styles.formWrapper}>
            <View style={styles.contentWrapper}>
              {(token !== null || is_guest_logged_in === true) && (
                <View style={styles.profileWrapper}>
                  <View style={styles.editSection}>
                    <View style={styles.imageSection}>
                      {pro_pic == null && (
                        <Image
                          source={require('../../assets/images/Profile/users.png')}
                          style={styles.logo}
                        />
                      )}
                      {pro_pic != null && (
                        <FastImageLoader
                          resizeMode={'cover'}
                          photoURL={pro_pic}
                          style={styles.logo}
                          loaderStyle={{}}
                        />
                      )}
                    </View>
                    <View style={styles.detailsWrapper}>
                      <View
                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.fName}>
                          {is_guest_logged_in === true
                            ? appTexts.GUEST.guestName
                            : _.get(userdetails, 'data.cust_name', '')}
                        </Text>
                      </View>

                      <View style={styles.phoneLine}>
                        {is_guest_logged_in !== true && (
                          <View style={styles.phoneIcon}>
                            <Image
                              source={images.mailIcon}
                              style={styles.mailImage}
                            />
                          </View>
                        )}
                        <Text style={styles.Phone}>
                          {is_guest_logged_in !== true
                            ? ' ' + _.get(userdetails, 'data.email', '')
                            : appTexts.GUEST.guestlogin}
                        </Text>
                      </View>

                      {_.get(userdetails, 'data.phone', null) ? (
                        <View style={styles.emailLine}>
                          <View style={styles.emailIcon}>
                            <Image
                              source={images.phoneIcon}
                              style={styles.phoneImage}
                            />
                          </View>
                          <Text style={styles.Phone}>
                            {_.get(userdetails, 'data.country_code')}{' '}
                            {_.get(userdetails, 'data.phone', '')}
                          </Text>
                        </View>
                      ) : null}
                    </View>
                  </View>
                  <View style={styles.editButton}>
                    <TouchableOpacity
                      onPress={() => {
                        openBoxModal();
                      }}>
                      <Image source={images.action} style={styles.edit} />
                      {isBoxModalVisible ? (
                        <Image source={images.action} style={styles.edit} />
                      ) : null}
                    </TouchableOpacity>
                  </View>
                </View>
              )}

              <View style={styles.mainList}>
                <View style={styles.firstprofileWrapper}>
                  {is_guest_logged_in !== true && (
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={styles.accountName}>
                        {appTexts.PROFILE.MyAccount}
                      </Text>
                    </View>
                  )}

                  <View style={styles.insidecontentWrapper}>
                    {is_guest_logged_in !== true && (
                      <>
                        <View style={styles.marginFity}>
                          <ProfileItem
                            itemText={appTexts.PROFILE.MyOrders}
                            itemImage={images.orderIcon}
                            arrowImage={images.arrowIcon}
                            onItemClick={orderPress}
                          />
                        </View>
                        <View style={styles.borderStyle} />
                        <View style={styles.marginTen}>
                          <ProfileItem
                            itemText={appTexts.PROFILE.Mywishlist}
                            itemImage={images.wishlistIcon}
                            arrowImage={images.arrowIcon}
                            onItemClick={wishlistPress}
                          />
                        </View>
                        <View style={styles.borderStyle} />
                        <View style={styles.marginCust}>
                          <ProfileItem
                            itemText={appTexts.PROFILE.Address}
                            itemImage={images.addressIcon}
                            arrowImage={images.arrowIcon}
                            onItemClick={addressPress}
                          />
                        </View>
                      </>
                    )}

                    <View style={styles.firstprofileWrapper}>
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.accountName}>
                          {appTexts.PROFILE.Settings}
                        </Text>
                      </View>
                      <View style={styles.insidecontentWrapper}>
                        <View style={styles.marginFity}>
                          <ProfileItem
                            itemText={appTexts.PROFILE.Change}
                            itemImage={images.langIcon}
                            languageText={appTexts.STRING.arabic}
                            arrowImage={images.arrowIcon}
                            onItemClick={openSelectLanguageModal}
                          />
                          <View style={styles.borderStyle} />
                        </View>

                        {is_guest_logged_in !== true && (
                          <>
                            <View style={styles.marginFity}>
                              <ProfileItem
                                itemText={appTexts.PROFILE.Support}
                                itemImage={images.supportIcon}
                                arrowImage={images.arrowIcon}
                                onItemClick={openSupportModal}
                              />
                            </View>
                            <View style={styles.borderStyle} />
                          </>
                        )}

                        <View style={styles.marginFity}>
                          <ProfileItem
                            itemText={appTexts.PROFILE.FAQ}
                            itemImage={images.faqIcon}
                            arrowImage={images.arrowIcon}
                            onItemClick={faqPress}
                          />
                        </View>
                        <View style={styles.borderStyle} />
                        <View style={styles.marginFity}>
                          <ProfileItem
                            itemText={appTexts.PROFILE.Privacy}
                            itemImage={images.privacyIcon}
                            arrowImage={images.arrowIcon}
                            onItemClick={privacyPolicyPress}
                          />
                        </View>
                        <View style={styles.borderStyle} />
                        <View style={styles.marginFity}>
                          <ProfileItem
                            itemText={appTexts.PROFILE.Terms}
                            itemImage={images.termsIcon}
                            arrowImage={images.arrowIcon}
                            onItemClick={termsPress}
                          />
                        </View>
                        <View style={styles.borderStyle} />
                        <View style={styles.marginFity}>
                          <ProfileItem
                            itemText={appTexts.PROFILE.About}
                            itemImage={images.aboutIcon}
                            arrowImage={images.arrowIcon}
                            onItemClick={aboutPress}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <Modal
        style={styles.boxModalStyle}
        isVisible={isBoxModalVisible}
        animationIn="zoomInUp"
        backdropColor={'#d2d2d2'}
        animationOut="zoomOutRight"
        onSwipeComplete={openBoxModal}
        onBackdropPress={() => openBoxModal()}
        swipeDirection={[]}>
        <View style={styles.boxWrapperView}>
          {is_guest_logged_in !== true && (
            <>
              <TouchableOpacity
                onPress={() => {
                  onEditClick();
                }}>
                <View style={styles.logoutText}>
                  <Text style={styles.modalText}>{appTexts.EDIT.editPro}</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.line} />
              <TouchableOpacity
                onPress={() => {
                  openLogoutModal();
                }}>
                <View style={styles.logoutText}>
                  <Text style={styles.modalText}>{appTexts.EDIT.logout}</Text>
                </View>
              </TouchableOpacity>
            </>
          )}
          {is_guest_logged_in && (
            <TouchableOpacity
              onPress={() => {
                loginPage();
              }}>
              <View style={styles.logoutText}>
                <Text style={styles.modalText}>{appTexts.STRING.login}</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </Modal>

      <LogoutModal
        isLogoutModalVisible={isLogoutModalVisible}
        logoutButtonPress={openLogoutModal}
        onCancelClick={onCancelClick}
        onLogoutClick={onLogoutClick}
      />
      <RateorderModal
        isWishlistModalVisible={isWishlistModalVisible}
        closeModal={closeModal}
      />
      <RateitemModal
        isRateModalVisible={isRateModalVisible}
        ratecloseModal={ratecloseModal}
      />
      <PriceModal
        isPriceModalVisible={isPriceModalVisible}
        pricecloseModal={pricecloseModal}
        openpriceModal={openpriceModal}
      />
      <SelectLanguageModal
        isSelectLanguageModalVisible={isSelectLanguageModalVisible}
        SelectLanguagecloseModal={SelectLanguagecloseModal}
        selectLanguage={selectLanguage}
        languageSelected={languageSelected}
      />
      <CancelModal
        isCancelModalVisible={isCancelModalVisible}
        openCancelModal={openCancelModal}
        cancelCloseModal={cancelCloseModal}
        isSupport={true}
      />
      <SupportModal
        isSupportModalVisible={isSupportModalVisible}
        openSupportModal={openSupportModal}
        supportCloseModal={supportCloseModal}
      />
    </View>
  );
};

ProfileView.propTypes = {
  isModalVisible: PropTypes.bool,
  isHelpModalVisible: PropTypes.bool,
  isBoxModalVisible: PropTypes.bool,
  privacyPolicyPress: PropTypes.func,
  termsAndConditionPress: PropTypes.func,
  toggleHelpModal: PropTypes.func,
  orderPress: PropTypes.func,
  toggleModal: PropTypes.func,
  toggleLogoutModal: PropTypes.func,
  selectLanguage: PropTypes.func,
  goBackButton: PropTypes.func,
  addressPress: PropTypes.func,
  openWishlistModal: PropTypes.func,
  openrateModal: PropTypes.func,
  openpriceModal: PropTypes.func,
  isVisible: PropTypes.bool,
};

export default ProfileView;
