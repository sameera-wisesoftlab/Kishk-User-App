import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, FlatList, Platform, RefreshControl } from 'react-native';
import { styles } from './styles';
import appTexts from '../../lib/appTexts';
import Loader from '../../components/Loader';

const FlatListing = props => {
  const {
    renderItem,
    listItem,
    isCategory,
    isLoading,
    isSearch,
    horizontal = true,
    refreshing = false,
    onRefreshList = () => { },
    loadMoreItems = () => { },
    loadingMore = false,
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
        {/* <Text style={styles.nodataf}>{appTexts.STRING.nodata}</Text> */}
      </View>
    );
  };
  return (
    <View style={styles.listContainer}>
      {isCategory ? (
        <FlatList
          contentContainerStyle={styles.content}
          style={styles.flatListStyle}
          data={listItem}
          extraData={listItem}
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          ListEmptyComponent={() => (
            <View
              style={{
                height: 50,
                paddingHorizontal: 40,
              }}>
              <Text style={styles.nodataf}>{!isLoading && listItem.length === 0 ? appTexts.STRING.nodata : null}</Text>
            </View>
          )}
        />
      ) : null}

      {isSearch ? (
        <FlatList
          contentContainerStyle={styles.content}
          style={styles.flatListStyle}
          data={listItem}
          extraData={listItem}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      ) : null}

      {/* {listItem.length === 0 ? (
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>{appTexts.STRING.nodata}</Text>
        </View>
      ) : ( */}

      <FlatList
        horizontal={horizontal}
        showsHorizontalScrollIndicator={false}
        style={styles.flatListStyle}
        data={listItem}
        extraData={listItem}
        numColumns={horizontal ? 0 : 2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        onEndReachedThreshold={0.5}
        onEndReached={info => loadMoreItems()}
        ListFooterComponent={renderListFooter}
        ListEmptyComponent={renderListEmptyContent}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefreshList}
            title=""
            tintColor="red"
            colors={['red']}
          />
        }
      />

      {/* )} */}
    </View>
  );
};
FlatListing.propTypes = {
  item: PropTypes.object,
};

export default FlatListing;
