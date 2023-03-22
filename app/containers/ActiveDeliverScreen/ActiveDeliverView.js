import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, FlatList, RefreshControl, I18nManager } from 'react-native';
import globals from '../../lib/globals';
import { styles } from './styles';
import appTexts from '../../lib/appTexts';
import Header from '../../components/Header';
import ActiveDeliverCard from '../../components/ActiveDeliverCard';
import ActiveDeliverTab from '../../components/ActiveDeliverTab';
import Loader from '../../components/Loader';

const ActiveDeliverView = props => {
  const {
    orders,
    loadingMore,
    loadMoreOrders = () => { },
    onBackButtonClick,
    onRightButtonPress,
    tabIndex,
    onTabChange,
    onOrderPress,
    onRefreshList = () => { },
    loading,
  } = props;

  const renderLoadMoreLoader = () => {
    if (loadingMore) {
      return (
        <View
          style={{
            margin: 15,
          }}>
          <Loader />
        </View>
      );
    }
    return null;
  };

  const renderItem2 = ({ item, index }) => (
    <ActiveDeliverCard
      item={item}
      index={index}
      onOrderPress={() =>
        onOrderPress(item.order_id, item.order_status, item.sub_order_id)
      }
    />
  );

  return (
    <View style={styles.screenMain}>
      <Header
        navigation={props.navigation}
        iscenterLogoRequired={false}
        onRightButtonPress={onRightButtonPress}
        isLanguageButtonRequired={false}
        onBackButtonClick={onBackButtonClick}
        isBackButtonRequired={true}
        isLeftTitleRequired={true}
        title={appTexts.ACTIVE_DELIVER.myorders}
        customHeaderStyle={{
          height: globals.INTEGER.headerHeight,
          backgroundColor: globals.COLOR.headerColor,
        }}
      />

      <View style={styles.screenContainer}>
        <View style={styles.lineBorder} />
        <ActiveDeliverTab
          tabIndex={tabIndex}
          firstTabText={appTexts.ACTIVE_DELIVER.active}
          secondTabText={appTexts.ACTIVE_DELIVER.delivered}
          onTabChange={onTabChange}
        />

        <View style={styles.listContainer}>
          <FlatList
            style={styles.flatListStyle}
            data={orders}
            renderItem={renderItem2}
            contentContainerStyle={{ paddingBottom: '20%' }}
            keyExtractor={(itm, indx) => itm.ord_id + '-' + indx.toString()}
            ListEmptyComponent={() => (
              <View style={styles.noDataContainer}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontFamily: I18nManager.isRTL
                      ? globals.FONTS.notokufiArabic
                      : globals.FONTS.cairoRegular,
                  }}>
                  {appTexts.STRING.nodata}
                </Text>
              </View>
            )}
            refreshControl={
              <RefreshControl
                refreshing={loading}
                onRefresh={onRefreshList}
                title=""
                tintColor="red"
                colors={['red']}
              />
            }
            onEndReachedThreshold={0.9}
            onEndReached={info => loadMoreOrders()}
            ListFooterComponent={renderLoadMoreLoader}
          />
        </View>
      </View>
    </View>
  );
};

ActiveDeliverView.propTypes = {
  tabIndex: PropTypes.number,
};

export default ActiveDeliverView;
