import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
	View,
	Text,
	StyleSheet,
	Navigator
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
        <View>
          <Text>Landing is rendering</Text>
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

export default Landing;