import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from 'react-native-router-flux';

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
    backgroundColor: '#27AE60',
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
