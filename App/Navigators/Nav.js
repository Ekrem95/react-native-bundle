import React from 'react';
import { StackNavigator } from 'react-navigation';

import CameraView from '../Scenes/CameraView';
import MapView from '../Scenes/Map';
import NavScreen from '../Scenes/NavScreen';

export default class Nav extends React.Component {
  render() {
    return (
      <ModalStack />
    );
  }
}

const navOptions = ({ navigation }) => ({
  title: navigation.state.routeName,
  headerStyle: {
    height: 40,
  },
  headerTitleStyle: {
    fontSize: 16,
  },
});

const ModalStack = StackNavigator({
  Home: {
    screen: NavScreen,
    navigationOptions: navOptions,
  },
  Map: {
    path: 'map/',
    screen: MapView,
    navigationOptions: navOptions,
  },
  Camera: {
    path: 'camera/',
    screen: CameraView,
    navigationOptions: navOptions,
  },
},
);
