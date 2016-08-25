import React, { Component } from 'react';
import Actions from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

import {
  MKSwitch,
  MKRadioButton,
  MKCheckbox,
  MKColor,
  getTheme,
  setTheme,
} from 'react-native-material-kit';

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
        <Text>Share location?</Text>
        <MKSwitch 
          trackSize={30}
          trackLength={52}
          onColor="rgba(255,152,0,.3)"
          thumbOnColor={MKColor.Orange}
          rippleColor="rgba(255,152,0,.2)"
          onPress={() => console.log('orange switch pressed')}
          onCheckedChange={(e) => console.log('orange switch checked', e)}
        />
      </View>
  	);
  }

}

export default Settings;