import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { styles, images } from './styles';
import Dash from 'react-native-dash';
import globals from '../../lib/globals';

const DashSlider = props => {
  const {
    label1,
    label2,
    label3,
    label4,
    isSuccess,
    isVertical,
    sublabel1,
    stage,
    isCancelled = false,
    cancelLabel = '',
    cancelledDate = '',
  } = props;

  const renderVerticalStages = () => {
    return (
      <View style={styles.verticalSlider}>
        <View style={styles.vTick}>
          <Image
            source={stage >= 1 ? images.tick : images.round}
            style={styles.greenTick}
          />
          <View style={styles.txtView}>
            <Text style={styles.ordText1}>{label1}</Text>
          </View>
        </View>

        {/* <View style={styles.tick}>
          <Image
            source={stage == 1 ? images.radio : images.tick}
            style={styles.greenTick}
          />
          <Text style={stage == 1 ? styles.lightText : styles.text1}>
           {label2}
          </Text>
        </View> */}
        <View
          style={{
            flexDirection: 'column',
            marginLeft: '13%',
            top: 25,
            position: 'absolute',
          }}>
          <Text style={isVertical ? styles.ordsubText1 : styles.text1}>
            {sublabel1}
          </Text>
        </View>

        <View style={styles.verticalDash}>
          <Dash
            style={styles.vDash}
            dashLength={4}
            dashGap={4}
            dashColor={globals.COLOR.greyText}
            dashThickness={1.5}
          />
        </View>

        {isCancelled ? (
          <>
            <View style={styles.vTick}>
              <Image source={images.redRound} style={styles.greenTick} />
              <Text style={styles.ordText1}>{cancelLabel}</Text>
            </View>
            <View
              style={{ flexDirection: 'column', marginLeft: '10%', bottom: 5 }}>
              <Text style={isVertical ? styles.ordsubText1 : styles.text1}>
                {cancelledDate}
              </Text>
            </View>
          </>
        ) : (
            <>
              <View style={styles.vTick}>
                <Image
                  source={stage >= 2 ? images.tick : images.round}
                  style={styles.greenTick}
                />
                <Text style={stage >= 2 ? styles.ordText1 : styles.lightText}>
                  {label2}
                </Text>
              </View>

              <View style={styles.verticalDash}>
                <Dash
                  style={styles.vDash}
                  dashLength={4}
                  dashGap={5}
                  dashColor={globals.COLOR.greyText}
                  dashThickness={1.5}
                />
              </View>

              <View>
                <View style={styles.vTick}>
                  <Image
                    source={stage >= 3 ? images.tick : images.round}
                    style={styles.greenTick}
                  />
                  <Text style={stage >= 3 ? styles.ordText1 : styles.lightText}>
                    {label3}
                  </Text>
                </View>
                <View style={styles.verticalDash}>
                  <Dash
                    style={styles.vDash}
                    dashLength={4}
                    dashGap={5}
                    dashColor={globals.COLOR.greyText}
                    dashThickness={1.5}
                  />
                </View>
              </View>

              <View style={styles.vTick}>
                {isSuccess && (
                  <Image source={images.tick} style={styles.greenTick} />
                )}
                {!isSuccess && (
                  <Image
                    source={stage === 4 ? images.tick : images.round}
                    style={styles.greenTick}
                  />
                )}
                <Text style={stage >= 4 ? styles.ordText1 : styles.lightText}>
                  {label4}
                </Text>
              </View>
            </>
          )}
      </View>
    );
  };

  return (
    <>
      {!isVertical && (
        <View style={styles.slider}>
          <View style={styles.tick}>
            <Image source={images.tick} style={styles.greenTick} />
            <View style={styles.txtView}>
              <Text style={styles.text1}>{label1}</Text>
            </View>
          </View>

          <View style={styles.dashView}>
            <Dash
              style={styles.dash}
              dashLength={6}
              dashGap={4}
              dashColor={globals.COLOR.greyText}
              dashThickness={1.5}
            />
          </View>

          <View style={styles.tick}>
            <Image
              source={stage == 1 ? images.radio : images.tick}
              style={styles.greenTick}
            />
            <Text style={stage == 1 ? styles.lightText : styles.text1}>
              {label2}
            </Text>
          </View>

          <View style={styles.dashView}>
            <Dash
              style={styles.dash}
              dashLength={6}
              dashGap={4}
              dashColor={globals.COLOR.greyText}
              dashThickness={1.5}
            />
          </View>

          <View style={styles.tick}>
            <Image
              source={stage == 3 ? images.tick : images.radio}
              style={styles.greenTick}
            />
            <Text style={stage == 3 ? styles.text1 : styles.text}>
              {' '}
              {label3}
            </Text>
          </View>
        </View>
      )}

      {isVertical && renderVerticalStages()}
    </>
  );
};

DashSlider.propTypes = {};

export default DashSlider;
