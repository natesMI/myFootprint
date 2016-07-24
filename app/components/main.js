import React, { Component } from 'react';

import {
	View,
	Text,
	StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
	container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#27AE60',
  },
});


class Main extends React.Component{
	render(){
		return (
        <View style={styles.container} >
          <Text>Testing the router</Text>
        </View>
			);
	}
}

export default Main;