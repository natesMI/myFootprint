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
  discover: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#27AE60',
  },
  social: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C0392B',
  },
  settings: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2C3E50',
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
      	  <MapView
            style={{flex: 1}}
            maxDelta={1}
            showsUserLocation={true}
            followUserLocation={true}
            region={{latitude: 37.774088, longitude:  -122.437642, latitudeDelta: .2, longitudeDelta: .2}}
          />
      	</TabBarIOS.Item>
      	<TabBarIOS.Item
      	  selected={this.state.selectedTab === 'discover'} 
      	  title="Discover" 
      	  onPress={() => {this.setState({selectedTab: 'discover'})}}
      	  systemIcon="favorites"
      	>
      	<View style={styles.discover}>
      	  <Text>DISCOVER</Text>
      	</View>

      	</TabBarIOS.Item>
      	<TabBarIOS.Item
      	  selected={this.state.selectedTab === 'social'} 
      	  title="Social" 
      	  onPress={() => {this.setState({selectedTab: 'social'})}}
      	  systemIcon="contacts"
      	>
      	<View style={styles.social}>
      	  <Text>SOCIAL</Text>
      	</View>
      	</TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'settings'}
          title="Settings"
          onPress={() => {this.setState({selectedTab: 'settings'})}}
          systemIcon="recents"
        >
          <View style={styles.settings}>
            <Text>SETTINGS</Text>
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
