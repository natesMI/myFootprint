import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView from 'react-native-maps';

import {
	View,
	Text,
	StyleSheet
} from 'react-native';

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

*/
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
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
            <View style ={styles.container}>
                <MapView
                    style={styles.map}
                    region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                    >
                </MapView>
            </View>
        )
    }

}

const mapStateToProps = state => ({
	id: state.footprint.id,
	name: state.footprint.name,
	mapData: state.footprint.mapData,
});

export default connect(mapStateToProps)(FootPrint);

/*region={{latitude: 37.774088, longitude:  -122.437642, latitudeDelta: .2, longitudeDelta: .2}}*/

