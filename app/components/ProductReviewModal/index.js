import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import Modal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';

import Review from '../../components/Review';
import Loader from '../../components/Loader';
import HeadingWithRightLink from '../../components/HeadingWithRightLink';

import {styles} from './styles';
import appTexts from '../../lib/appTexts';
import {getMoreReviews} from '../../actions';

const WishlistModal = props => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allLoaded, setAllLoaded] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [totalReviews, setTotalReviews] = useState(0);

  const [page, setPage] = useState(1);

  const {isVisible, closeModal, product_id} = props;
  const dispatch = useDispatch();

  //mounted
  useEffect(() => handleComponentMounted(), []);

  const handleComponentMounted = () => {
    setPage(1);
    getInitialData(1);
    setAllLoaded(false);
    setLoading(true);
  };

  const loadMoreReviews = () => {
    if (allLoaded || loadingMore || loading) {
      return;
    }

    let addPageNum = page + 1;
    setLoadingMore(true);
    setPage(addPageNum);
    getInitialData(addPageNum);
  };

  const getInitialData = (pageNum = page) => {
    dispatch(
      getMoreReviews(
        {page: pageNum, product_id},
        res => {
          if (pageNum > 1) {
            setReviews([...reviews, ...res.data.reviews.data]);
            if (res.data.reviews.current_page === res.data.reviews.last_page) {
              setAllLoaded(true);
            }
            setLoadingMore(false);
          } else {
            setReviews(res.data.reviews.data);
            setTotalReviews(res.data.reviews.total);
            if (res.data.reviews.current_page === res.data.reviews.last_page) {
              setAllLoaded(true);
            }
            setLoading(false);
          }
        },
        err => {
          setLoading(false);
          setLoadingMore(false);
        },
      ),
    );
  };

  const renderItem = ({item, index}) => <Review reviewData={item} />;
  const renderLoadMoreLoader = () => {
    if (loadingMore) {
      return (
        <View style={styles.loadMoreContainer}>
          <Loader />
        </View>
      );
    }
    return null;
  };
  const renderEmptyContent = () => {
    if (loading) {
      return null;
    }
    return (
      <View style={styles.noDataContainer}>
        <Text style={styles.nodataf}>{appTexts.STRING.nodata}</Text>
      </View>
    );
  };

  return (
    <Modal
      onRequestClose={() => null}
      style={styles.modalStyle}
      isVisible={isVisible}>
      <View style={styles.popupContainer}>
        {loading && <Loader />}

        <View style={styles.closeContainer}>
          <TouchableOpacity style={styles.popupClose} onPress={closeModal}>
            <Image
              source={require('../../assets/images/products/Card.png')}
              style={styles.pic}
            />
          </TouchableOpacity>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <HeadingWithRightLink
            nameLabel={`${appTexts.PRODUCT.review} (${totalReviews})`}
            isRightLinkRequired={false}
          />
        </View>

        <FlatList
          style={styles.flatListStyle}
          data={reviews}
          extraData={reviews}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          ListEmptyComponent={renderEmptyContent}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.9}
          onEndReached={info => loadMoreReviews()}
          ListFooterComponent={renderLoadMoreLoader}
        />
      </View>
    </Modal>
  );
};

export default WishlistModal;
