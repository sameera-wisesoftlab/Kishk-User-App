import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TouchableOpacity, ToastAndroid} from 'react-native';
import globals from './globals';
import appTexts from './appTexts';
import SplashScreen from '../containers/SplashScreen';

import ChooseLanguageScreen from '../containers/ChooseLanguageScreen';

import AppIntrosliderloginScreen from '../containers/AppIntrosliderloginScreen';
import OtpScreen from '../containers/OtpScreen';
import LoginScreen from '../containers/LoginScreen';
import EmailLoginScreen from '../containers/EmailLoginScreen';
import ProfileScreen from '../containers/ProfileScreen';
import SignupScreen from '../containers/SignupScreen';
import HomeScreen from '../containers/HomeScreen';
import ProductDetailScreen from '../containers/ProductDetailScreen';
import DealsScreen from '../containers/DealsScreen';
import CategoryScreen from '../containers/CategoryScreen';
import SearchDetailScreen from '../containers/SearchDetailScreen';
import FilterScreen from '../containers/FilterScreen';
import CategoryFilterScreen from '../containers/CategoryFilterScreen';
import BrandsScreen from '../containers/BrandsScreen';
import CartScreen from '../containers/CartScreen';
import TopBrandsListScreen from '../containers/TopBrandsListScreen';
import AddressScreen from '../containers/AddressScreen';
import AddnewaddressScreen from '../containers/AddnewaddressScreen';
import EditaddressScreen from '../containers/EditaddressScreen';
import FeaturedCategoryScreen from '../containers/FeaturedCategoryScreen';

import EditProfileScreen from '../containers/EditProfileScreen';
import CheckoutScreen1 from '../containers/CheckoutScreen1';
import CheckoutScreen2 from '../containers/CheckoutScreen2';
import CheckoutScreen3 from '../containers/CheckoutScreen3';
import OrderDetailsScreen from '../containers/OrderDetailsScreen';
import ChatScreen from '../containers/ChatScreen';

import NotificationScreen from '../containers/NotificationScreen';
import FooterTabItem from '../components/FooterTabItem';
import SearchScreen from '../containers/SearchScreen';
import FaqScreen from '../containers/FaqScreen';
import PrivacyScreen from '../containers/PrivacyScreen';
import ActiveDeliverScreen from '../containers/ActiveDeliverScreen';
import WishlistScreen from '../containers/WishlistScreen';
import TermsScreen from '../containers/TermsScreen';
import AboutScreen from '../containers/AboutAs';

import OnlinePayment from '../containers/CheckoutScreen2/OnlinePayment';

//Splash stacks for screen navigation
const SplashStack = createStackNavigator();
const SplashStackNavigator = () => {
  return (
    <SplashStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <SplashStack.Screen name="SplashScreen" component={SplashScreen} />
    </SplashStack.Navigator>
  );
};

//Language stacks for screen navigation
const LanguageStack = createStackNavigator();
const LanguageStackNavigator = () => {
  return (
    <LanguageStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <LanguageStack.Screen
        name="ChooseLanguageScreen"
        component={ChooseLanguageScreen}
      />
    </LanguageStack.Navigator>
  );
};

//Login stacks for screen navigation
const LoginStack = createStackNavigator();
const LoginStackNavigator = () => {
  return (
    <LoginStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <LoginStack.Screen
        name="AppIntrosliderloginScreen"
        component={AppIntrosliderloginScreen}
      />
      <LoginStack.Screen name="LoginScreen" component={LoginScreen} />
      <LoginStack.Screen name="EmailLoginScreen" component={EmailLoginScreen} />
      <LoginStack.Screen name="OtpScreen" component={OtpScreen} />
      <LoginStack.Screen name="SignupScreen" component={SignupScreen} />
    </LoginStack.Navigator>
  );
};

// HomeTab stacks for screen navigation
const HomeStack = createStackNavigator();
const HomeTab = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

// CategoryTab stacks for screen navigation
const CategoryScreenStack = createStackNavigator();
const CategoryTab = () => {
  return (
    <CategoryScreenStack.Navigator screenOptions={{headerShown: false}}>
      <CategoryScreenStack.Screen
        name="CategoryScreen"
        component={CategoryScreen}
      />
    </CategoryScreenStack.Navigator>
  );
};
// CartTab stacks for screen navigation
const CartScreenStack = createStackNavigator();
const CartTab = () => {
  return (
    <CartScreenStack.Navigator screenOptions={{headerShown: false}}>
      <CartScreenStack.Screen
        name="CartScreenComponent"
        component={CartScreen}
      />
    </CartScreenStack.Navigator>
  );
};
const DealsScreenStack = createStackNavigator();
const DealsTab = () => {
  return (
    <DealsScreenStack.Navigator screenOptions={{headerShown: false}}>
      <DealsScreenStack.Screen name="DealsScreen" component={DealsScreen} />
    </DealsScreenStack.Navigator>
  );
};
// ProfileTab stacks for screen navigation
const ProfileScreenStack = createStackNavigator();
const ProfileTab = () => {
  return (
    <ProfileScreenStack.Navigator screenOptions={{headerShown: false}}>
      <ProfileScreenStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </ProfileScreenStack.Navigator>
  );
};

//Initialize bottom tab navigator
const DashboardTabRoutes = createBottomTabNavigator();

