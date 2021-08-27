import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Platform,
  DeviceEventEmitter,
} from 'react-native';

import QuickActions from 'react-native-quick-actions';

QuickActions.setShortcutItems([
  {
    type: 'contacts', // Required
    title: 'Listar contatos', // Optional, if empty, `type` will be used instead
    subtitle: 'Ver amigos',
    icon: 'logo', // Icons instructions below
    userInfo: {
      url: 'app://contacts', // Provide any custom data like deep linking URL
    },
  },
]);

DeviceEventEmitter.addListener('quickActionShortcut', data => {
  console.log(data);
});

QuickActions.popInitialAction().then(data => {
  console.log(data);
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
