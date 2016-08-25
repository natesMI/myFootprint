import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';


import {
	View,
	Text,
	StyleSheet,
	Navigator,
	TouchableHighlight,
	Image,
} from 'react-native';

const styles = StyleSheet.create({
	container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498DB',
  },
  backgroundImage: {
  	width: 350,
  },
});

class Landing extends React.Component{
	render(){
		return (
        <View style={styles.container} >
          <Text>Landing is rendering</Text>
          <TouchableHighlight onPress={() => { Actions.shell() }}>
				    <Text>Click here to sign-in</Text>
				  </TouchableHighlight>
				  <Image 
				    style={styles.backgroundImage}
				    source={require('')} 
				  />
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


