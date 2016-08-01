import React, { Component } from 'react';
import Actions from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
	View,
	Text,
	StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  social: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C0392B',
  },
});


class Social extends React.Component{

  render(){
  	return (
      <View style={styles.social}>
      	<Text>SOCIAL</Text>
      </View>
  	);
  }

}

export default Social;