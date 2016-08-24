import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
	View,
	Text,
	StyleSheet,
	Navigator,
	TouchableHighlight,
	TabBarIOS,
  MapView,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

class FootPrint extends React.Component{

  constructor(props){
  	super(props);
  	this.state = {
  		name: null,
  	};
  }

	render(){
		return (
	  	  <MapView
            style={{flex: 1}}
            showsUserLocation={true}
            followUserLocation={true}
            region={{latitude: 37.774088, longitude:  -122.437642, latitudeDelta: .2, longitudeDelta: .2}}
          />
			);
	}
}

const mapStateToProps = state => ({
	id: state.footprint.id,
	name: state.footprint.name,
	mapData: state.footprint.mapData,
});

export default connect(mapStateToProps)(FootPrint);
