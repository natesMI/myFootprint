import React, { Component } from 'react';
import Actions from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
	View,
	Text,
	StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  discover: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#27AE60',
  },
});


class Discover extends React.Component{

  render(){
  	return (
      <View style={styles.discover}>
      	<Text>DISCOVER</Text>
      </View>
  	);
  }

}

export default Discover;