import React from 'react';
import { View, StatusBar } from 'react-native';
import globals from '../../lib/globals';
import appTexts from '../../lib/appTexts';
import { styles } from './styles';
import Header from '../../components/Header';
import CategoryCard from '../../components/CategoryCard';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import FlatListing from '../../components/FlatListing';

const FeaturedCategoryView = props => {
  const {
    featCatList,
    onItemClick,
    onBackButtonClick,
    isLoading,
    onRefreshList,
    loadMoreItems,
    loadingMore,
  } = props;

  const renderItem = ({ item, index }) => (
    <CategoryCard item={item} itemClick={onItemClick} />
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
        title={appTexts.HOME.category}
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
        <View style={[styles.listView, { marginHorizontal: 8 }]}>
          <FlatListing
            renderItem={renderItem}
            listItem={featCatList}
            isLoading={isLoading}
            horizontal={false}
            refreshing={isLoading}
            onRefreshList={onRefreshList}
            loadMoreItems={loadMoreItems}
            loadingMore={loadingMore}
          />
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

// FeaturedCategoryView.propTypes = {
//onCartButtonPress: PropTypes.func,
// };

export default FeaturedCategoryView;
