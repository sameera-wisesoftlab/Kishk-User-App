import React from 'react';
import {StyleSheet} from 'react-native';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Rateitem = ({segment_id, rating, onRatingPress}) => {
  return (
    <>
      <Stars
        default={rating}
        count={5}
        half={false}
        fullStar={
          <Icon name={'star'} solid={true} style={[styles.myStarStyle]} />
        }
        emptyStar={
          <Icon
            name={'star-outline'}
            style={[styles.myStarStyle, styles.myEmptyStarStyle]}
          />
        }
        halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]} />}
        update={val => onRatingPress(val)}
      />
    </>
  );
};
const styles = StyleSheet.create({
  myStarStyle: {
    color: '#147910',
    backgroundColor: 'transparent',
    fontSize: 28,
    marginRight: 3,
    paddingTop: '1.5%',
  },
  myEmptyStarStyle: {
    color: '#ACACAC',
  },
});

export default Rateitem;
