import React, { Component } from 'react';
import Actions from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
	View,
	Text,
	StyleSheet,
  ListView,
  TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
  discover: {
    marginTop: 45,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#27AE60',
  },
  listEntry: {
    padding: 10,
  },
});

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
var partners = ["OPTION_ONE", "OPTION_TWO", "OPTION_THREE", "OPTION_FOUR", 
"OPTION_FIVE", "OPTION_SIX", "OPTION_SEVEN", "OPTION_EIGHT", "OPTION_NINE", "OPTION_TEN"];

class Discover extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      dataSource: ds.cloneWithRows(partners),
    };
  }

  _renderRow(rowData){
    return (
        <TouchableHighlight
          style={styles.listEntry}
        >
          <Text>{rowData}</Text>
        </TouchableHighlight>
      );
  }

  render(){
  	return (
      <View style={styles.discover}>
      	<ListView
          dataSource={this.state.dataSource}
          renderRow={ this._renderRow }
        />
      </View>
  	);
  }

}

export default Discover;