import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, TouchableOpacity, I18nManager } from 'react-native';
import { styles, images } from './styles';
import appTexts from '../../lib/appTexts';

const AddressdetailsCard = props => {
  const {
    item,
    itemClick,
    tabIndex,
    selectedDeliveryAddress,
    selectedBillingAddress,
    orderDetails,
    editAddress = null,
    count,
  } = props;

  const { id, address_flag, is_default } = item;
  const selected = item.selected == 'yes';
  const [processed, setProcessed] = useState([]);

  if (
    selectedDeliveryAddress === 'no' &&
    (is_default == 'Y' || count == 1) &&
    address_flag == 'D' &&
    processed.indexOf(id) == -1
  ) {
    itemClick(id, 'D');
    let allProcessed = processed;
    allProcessed.push(id);
    setProcessed(allProcessed);
  }
  console.log(
    selectedBillingAddress,
    is_default,
    count,
    address_flag,
    processed,
  );
  if (
    selectedBillingAddress === 'no' &&
    (is_default == 'Y' || count == 1) &&
    address_flag == 'B' &&
    processed.indexOf(id) == -1
  ) {
    itemClick(id, 'B');
    let allProcessed = processed;
    allProcessed.push(id);
    setProcessed(allProcessed);
  }

  let apartment_name = item.apartment_name;
  if (typeof item.apartment_name == 'undefined') {
    apartment_name = item.address;
  }
  let land_mark = item.land_mark;
  if (typeof item.land_mark == 'undefined') {
    land_mark = item.city + ', ' + item.country;
  }
  let postal_code = item.postal_code;
  if (typeof postal_code == 'undefined') {
    postal_code = item.zip;
  }
  let city = item.city;
  if (typeof item.city == 'undefined') {
    city = item.city;
  }

  return (
    <View>
      <TouchableOpacity
        style={styles.fullWidthRowContainer}
        onPress={() => {
          itemClick(id, address_flag);
        }}>
        <View style={!selected ? styles.rowContainer : styles.rowContainerHome}>
          <View style={styles.addressLine}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {!selected && (
                <Image
                  source={
                    item.address_type == 'office'
                      ? images.office
                      : item.address_type == 'home'
                        ? images.homeIcon
                        : item.address_type == 'others'
                          ? images.otherIcon
                          : null
                  }
                  style={styles.resIcon}
                />
              )}
              {selected && (
                // <Image
                //   source={
                //     item.address_type == 'office'
                //       ? images.officegIcon
                //       : images.homegIcon
                //   }
                //   style={styles.resIcon}
                // />
                <Image
                  source={
                    item.address_type == 'office'
                      ? images.officegIcon
                      : item.address_type == 'home'
                        ? images.homegIcon
                        : item.address_type == 'others'
                          ? images.othergIcon
                          : null
                  }
                  style={styles.resIcon}
                />
              )}

              {!selected && (
                <Text style={styles.textOne}>
                  {/* {item.address_type === 'office' ? 'Office' : 'Home'} */}
                  {item.address_type === 'home' ? appTexts.STRING.home : null}
                  {item.address_type === 'office' ? appTexts.STRING.office : null}
                  {item.address_type === 'others' ? appTexts.STRING.others : null}
                </Text>
              )}
              {selected && (
                <Text style={styles.textOneHome}>
                  {/* {item.address_type === 'office' ? 'Office' : 'Home'} */}
                  {item.address_type === 'home' ? appTexts.STRING.home : null}
                  {item.address_type === 'office' ? appTexts.STRING.office : null}
                  {item.address_type === 'others' ? appTexts.STRING.others : null}
                </Text>
              )}

              {item.is_default === 'Y' && (
                <View style={styles.defaultWrapper}>
                  <Text style={styles.textTwo}>{appTexts.EDIT.default}</Text>
                </View>
              )}
            </View>

            {!orderDetails && (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                {editAddress !== null && (
                  <TouchableOpacity onPress={() => editAddress(id)}>
                    <Image
                      source={require('../../assets/images/addressCard/edit.png')}
                      style={[styles.locationIcon, { marginRight: 10 }]}
                    />
                  </TouchableOpacity>
                )}
                {!selected && <View style={styles.grayColor} />}
                {selected && (
                  <Image source={images.greenTick} style={styles.greenIcon} />
                )}
              </View>
            )}
          </View>
          <View style={{ flexDirection: 'row', marginTop: 2 }}>
            <Text style={styles.nameText}>{item.name}</Text>
          </View>
          <View style={styles.personDetails}>
            {/* <Text style={styles.nameText}>{item.name}</Text> */}
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.nameText}>{item.phone}</Text>
            </View>
          </View>
          <View style={styles.addresswrapper}>
            {/* <Text style={styles.addressText}>{apartment_name}</Text>
            <Text style={styles.addressText}>{land_mark}</Text> */}
            <Text style={styles.addressText}>
              {apartment_name}
              {' , '}
              {item.street_name || ''}
              {item.street_name ? ' , ' : ''}
              {postal_code}
              {' , '}
              {city || ''}
              {city ? ' , ' : ''}
              {land_mark}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

AddressdetailsCard.propTypes = {
  item: PropTypes.object,
  tabIndex: PropTypes.number,
};

export default AddressdetailsCard;
