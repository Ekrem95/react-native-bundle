import React, { Component } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';

import CameraView from '../Scenes/CameraView';
import Map from '../Scenes/Map';

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <View
        style={[styles.icon, { tintColor: tintColor }]}
      ></View>
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Notifications',
    tabBarIcon: ({ tintColor }) => (
      <View
        style={[styles.icon, { tintColor: tintColor }]}
      ></View>
    ),
  };

  render() {
    return (
      <View>
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
      <Button
        onPress={() => this.props.navigation.navigate('Map')}
        title="Go to Map"
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
    backgroundColor: 'pink',
  },
});

const MyApp = TabNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
  Map: {
    screen: Map,
  },
  Camera: {
    screen: CameraView,
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
