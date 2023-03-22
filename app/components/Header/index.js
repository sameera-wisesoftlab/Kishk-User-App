import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {
  StatusBar,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Switch,
  Platform,
} from 'react-native';
import globals from '../../lib/globals';
import {images, styles} from './styles';
import appTexts from '../../lib/appTexts';
import {useSelector} from 'react-redux';
import {ifIphoneX} from 'react-native-iphone-x-helper';

const Header = props => {
  const {
    searchTxtBefore,
    isBackButtonRequired,
    isRightButtonRequired,
    onRightWordClick,
    isProfileButtonRequired,
    headerTitle,
    onRightButtonPress,
    customHeaderStyle,
    onBackButtonClick,
    onProfileButtonPress,
    iscenterLogoRequired,
    isleftlogoRequired,
    isRightWordsRequired,
    SignTitle,
    isHeartRequired,
    isHeartRed = false,
    onHeartClick = () => {},
    wishExecuting,
    isSearchButtonRequired,
    isLogoRequired,
    isCategoryScreen,
    isLeftTitleRequired,
    title,
    isCloseImageRequired,
    isCartScreen,
    onLogoPress,
    onSearchClick,
    heading,
    subheading,
    isOrderDetails,
    isLeftHeadingRequired,
    isProfileScreen,
    isCategorySearch,
    isNotification,
    isInitialPage,
    changeNotificationSettings,
    istoggle,
    notification_badge,
    onFocus = () => {},
  } = props;

  let headerStyle = styles.headerContainer;
  if (customHeaderStyle) {
    headerStyle = customHeaderStyle;
  }

  const [isEnabled, setIsEnabled] = useState(false);
  const [searchText, setSearchText] = useState(searchTxtBefore || '');

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const {notificationCount} = useSelector(state => state.loginReducer);
  const onSearchChangeText = textVal => {
    setSearchText(textVal);
  };

  return (
    <View
      style={[
        {
          ...ifIphoneX({
            marginTop: 40,
            backgroundColor: '#fff',
          }),
        },
        Platform.OS == 'ios' && {marginTop: 40, backgroundColor: '#fff'},
        isOrderDetails ? styles.orderContainer : [headerStyle],
      ]}>
      <StatusBar
        // backgroundColor={globals.COLOR.headerColor}
        barStyle="dark-content"
        translucent={false}
        backgroundColor={'#fff'}
      />

      {isBackButtonRequired ? (
        <TouchableOpacity
          style={styles.leftIconContainer}
          onPress={() => {
            onBackButtonClick();
          }}>
          {isCartScreen ? (
            <Image
              resizeMode="contain"
              source={images.crossImage}
              style={styles.topHeader}
            />
          ) : (
            <Image
              resizeMode="contain"
              source={images.backImage}
              style={styles.topHeader}
            />
          )}
          {isLeftTitleRequired ? (
            <View style={styles.title}>
              <Text
                style={isInitialPage ? styles.leftHeadBold : styles.leftHead}>
                {title}
              </Text>
            </View>
          ) : null}
        </TouchableOpacity>
      ) : null}

      {isLeftHeadingRequired ? (
        <View style={styles.leftHeadPro}>
          <Text style={styles.head}>{title}</Text>
        </View>
      ) : null}

      {isCloseImageRequired ? (
        <TouchableOpacity
          style={styles.leftIconContainercartnew}
          onPress={() => {
            onBackButtonClick();
          }}>
          <Image
            resizeMode="contain"
            source={require('../../assets/images/products/Card.png')}
            style={styles.topHeaderClose}
          />
          {isLeftTitleRequired ? (
            <View style={styles.title}>
              <Text style={styles.leftHead}>{title}</Text>
            </View>
          ) : null}
        </TouchableOpacity>
      ) : null}

      {isOrderDetails ? (
        <View style={{alignSelf: 'flex-start', marginLeft: '14%'}}>
          <Text style={styles.head}>{heading}</Text>
          <Text style={styles.subHead}>{subheading}</Text>
        </View>
      ) : null}

      {isHeartRequired ? (
        <TouchableOpacity
          disabled={wishExecuting}
          onPress={onHeartClick}
          style={styles.loveView}>
          <View
            style={wishExecuting && {backgroundColor: 'rgba(255,255,255,0.5)'}}>
            <Image
              resizeMode="contain"
              source={isHeartRed ? images.loveRed : images.love}
              style={styles.love}
            />
          </View>
        </TouchableOpacity>
      ) : null}

      <View style={styles.headerTitlesContainer}>
        <TouchableOpacity onPress={onLogoPress}>
          {isLogoRequired ? (
            <Image
              source={images.logo}
              resizeMode="contain"
              style={styles.log}
            />
          ) : null}
        </TouchableOpacity>
      </View>

      {isRightWordsRequired ? (
        <TouchableOpacity
          style={styles.rightWordContainer}
          onPress={() => {
            onRightWordClick();
          }}>
          <Text style={styles.SignTitleText}>{SignTitle}</Text>
        </TouchableOpacity>
      ) : null}

      {isSearchButtonRequired ? (
        <TouchableOpacity
          onPress={() => onSearchClick(searchText)}
          style={isCategorySearch ? styles.searchCat : styles.searchBox}>
          {/* <View style={isCategorySearch ? styles.searchCat : styles.searchBox}> */}
          <View style={styles.searchIcon}>
            <Image source={images.searchIcon} style={styles.search} />
          </View>
          <View style={styles.textView}>
            <TextInput
              placeholder={appTexts.HEADER.search}
              style={styles.reverse}
              placeholderStyle={styles.textInPlace}
              onChangeText={onSearchChangeText}
              value={searchText}
              onFocus={onFocus}
            />
          </View>
          {/* </View> */}
        </TouchableOpacity>
      ) : null}

      {isCategoryScreen ? (
        <View style={styles.searchBoxCategory}>
          <View style={styles.searchIconCategory}>
            <Image source={images.searchIcon} style={styles.search} />
          </View>
          <View style={styles.textView}>
            <TextInput
              placeholder={appTexts.HEADER.search}
              style={styles.reverse}
              placeholderStyle={styles.textIn}
            />
          </View>
        </View>
      ) : null}

      {isleftlogoRequired ? (
        <TouchableOpacity
          onPress={() => {
            onLogoPress;
          }}>
          <View style={styles.leftIconContainer}>
            <Image
              source={images.logo}
              resizeMode="contain"
              style={styles.headerLogo}
            />
          </View>
        </TouchableOpacity>
      ) : null}
      <View style={styles.headerTitleContainer}>
        {iscenterLogoRequired ? (
          <Image
            source={images.logo}
            resizeMode="contain"
            style={styles.headerLogo}
          />
        ) : (
          <Text style={styles.headerTitleText}>{headerTitle}</Text>
        )}
      </View>
      <View style={styles.rightIconContainer}>
        {isProfileButtonRequired ? (
          <TouchableOpacity
            onPress={() => {
              onProfileButtonPress();
            }}>
            <Image source={images.profileIcon} style={styles.profileIcon} />
          </TouchableOpacity>
        ) : null}
        {isRightButtonRequired ? (
          <TouchableOpacity onPress={onRightButtonPress}>
            {isProfileScreen ? (
              <View style={{paddingVertical: 25}}>
                <Image source={images.bbell} style={styles.bellIcons} />

                {notificationCount > 0 && (
                  <View style={styles.notifyCount}>
                    <Text style={styles.notifyText}>{notificationCount}</Text>
                  </View>
                )}

                {/* {notification_badge === 'true' && (
                <Image source={images.bell} style={styles.bellIcon} />
                )} */}
              </View>
            ) : (
              <TouchableOpacity onPress={() => onHeartClick('share')}>
                <Image source={images.share} style={styles.rightIcon} />
              </TouchableOpacity>
            )}
          </TouchableOpacity>
        ) : null}
        {isNotification ? (
          <Switch
            trackColor={{false: 'lightgrey', true: 'lightgrey'}}
            thumbColor={istoggle ? globals.COLOR.red : 'grey'}
            ios_backgroundColor="white"
            onValueChange={changeNotificationSettings}
            value={istoggle}
            style={{
              transform: [{scaleX: 1}, {scaleY: 1}],
              right: 20,
            }}
          />
        ) : null}
      </View>
    </View>
  );
};

Header.propTypes = {
  isBackButtonRequired: PropTypes.bool,
  isLanguageButtonRequired: PropTypes.bool,
  isRightButtonRequired: PropTypes.bool,
  isRightWordsRequired: PropTypes.bool,
  isProfileButtonRequired: PropTypes.bool,
  isLogoRequired: PropTypes.bool,
  headerTitle: PropTypes.string,
  isFilterRequired: PropTypes.bool,
  filterTitle: PropTypes.string,
  onRightButtonPress: PropTypes.func,
  onFilterPress: PropTypes.func,
  customHeaderStyle: PropTypes.object,
  onBackButtonClick: PropTypes.func,
  onProfileButtonPress: PropTypes.func,
  iscenterLogoRequired: PropTypes.bool,
  isleftlogoRequired: PropTypes.bool,
  isSearchButtonRequired: PropTypes.bool,
  isOrderDetails: PropTypes.bool,
};

export default Header;
