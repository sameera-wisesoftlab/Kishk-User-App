import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StatusBar,
  I18nManager,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
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
import DashSlider from '../../components/DashSlider';
import PriceCard from '../../components/PriceCard';
import AddressdetailsCard from '../../components/AddressdetailsCard';

import CancelModal from '../../components/CancelModal';
import SupportModal from '../../components/SupportModal';
import OrderCard from '../../components/OrderCard';
import RateorderModal from '../../components/RateorderModal';
import RateitemModal from '../../components/RateitemModal';
import moment from 'moment';
import Loader from '../../components/Loader';

import Accordion from 'react-native-collapsible/Accordion';
import DetailModal from '../../components/DetailModal';

const currentLang = I18nManager.isRTL ? 'ar' : 'en';

const OrderDetailsView = props => {
  const {
    onBackButtonClick,
    changeTab,
    tabIndex,
    listData,
    onlineClick,
    isSupport,
    deliveredOrder,
    itemClick,
    orderData,
    onChatPress,
    openSupportModal,
    supportCloseModal,
    isSupportModalVisible,
    isLoading,
    reorder,
    openCancelModal,
    cancelCloseModal,
    isCancelModalVisible,
    reorderProduct,
    openrateOrderModal,
    closeratrorderModal,
    isRateOrderModalVisible,
    onSubmitOrderReview,
    orderReviewExecuting,
    onSubmitProductReview,
    prodReviewExecuting,
    isRateProdModalVisible,
    openRateProdModal,
    closeRateProdModal,
    subOrderIndex,
    setSubOrderIndex,
  } = props;

  const dialCall = number => {
    let phoneNumber = `tel:${number}`;
    try {
      Linking.openURL(phoneNumber);
    } catch (err) {
      console.log(err);
    }
  };

  const [isDetailModalVisible, setIsDetailModalVisibile] = useState(false);
  const [selectedAttrs, setSelectedAttrs] = useState([]);

  const openDetailModal = custom_attributes => {
    setSelectedAttrs(custom_attributes);
    setIsDetailModalVisibile(!isDetailModalVisible);
  };

  const detailCloseModal = () => {
    setIsDetailModalVisibile(!isDetailModalVisible);
  };

  let listItem =
    typeof orderData?.order_items !== 'undefined' ? orderData?.order_items : [];
  let order_received_date = orderData?.order_received_date || '';
  if (order_received_date) {
    order_received_date = moment(order_received_date, 'DD-MM-YYYY').format(
      'DD MMM YYYY',
    );
  }
  const order_id = orderData?.order_id || '';
  const billing_address = orderData?.billing_address;
  const delivery_address = orderData?.delivery_address;
  const order_status_id = orderData?.order_status_id || 1;
  const isCancelled = +order_status_id === 8; //order_status === 'Cancelled';
  let orderCancelDate = orderData?.cancelled_date;
  orderCancelDate = orderCancelDate
    ? moment(orderCancelDate, 'DD-MM-YYYY').format('DD MMM YYYY')
    : '';
  const showCancelSection = orderData?.cancel_button_show;
  const deliver_person_name = '';

  const sub_orders = orderData?.sub_orders || [];

  const getOrderStage = (order_status_id, sub_order_status) => {
    if (sub_order_status != null) {
      if (sub_order_status == 1) {
        return 3; /* Ready for delivery */
      } else if (sub_order_status == 2) {
        return 4; /* Delivered */
      } else if (sub_order_status == 3) {
        return 5;
      } else {
        return 1; /** Just for error handle */
      }
    }
    if (!order_status_id || order_status_id == 1) {
      return 1; /* Recieved */
    } else if (order_status_id > 1 && order_status_id <= 6) {
      return 2; /* Preperation */
    } else if (order_status_id == 7) {
      return 3; /* Ready for delivery */
    } else {
      return 4; /* Delivered */
    }
  };

  const getCancelReasonText = () => {
    if (!isCancelled) {
      return null;
    }
    const cancelData = orderData?.cancellation?.lang;
    if (cancelData) {
      return cancelData.find(i => i.language === currentLang).name;
    }
    return null;
  };

  const _renderSectionTitle = (section, index, isActive) => {
    return (
      <TouchableOpacity onPress={() => _updateSections([index])}>
        <View style={styles.content}>
          <TouchableOpacity
            onPress={() => _updateSections([index])}
            style={{ flexDirection: 'row' }}>
            <Text style={styles.headerText}>{'#' + section.sub_id}</Text>
            <Image
              style={{ width: 12, height: 12 }}
              source={
                isActive
                  ? require('../../assets/images/cart/uparrow.png')
                  : require('../../assets/images/cart/arrow.png')
              }
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  const _renderHeader = section => {
    return <View style={styles.header}></View>;
  };

  const _renderContent = section => {
    return (
      <FlatList
        ListHeaderComponent={listHeader(section)}
        data={section?.items || []}
        keyExtractor={(item, index) => index.toString()}
        renderItem={deliveredOrder ? renderItem1 : renderItem}
      />
    );
  };

  const _updateSections = activeSections => {
    let _active = [...subOrderIndex];
    const item = activeSections?.[0];
    if (_active.indexOf(item) == -1) {
      _active.push(item);
    } else {
      _active.splice(_active.indexOf(item), 1);
    }
    setSubOrderIndex(_active);
  };

  const renderItem = ({ item, index }) => (
    <OrderCard
      item={item}
      index={index}
      isDelivered={false}
      isWish={true}
      isOrderDetails={true}
      openDetailModal={openDetailModal}
    />
  );

  const renderItem1 = ({ item, index }) => (
    <OrderCard
      item={item}
      index={index}
      isWish={true}
      isDelivered={true}
      isOrderDetails={true}
      reorderProduct={reorderProduct}
      openRateProdModal={openRateProdModal}
      openDetailModal={openDetailModal}
    />
  );

  const renderItem2 = ({ item, index }) => (
    <AddressdetailsCard
      item={item}
      itemClick={() => { }}
      tabIndex={tabIndex}
      selectedDeliveryAddress={''}
      selectedBillingAddress={''}
      setSelectedDeliveryAddress={() => { }}
      setSelectedBillingAddress={() => { }}
      orderDetails={true}
    />
  );

  const listHeader = section => {
    const sub_order_status = section.sub_order_status;
    const _length = section?.items?.length || '';
    const delivery_driver = section?.delivery_driver?.name || '';

    let delivery_date = section?.delivery_date;
    if (delivery_date) {
      delivery_date = moment(section?.delivery_date, 'YYYY-MM-DD H:i:s').format(
        'DD MMM YYYY',
      );
    }
    const time_slot = section?.delivery_time_slot;
    const phone =
      (section.delivery_driver?.country_code || '') +
      (section.delivery_driver?.phone || '');

    const _stage = getOrderStage(order_status_id, sub_order_status);

    return (
      <>
        <View style={styles.head}>
          <HeadingWithRightLink nameLabel={appTexts.ORDER.order} />
        </View>
        <View style={styles.dashView}>
          <DashSlider
            isVertical={true}
            label1={appTexts.ORDER.receive}
            label2={appTexts.ORDER.under}
            label3={appTexts.ORDER.ready}
            label4={appTexts.ORDER.order_delivered}
            cancelLabel={
              _stage == 5 ? appTexts.PRODUCT.rejected : appTexts.ORDER.cancelled
            }
            sublabel1={order_received_date}
            stage={
              isCancelled ? 1 : getOrderStage(order_status_id, sub_order_status)
            }
            isCancelled={_stage == 5 ? true : isCancelled}
            cancelledDate={orderCancelDate}
          />
        </View>

        {isCancelled && (
          <View style={styles.cancelReasonView}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={[styles.expect, styles.cancelBoxTitle]}>
                {appTexts.CANCEL.cancelReason}
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.cancelReasonText}>
                {getCancelReasonText()}
              </Text>
            </View>
          </View>
        )}

        {order_status_id <= 7 && delivery_date !== null && (
          <View style={{ backgroundColor: 'white' }}>
            <View style={styles.expBox}>
              <View style={styles.textBox}>
                <View style={styles.exText}>
                  <Text style={styles.expect}>{appTexts.ORDER.expect}</Text>
                </View>
                <View>
                  <Text style={styles.feb}>
                    {delivery_date}
                    {time_slot ? ', ' : ''}
                    {time_slot}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}

        {delivery_driver != '' && (
          <View>
            <View style={{ height: hp('.8%'), backgroundColor: '#F8F8F8' }} />
            <View style={styles.callView}>
              <View style={styles.left}>
                <View style={styles.perView}>
                  <Text style={styles.person}>{appTexts.ORDER.person}</Text>
                </View>
                <Text style={styles.name}>{delivery_driver}</Text>
              </View>
              <View style={styles.right}>
                <View>
                  <Image source={images.call} style={styles.callImage} />
                </View>
                <View style={styles.callTx}>
                  <TouchableOpacity onPress={() => dialCall(phone)}>
                    <Text style={styles.callText}>{appTexts.ORDER.now}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        )}

        {deliveredOrder && (
          <View>
            <View style={{ height: hp('.8%'), backgroundColor: '#F8F8F8' }} />
            <View style={styles.callView}>
              <TouchableOpacity
                onPress={() => {
                  openrateOrderModal();
                }}>
                <View style={styles.left}>
                  <View style={styles.perView}>
                    <Image source={images.rate} style={styles.rateImage} />
                  </View>
                  <Text style={styles.rate}>{appTexts.ORDER.rate}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => reorder()}>
                <View style={styles.right}>
                  <View style={styles.callImage}>
                    <Image source={images.reorder} style={styles.callImage} />
                  </View>
                  <View style={styles.callTx}>
                    <Text style={styles.rate}>{appTexts.ORDER.reorder}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}

        <View style={styles.summary}>
          <HeadingWithRightLink
            nameLabel={appTexts.ORDER.summary.replace('{{count}}', _length)}
          />
        </View>
      </>
    );
  };

  const listFooter = () => {
    const hasAddress =
      (tabIndex == 0 && delivery_address) || (tabIndex == 1 && billing_address);
    const totals = { cartDetails: orderData };
    const payment_method = orderData?.payment_method;

    return (
      <View style={{ flex: 1, marginTop: 5 }}>
        <PriceCard isOrderDetails={true} isOrder={true} cartData={totals} />
        <View style={styles.background}>
          <View style={styles.expBoxJust}>
            <View style={styles.leftText}>
              <Text style={styles.method}>{appTexts.CHECKOUT.pay}</Text>
            </View>
            <View style={styles.rightText}>
              <View style={styles.cardImage}>
                <Image
                  resizeMode="contain"
                  source={images.card}
                  style={styles.cardImage}
                />
              </View>
              <View style={styles.onlineText}>
                <Text style={styles.onlineText}>
                  {' '}
                  {payment_method == 'cod'
                    ? appTexts.CHECKOUT.cod
                    : appTexts.CHECKOUT.onlineCard}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ height: hp('.5%'), backgroundColor: '#F8F8F8' }} />
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.myOrdersContainer}
            onPress={() => {
              changeTab(0);
            }}>
            <Text
              style={tabIndex === 0 ? styles.orderLabel : styles.inactiveLabel}>
              {appTexts.ADDRESS.Delivery}
            </Text>
            <View
              style={
                tabIndex === 0
                  ? styles.underLineStyle
                  : styles.transparentUnderLineStyle
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.myQuotationContainer}
            onPress={() => {
              changeTab(1);
            }}>
            <Text
              style={tabIndex === 1 ? styles.orderLabel : styles.inactiveLabel}>
              {appTexts.ADDRESS.Billing}
            </Text>
            <View
              style={[
                tabIndex === 1
                  ? styles.underLineStyle
                  : styles.transparentUnderLineStyle,
                styles.underLineWidth,
              ]}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          {hasAddress && (
            <FlatList
              style={styles.flatListStyle}
              data={tabIndex == 0 ? [delivery_address] : [billing_address]}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={renderItem2}
            />
          )}
        </View>
        <View style={{ height: hp('.5%'), backgroundColor: '#F8F8F8' }} />
        <View style={styles.bottomView}>
          <TouchableOpacity
            onPress={() => {
              openSupportModal();
            }}>
            <View style={styles.online}>
              <View style={styles.left}>
                <View style={styles.onImage}>
                  <Image source={images.phone} style={styles.onlineImage} />
                </View>
                <View style={styles.textOn}>
                  <Text style={styles.onSupportText}>
                    {appTexts.ORDER.support}
                  </Text>
                </View>
              </View>
              <View style={styles.downArrow}>
                <Image source={images.arrow} style={styles.arrow} />
              </View>
            </View>
            <SupportModal
              isSupportModalVisible={isSupportModalVisible}
              // onChatPress={onChatPress}
              //openSupportModal={openSupportModal}
              supportCloseModal={supportCloseModal}
            />
          </TouchableOpacity>

          {showCancelSection === 'yes' && !isCancelled && (
            <>
              <View style={styles.divide} />
              <TouchableOpacity onPress={openCancelModal}>
                <View style={styles.online}>
                  <View style={styles.left}>
                    <View style={styles.onImage}>
                      <Image
                        source={images.cancel}
                        style={styles.onlineImage}
                      />
                    </View>

                    <View style={styles.textOn}>
                      <Text style={styles.onText}>{appTexts.ORDER.cancel}</Text>
                    </View>
                  </View>
                  <View style={styles.downArrow}>
                    <Image source={images.arrow} style={styles.arrow} />
                  </View>
                </View>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={globals.COLOR.screenBackground}
      />
      <Header
        navigation={props.navigation}
        isBackButtonRequired={true}
        onBackButtonClick={onBackButtonClick}
        isLeftTitleRequired={false}
        isOrderDetails={true}
        heading={appTexts.ORDER.details}
        subheading={'#' + order_id}
        title={appTexts.FILTER.filter}
        customHeaderStyle={{
          height: globals.INTEGER.headerHeight,
          alignItems: 'center',
          backgroundColor: globals.COLOR.headerColor,
        }}
      />
      <ScrollView style={styles.screenMain}>
        {isLoading && <Loader />}

        <View style={{ flex: 1 }}>
          <View style={styles.screenDesignContainer}>
            <Accordion
              activeSections={subOrderIndex}
              sections={sub_orders}
              renderSectionTitle={_renderSectionTitle}
              renderHeader={_renderHeader}
              renderContent={_renderContent}
              onChange={_updateSections}
            />
          </View>
          {listFooter()}
        </View>

        {isCancelModalVisible && (
          <CancelModal
            isCancelModalVisible={isCancelModalVisible}
            cancelCloseModal={cancelCloseModal}
            orderId={orderData?.id}
          />
        )}

        <RateorderModal
          isRateOrderModalVisible={isRateOrderModalVisible}
          closeratrorderModal={closeratrorderModal}
          onSubmitOrderReview={onSubmitOrderReview}
          reviewExecuting={orderReviewExecuting}
          ratingSegments={orderData?.rating_segments || []}
        />

        <RateitemModal
          isRateModalVisible={isRateProdModalVisible}
          ratecloseModal={closeRateProdModal}
          onSubmitReview={onSubmitProductReview}
          prodReviewExecuting={prodReviewExecuting}
        />

        {isDetailModalVisible && (
          <DetailModal
            isDetailModalVisible={isDetailModalVisible}
            detailCloseModal={detailCloseModal}
            selectedAttrs={selectedAttrs}
          />
        )}
      </ScrollView>
    </View>
  );
};

OrderDetailsView.propTypes = {
  changeTab: PropTypes.func,
  tabIndex: PropTypes.number,
};

export default OrderDetailsView;
