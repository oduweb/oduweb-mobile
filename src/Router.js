/*eslint no-unused-vars: 0*/
import React, {Component} from 'react';

import Login from './pages/Login/Login';
import Counter from './components/Counter';
import Home from './screens/Home';
import AuthLoading from './screens/AuthLoading';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const AppStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home!',
    },
  },
});

const AuthStack = createBottomTabNavigator(
  {
    Login: {
      screen: Login,
    },
  },
  {
    initialRouterName: 'Login',
  },
);

Login.navigationOptions = {
  tabBarVisible: false,
};

const SwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: {
      screen: AuthLoading,
    },
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);
export default createAppContainer(SwitchNavigator);
