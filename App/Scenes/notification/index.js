import React, { Component } from 'react';
import { View, Text, Picker, AppState, Platform } from 'react-native';
import PushController from './PushController';
import PushNotification from 'react-native-push-notification';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleAppStateChange = this.handleAppStateChange.bind(this);
    this.state = {
      seconds: 5,
    };
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange(appState) {
    if (appState === 'background') {
      let date = new Date(Date.now() + (this.state.seconds * 1000));

      if (Platform.OS === 'ios') {
        date = date.toISOString();
      }

      PushNotification.localNotificationSchedule({
        message: 'notification message',
        date,

      });
    }

    // console.log('****************************');
    // console.log(AppState);
  }

  render() {
    return (
      <View>
        <Text>Choose your notification time in seconds</Text>
        <Picker
          style={{ width: 100, }}
          selectedValue={this.state.seconds}
          onValueChange={seconds => this.setState({ seconds })}
          >
            <Picker.Item label="5" value={5} />
            <Picker.Item label="10" value={10} />
            <Picker.Item label="15" value={15} />
        </Picker>
        <PushController />
      </View>
    );
  }
}
