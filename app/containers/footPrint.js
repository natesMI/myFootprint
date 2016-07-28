import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from 'react-native-router-flux';

import {
	View,
	Text,
	StyleSheet,
	Navigator,
	TouchableHighlight,
	TabBarIOS,
  MapView
} from 'react-native';

const styles = StyleSheet.create({
	container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#27AE60',
  },
  navbar: {
  	flex: 1,
  },
});

class Footprint extends React.Component{

  constructor(props){
  	super(props);
  	this.state = {
  		selectedTab: 'footprint',
  	};
  }

	render(){
		return (
	  	<TabBarIOS 
      	selectedTab={this.state.selectedTab}
      >
      	<TabBarIOS.Item 
      	  selected={this.state.selectedTab === 'footprint'} 
      	  title="Footprint" 
      	  onPress={() => {this.setState({selectedTab: 'footprint'})}}
      	  systemIcon="bookmarks"
      	>
      	<View>
      	  <MapView
            style={{height: 500, margin: 30}}
            showsUserLocation={true}
            followUserLocation={true}
          />
      	</View>
      	</TabBarIOS.Item>
      	<TabBarIOS.Item
      	  selected={this.state.selectedTab === 'dashboard'} 
      	  title="Dashboard" 
      	  onPress={() => {this.setState({selectedTab: 'dashboard'})}}
      	  systemIcon="favorites"
      	>
      	<View>
      	  <Text>Alright its dashboard</Text>
      	</View>

      	</TabBarIOS.Item>
      	<TabBarIOS.Item
      	  selected={this.state.selectedTab === 'settings'} 
      	  title="Settings" 
      	  onPress={() => {this.setState({selectedTab: 'settings'})}}
      	  systemIcon="contacts"
      	>
      	<View>
      	  <Text>Alright its settings</Text>
      	</View>
      	</TabBarIOS.Item>
	  	</TabBarIOS>
			);
	}
}

const mapStateToProps = state => ({
	id: state.footprint.id,
	name: state.footprint.name,
	mapData: state.footprint.mapData,
});

export default connect(mapStateToProps)(Footprint);
