import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from 'react-native-router-flux';
import { Icon } from 'react-native-material-design';

import {
	View,
	Text,
	StyleSheet,
	Navigator,
	TouchableHighlight,
	TabBarIOS
} from 'react-native';

const styles = StyleSheet.create({
	container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#27AE60',
  },
  navbar: {
  	flex: 1,
  	backgroundColor: 'white',
  },
});

class Footprint extends React.Component{
	render(){
		return (
        <View style={styles.container}>
          <Text>Footprint is rendering also</Text>
          
				  <TouchableHighlight onPress={() => { Actions.landing() }}>
				    <Text>Landing</Text>
				  </TouchableHighlight>

				  <View style={styles.navbar}>
				  	<TabBarIOS 
				   		unselectedTintColor="grey"
		      		tintColor="black"
		        	barTintColor="white"
		        >
            	<TabBarIOS.Item title="Footprint">
            		<Icon name="language"/>
            	</TabBarIOS.Item>
            	<TabBarIOS.Item title="Dashboard">
            		<Icon name="gps-fixed"/>
            	</TabBarIOS.Item>
            	<TabBarIOS.Item title="Settings">
            		<Icon name="flag"/>
            	</TabBarIOS.Item>
				  	</TabBarIOS>
				  </View>
        </View>
			);
	}
}

const mapStateToProps = state => ({
	id: state.footprint.id,
	name: state.footprint.name,
	mapData: state.footprint.mapData,
});

export default connect(mapStateToProps)(Footprint);
