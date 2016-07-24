import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux'

import {
	View,
	Text,
	StyleSheet,
	Navigator,
	TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
	container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498DB',
  },
});

class Landing extends React.Component{
	render(){
		return (
        <View style={styles.container} >
          <Text>Landing is rendering</Text>
          <TouchableHighlight onPress={() => { Actions.footprint() }}>
				    <Text>Footprint</Text>
				  </TouchableHighlight>
        </View>
			);
	}
}

const mapStateToProps = state => ({
	username: state.landing.username,
	name: state.landing.name,
	email: state.landing.email,
});

export default connect(mapStateToProps)(Landing);


