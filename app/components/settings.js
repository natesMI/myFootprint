import React, { Component } from 'react';
import Actions from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
	View,
	Text,
	StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  settings: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1C40F',
  },
});


class Settings extends React.Component{

  render(){
  	return (
      <View style={styles.settings}>
      	<Text>SETTINGS</Text>
      </View>
  	);
  }

}

export default Settings;