import React, { useState, useRef, useEffect } from 'react';
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
  ActivityIndicator,
  Platform,
} from 'react-native';
import globals from '../../lib/globals';
import appTexts from '../../lib/appTexts';
import { styles, images } from './styles';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import HeadingWithRightLink from '../../components/HeadingWithRightLink';
import FlatListing from '../../components/FlatListing';
import SmallProductCard from '../../components/SmallProductCard';

const SearchView = props => {
  const {
    onBackButtonClick,
    searchedText,
    onSearchClick,
    topCats = [],
    onElasticSearch,
    elasticSearchData,
    toProductDetails,
    isLoading,
  } = props;
  const [searchTxt, setSearchTxt] = useState('');

  const renderItem2 = ({ item, index }) => (
    <SmallProductCard
      item={item}
      isCatScreen={true}
      onItemClick={() => {
        // onSearchClick(searchTxt, item.id);
        onSearchClick('', item.id);
        // setSearchTxt('');
      }}
      isSearch={true}
    />
  );

  return (
    <View style={styles.screenMain}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={globals.COLOR.screenBackground}
      />
      <Header
        navigation={props.navigation}
        isBackButtonRequired={true}
        onBackButtonClick={onBackButtonClick}
        isLeftTitleRequired={true}
        title={appTexts.FILTER.search}
        customHeaderStyle={{
          height: globals.INTEGER.headerHeight,
          alignItems: 'center',
          backgroundColor: globals.COLOR.headerColor,
        }}
      />

      <View style={styles.screenDesignContainer}>
        <View style={styles.searchBox}>
          <TouchableOpacity
            onPress={() => {
              onSearchClick(searchTxt, null);
              // setSearchTxt('');
            }}>
            <View style={styles.searchIcon}>
              <Image source={images.searchIcon} style={styles.search} />
            </View>
          </TouchableOpacity>
          <View style={styles.textView}>
            <TextInput
              value={searchTxt}
              placeholder={appTexts.HEADER.search}
              style={styles.reverse}
              placeholderStyle={styles.textIn}
              onChangeText={val => {
                onElasticSearch(val);
                setSearchTxt(val);
              }}
              autoFocus
              returnKeyType={'search'}
              onSubmitEditing={() => {
                onSearchClick(searchTxt, null);
                // setSearchTxt('');
              }}
            />
          </View>
        </View>

        <View style={[styles.head, { marginTop: 0 }]}>
          <FlatList
            ListHeaderComponent={
              <View style={{ height: 20 }}>
                {isLoading && <ActivityIndicator color={'red'} />}
              </View>
            }
            keyExtractor={(item, index) => index.toString()}
            data={elasticSearchData?.product || []}
            extraData={elasticSearchData?.product || []}
            renderItem={({ item, index }) => {
              const language = I18nManager.isRTL;
              let termIndx = '';
              let actualCaseText = '';
              let t1 = '';
              let t2 = '';
              if (!language) {
                const splittedTxt = item.name
                  .toLowerCase()
                  .split(searchTxt.toLowerCase());
                termIndx = item.name
                  .toLowerCase()
                  .indexOf(searchTxt.toLowerCase());

                actualCaseText =
                  termIndx == -1
                    ? ''
                    : item.name.substring(
                      termIndx,
                      termIndx + searchTxt.length,
                    );

                t1 = searchTxt ? splittedTxt?.[0] || '' : '';
                t2 = searchTxt ? splittedTxt?.[1] || '' : '';
              } else {
                termIndx = '';
                actualCaseText = '';
                t1 = item.name;
                t2 = '';
              }

              return (
                <TouchableOpacity onPress={() => toProductDetails(item.id)}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                      {termIndx == 0 && (
                        <Text style={styles.searchTerm}>{actualCaseText}</Text>
                      )}
                      {t1 != '' && (
                        <Text style={styles.searchResultProduct}>{t1}</Text>
                      )}
                      {termIndx != 0 && (
                        <Text style={styles.searchTerm}>{actualCaseText}</Text>
                      )}
                      {t2 != '' && (
                        <Text style={styles.searchResultProduct}>{t2}</Text>
                      )}
                    </View>
                    <Image source={images.rightArrow} style={styles.rightArrow} />
                  </View>
                </TouchableOpacity>
              );
            }}
            ListFooterComponent={searchTxt &&
              <View>
                <View style={[styles.head, { marginLeft: 0 }]}>
                  <HeadingWithRightLink
                    nameLabel={appTexts.SEARCH.categories}
                  />
                </View>
                <View style={[styles.listContainer, Platform.OS == 'android' && { transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }] }]}>
                  <FlatListing
                    isLoading={isLoading}
                    listItem={elasticSearchData?.category || []}
                    renderItem={renderItem2}
                  />
                </View>
              </View>
            }
          />
        </View>
      </View>
    </View>
  );
};

SearchView.propTypes = {
  //onCartButtonPress: PropTypes.func,
};

export default SearchView;
