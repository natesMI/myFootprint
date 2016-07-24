import React, { Component } from 'react';
import Main from './app/components/main';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

class myFootprint extends Component {
  render() {
    return (
      <NavigatorIOS
      style={styles.container}
        initialRoute={{
          component: Main,
          title: 'My Footprint',
        }}
        style={{flex: 1}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#27AE60',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('myFootprint', () => Main);