const TabNavigator = props => {
  const cartCount = props?.cartCount;
  return (
    <DashboardTabRoutes.Navigator
      tabBarOptions={{
        showLabel: false,

        style: {
          height: globals.INTEGER.footerTabBarHeight,
          borderWidth: 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderTopWidth: 0.5,
          borderRightWidth: 0.5,
          borderLeftWidth: 0.5,
          backgroundColor: 'white',
          borderColor: '#ccc',
          shadowColor: '#000000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: globals.INTEGER.opacityHigh,
          shadowRadius: 10,
          elevation: 1,
        },
      }}>
      <DashboardTabRoutes.Screen
        name="HomeScreen"
        component={HomeTab}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            // <TouchableOpacity onPress={backPress}>
            <FooterTabItem
              tabBarIndex={0}
              isFocused={focused}
              tabBarLabel={appTexts.FOOTER.home}
            />
            // </TouchableOpacity>
          ),
        }}
      />

      <DashboardTabRoutes.Screen
        name="CategoryScreen"
        component={CategoryTab}
        options={{
          tabBarLabel: 'Category',

          tabBarIcon: ({focused}) => (
            <FooterTabItem
              tabBarIndex={1}
              isFocused={focused}
              tabBarLabel={appTexts.FOOTER.category}
            />
          ),
        }}
      />
      <DashboardTabRoutes.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarVisible: false, //to hide the footerTab in cartScreen
          tabBarLabel: 'Cart',
          tabBarIcon: ({focused}) => (
            <FooterTabItem
              tabBarIndex={2}
              isFocused={focused}
              tabBarLabel={appTexts.FOOTER.cart}
              cartCount={cartCount}
            />
          ),
        }}
      />
      <DashboardTabRoutes.Screen
        name="DealsScreen"
        component={DealsTab}
        options={{
          tabBarLabel: 'Deals',
          tabBarIcon: ({focused}) => (
            <FooterTabItem
              tabBarIndex={3}
              isFocused={focused}
              tabBarLabel={appTexts.FOOTER.deals}
            />
          ),
        }}
      />
      <DashboardTabRoutes.Screen
        name="MyProfile"
        component={ProfileTab}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => (
            <FooterTabItem
              tabBarIndex={4}
              isFocused={focused}
              tabBarLabel={appTexts.FOOTER.profile}
            />
          ),
        }}
      />
    </DashboardTabRoutes.Navigator>
  );
};

//Main stacks for screen navigation
const MainScreenStack = createStackNavigator();
const MainScreenStackNavigator = props => {
  return (
    <MainScreenStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainScreenStack.Screen
        name="SplashStackNavigator"
        component={SplashStackNavigator}
      />
      <MainScreenStack.Screen
        name="LangStackNavigator"
        component={LanguageStackNavigator}
      />
      <MainScreenStack.Screen
        name="LoginStackNavigator"
        component={LoginStackNavigator}
      />

      {/* <LoginStack.Screen name="OtpScreen" component={OtpScreen} />
      <LoginStack.Screen name="LoginScreen" component={LoginScreen} />
      <LoginStack.Screen name="EmailLoginScreen" component={EmailLoginScreen} />
      <LoginStack.Screen name="SignupScreen" component={SignupScreen} /> */}

      <MainScreenStack.Screen
        name="TabNavigator"
        children={() => <TabNavigator cartCount={props?.cartCount || 0} />}
        options={{gestureEnabled: false}}
      />
      <MainScreenStack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
      />
      <MainScreenStack.Screen
        name="SearchDetailScreen"
        component={SearchDetailScreen}
      />
      <MainScreenStack.Screen name="FilterScreen" component={FilterScreen} />
      <MainScreenStack.Screen
        name="CategoryFilterScreen"
        component={CategoryFilterScreen}
      />
      {/* <MainScreenStack.Screen name="CartScreen" component={CartScreen} /> */}
      <MainScreenStack.Screen name="BrandsScreen" component={BrandsScreen} />
      <MainScreenStack.Screen
        name="TopBrandsListScreen"
        component={TopBrandsListScreen}
      />
      <MainScreenStack.Screen name="AddressScreen" component={AddressScreen} />
      <MainScreenStack.Screen
        name="AddnewaddressScreen"
        component={AddnewaddressScreen}
      />
      <MainScreenStack.Screen
        name="FeaturedCategoryScreen"
        component={FeaturedCategoryScreen}
      />
      <MainScreenStack.Screen name="SearchScreen" component={SearchScreen} />
      <MainScreenStack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
      />
      <MainScreenStack.Screen
        name="CheckoutScreen1"
        component={CheckoutScreen1}
      />
      <MainScreenStack.Screen
        name="CheckoutScreen2"
        component={CheckoutScreen2}
      />
      <MainScreenStack.Screen name="OnlinePayment" component={OnlinePayment} />
      <MainScreenStack.Screen
        name="CheckoutScreen3"
        component={CheckoutScreen3}
      />
      <MainScreenStack.Screen
        name="OrderDetailsScreen"
        component={OrderDetailsScreen}
      />
      <MainScreenStack.Screen name="FaqScreen" component={FaqScreen} />
      <MainScreenStack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
      />
      <MainScreenStack.Screen name="ChatScreen" component={ChatScreen} />
      <MainScreenStack.Screen name="PrivacyScreen" component={PrivacyScreen} />
      <MainScreenStack.Screen
        name="ActiveDeliverScreen"
        component={ActiveDeliverScreen}
      />
      <MainScreenStack.Screen
        name="EditaddressScreen"
        component={EditaddressScreen}
      />
      <MainScreenStack.Screen
        name="WishlistScreen"
        component={WishlistScreen}
      />
      <MainScreenStack.Screen name="TermsScreen" component={TermsScreen} />
      <MainScreenStack.Screen name="AboutScreen" component={AboutScreen} />
    </MainScreenStack.Navigator>
  );
};

export const HomeContainer = props => {
  return (
    <NavigationContainer>
      <MainScreenStackNavigator cartCount={props?.cartCount || 0} />
    </NavigationContainer>
  );
};
