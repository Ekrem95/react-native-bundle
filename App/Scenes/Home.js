import React from 'react';
import { View, Button } from 'react-native';

export default class Home extends React.Component {
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
        onPress={() => this.props.navigation.navigate('Nav')}
        title="Go to Navigation"
      />
    );
  }
}
