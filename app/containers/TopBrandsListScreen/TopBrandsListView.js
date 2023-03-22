import React from 'react';
import { View, Text, FlatList, StatusBar, RefreshControl } from 'react-native';
import globals from '../../lib/globals';
import appTexts from '../../lib/appTexts';
import { styles } from './styles';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import HeadingWithRightLink from '../../components/HeadingWithRightLink';
import FlatListing from '../../components/FlatListing';
import SmallProductCard from '../../components/SmallProductCard';
import Loader from '../../components/Loader';

const TopBrandsListView = props => {
  /* let listItem = [
		{
			id: 1,
			title: 'Adidas',
      img:require('../../assets/images/brands/img1.png'),
		},
		{
			id: 2,
			title: 'Puma',
      img:require('../../assets/images/brands/img2.png'),

		},
		{
			id: 3,
			title: 'Cool Master',
      image:require('../../assets/images/brands/img3.png'),
		},
		{
			id: 4,
			title: 'Play boy',
      image:require('../../assets/images/brands/img4.png'),

		},
		{
			id: 5,
			title: 'Luis Man',
      image:require('../../assets/images/brands/img5.png'),

		},
        {
        id: 6,
			title: 'Adidas',
      image:require('../../assets/images/brands/img1.png'),
        },
        {
            id: 7,
			title: 'Kingsway',
      image:require('../../assets/images/brands/img1.png'),
        },
        {
            id: 7,
			title: 'Wanderman',
      image:require('../../assets/images/brands/img2.png'),
        },
        {
            id: 7,
			title: 'Mobile Phones',
      image:require('../../assets/images/brands/img3.png'),
        },
        {
            id: 7,
			title: 'Mobile Phones',
      image:require('../../assets/images/brands/img4.png'),
        },
        {
            id: 7,
			title: 'Mobile Phones',
      image:require('../../assets/images/brands/img5.png'),
        },

    ]  */

  const {
    onLogoPress,
    topBrandList,
    onItemClick = () => { },
    isLoading,
    onRefreshList = () => { },
    loadMoreItems,
    loadingMore,
  } = props;

  const renderListFooter = () => {
    if (loadingMore) {
      return (
        <View style={styles.listLoader}>
          <Loader />
        </View>
      );
    }
    return null;
  };

  const renderListEmptyContent = () => {
    return (
      <View style={styles.noDataContainer}>
        <Text style={styles.nodataf}>{appTexts.STRING.nodata}</Text>
      </View>
    );
  };

  const renderItem = ({ item, index }) => (
    <SmallProductCard
      item={item}
      isTopBrands={true}
      isBrands={true}
      onItemClick={onItemClick}
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
        isLogoRequired={true}
        isSearchButtonRequired={true}
        onLogoPress={onLogoPress}
        customHeaderStyle={{
          height: globals.INTEGER.headerHeight,
          alignItems: 'center',
          backgroundColor: globals.COLOR.headerColor,
        }}
      />
      {/* <ScrollView
        style={styles.screenContainerScrollView}
        showsVerticalScrollIndicator={false}> */}
      <View style={styles.screenDesignContainer}>
        <View style={styles.head}>
          <HeadingWithRightLink nameLabel={appTexts.HOME.top} />
        </View>
        <View style={styles.listView}>
          <FlatList
            contentContainerStyle={{ alignItems: 'center' }}
            style={styles.flatListStyle}
            data={topBrandList}
            extraData={topBrandList}
            numColumns={4}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            refreshControl={
              <RefreshControl
                refreshing={isLoading}
                onRefresh={onRefreshList}
                title=""
                tintColor="red"
                colors={['red']}
              />
            }
            onEndReachedThreshold={0.5}
            onEndReached={info => loadMoreItems()}
            ListFooterComponent={renderListFooter}
            ListEmptyComponent={renderListEmptyContent}
          />
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

TopBrandsListView.propTypes = {
  //onCartButtonPress: PropTypes.func,
};

export default TopBrandsListView;
