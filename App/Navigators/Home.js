import React, { Component } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';

import HomeScreen from '../Scenes/Home';
import Nav from '../Navigators/Nav';

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
    backgroundColor: 'pink',
  },
});

const MyApp = TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Nav: {
    screen: Nav,
  },
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

export default class Home extends Component {
  render() {
    return (
      <MyApp />
    );
  }
}
