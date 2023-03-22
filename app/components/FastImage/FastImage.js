import { Animated, Image as Img, View } from 'react-native';

import FastImage from 'react-native-fast-image';
import React from 'react';

export default class FastImageLoader extends React.Component {

  constructor(props) {
    super(props);
    const width = props.style.width;
    const height = props.style.height;
    this.state = {
      width: width,
      height: height,
      loaded: false,
      thumbnailAnimated: new Animated.Value(0),
      imageAnimated: new Animated.Value(0)
    };
  }

  onImageLoad = () => {
    Animated.timing(this.state.imageAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  render() {
    const photoURL = this.props.photoURL;
    const loaderStyle = this.props.loaderStyle;
    const style = this.props.style;
    const resizeMode = this.props.resizeMode;
    const extraStyle = typeof this.props.extraStyle != 'undefined' ? this.props.extraStyle : {};

    return (
      <View
        style={[{ height: this.state.height, width: this.state.width }, extraStyle]}
      >
        <Animated.View
          style={{
            width: '100%',
            height: '100%',
            // opacity: this.state.imageAnimated,
          }}>
          <FastImage
            source={{ uri: photoURL }}
            resizeMode={resizeMode}
            style={[{ width: '100%', height: '100%',tintColor:'purple' }, style]}
            onLoad={() => {
              this.onImageLoad();
              this.setState({
                loaded: true,
              });
            }}
          />
        </Animated.View>

        {this.state.loaded == false && (
          <View
            style={[
              {
                position: 'absolute',
              },
              {
                height: '100%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              },
            ]}>
                
            <Img
            source={require('./Loader/spinner-thick.gif')}
            style={[
                {
                width: '80%',
                height: '80%',
                resizeMode: 'contain',
                },
                loaderStyle,
            ]}
            />
            
          </View>
        )}
      </View>
    );
  }
}
