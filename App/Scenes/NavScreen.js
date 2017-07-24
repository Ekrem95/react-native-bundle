import React from 'react';
import { View, Button } from 'react-native';

export default class NavScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Nav',
    tabBarIcon: ({ tintColor }) => (
      <View
        style={[styles.icon, { tintColor: tintColor }]}
      ></View>
    ),
  };

  render() {
    return (
      <View>
        <View>
          <Button
            onPress={() => this.props.navigation.navigate('Map')}
            title="Go to Map"
          />
        </View>
        <View>
          <Button
            onPress={() => this.props.navigation.navigate('Camera')}
            title="Go to Camera"
          />
        </View>
        <View>
          <Button
            onPress={() => this.props.navigation.navigate('Notifications')}
            title="Go to Notifications"
          />
        </View>
      </View>
    );
  }
}
