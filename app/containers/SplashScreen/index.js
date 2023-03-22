import React, { Component } from "react";
import {
  View,
  Image,
  StatusBar,
  Animated,
  Easing,
  I18nManager,
  ImageBackground
} from "react-native";

import { styles, images } from "./styles";
import globals from "../../lib/globals";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import * as LoginActions from "../../actions/LoginActions";

class Splash extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ready: true,
      fadeValue: new Animated.Value(.1),
      SlideInBottom: new Animated.Value(0),
      SlideInBottoma: new Animated.Value(0),
      SlideInBottomb: new Animated.Value(0),
      checkSms: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      if (
        this.props.isLogged === true ||
        this.props.is_guest_logged_in == true
      ) {
        this.props.navigation.navigate('TabNavigator', { screen: 'HomeScreen' });
      } else if (this.props.is_intro_finished === true) {
        this.setState({ checkSms: true });
        this.props.smsStatusResponse();
      } else if (
        this.props.selectedLanguage != null &&
        this.props.selectedLanguage != ''
      ) {
        this.props.navigation.navigate('LoginStackNavigator', {
          screen: 'AppIntrosliderloginScreen',
        });
      } else {
        this.props.navigation.navigate('LangStackNavigator', {
          screen: 'ChooseLanguageScreen',
        });
      }
    }, 2500);
    this._start(10);
    setTimeout(() => {
      this._start(1);
    }, 5000);
    // this.animate_top();
    this.animate_bottom();
    this.animate_bottoma();
  }



  animate_bottom() {
    return Animated.parallel([
      Animated.timing(this.state.SlideInBottomb, {
        toValue: 1,
        duration: 1000,
        delay: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }
  animate_bottom() {
    return Animated.parallel([
      Animated.timing(this.state.SlideInBottom, {
        toValue: 1,
        duration: 1000,
        delay: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }

  animate_bottoma() {
    return Animated.parallel([
      Animated.timing(this.state.SlideInBottoma, {
        toValue: 2,
        duration: 1000,
        delay: 1700,
        useNativeDriver: true,
      }),
    ]).start();
  }

  _start = (_to) => {
    return Animated.parallel([
      Animated.timing(this.state.fadeValue, {
        toValue: _to,
        duration: 1000,
        delay: 800,
        useNativeDriver: true,
      }),
    ]).start();
  };


  componentDidUpdate() {
    if (this.props?.smsStatus?.data && this.state.checkSms == true) {
      this.setState({ checkSms: false });
      if (this.props.smsStatus.data?.sms == 'disable') {
        this.props.navigation.navigate('LoginStackNavigator', {
          screen: 'EmailLoginScreen',
        });
      } else {
        this.props.navigation.navigate('LoginStackNavigator', {
          screen: 'LoginScreen',
        });
      }
      this.props.resetSmsStatus();
    }
  }

  render() {
    let { fadeValue, SlideInBottom, SlideInBottoma, SlideInBottomb } = this.state;
    return (
      <View style={styles.screenMain}>

        <StatusBar
          barStyle="dark-content"
          hidden={true}
          backgroundColor={'transparent'}
          translucent={true}
        />
        <ImageBackground
          source={images.backgroundImage}

          style={styles.bgroundImage}>
          <View style={styles.imageViewOne}>
            <Animated.View
              style={{
                // transform: [
                //   {
                //     translateY: SlideInBottomb.interpolate({
                //       inputRange: [0, 1],
                //       outputRange: [-20, -120],
                //     }),
                //   },
                // ],
                opacity: fadeValue,
                // flex: 1,
                height: 244,
                width: 155,
                borderRadius: 12,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={images.kishkLogo}
                style={styles.imageoneDesign}
              ></Image>
            </Animated.View>
          </View>
          <View style={styles.design}>
            <Animated.View
              style={{
                transform: [
                  {
                    translateY: SlideInBottom.interpolate({
                      inputRange: [0, 1],
                      outputRange: [220, -20],
                    }),
                  },
                ],
                flex: 1,
                marginTop: hp("10%"),

                width: 250,
                height: 200,
                resizeMode: "contain",
                borderRadius: 12,
                justifyContent: "center",
              }}
            >
              <Image source={images.foodImage} style={styles.greenDesign}></Image>
            </Animated.View>
          </View>
          <View style={styles.imageContainer}>
            <Animated.View
              style={{
                transform: [
                  {
                    translateY: SlideInBottoma.interpolate({
                      inputRange: [0, 2],
                      outputRange: [260, -100],
                    }),
                  },
                ],
                flex: 0.1,
                position: "relative",
                width: 300,
                height: 200,
                borderRadius: 12,
                justifyContent: "center",
              }}
            >
              <Image source={images.teaImage} style={styles.logo} />
            </Animated.View>
          </View>


        </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    isLogged: state.loginReducer.isLogged,
    selectedLanguage: state.loginReducer.chosenLanguage,
    guestLogin: state.loginReducer.guestLogin,
    is_intro_finished: state.loginReducer.intro_finished,
    is_guest_logged_in: state.loginReducer.is_guest_logged_in,
    smsStatus: state?.loginReducer?.smsstatus || null,

  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      smsStatusResponse: LoginActions.getSmsStatus,
      resetSmsStatus: LoginActions.resetSmsStatus,
    },
    dispatch
  );
};

const splashWithRedux = connect(mapStateToProps, mapDispatchToProps)(Splash);

splashWithRedux.navigationOptions = ({ navigation }) => ({
  header: null,
});

export default splashWithRedux;
