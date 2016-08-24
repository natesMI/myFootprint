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
  social: {
    marginTop: 45,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E74C3C',
  },
  listEntry: {
    padding: 10,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    flex: 1,
    width: 400,
    height: 100,
  },
});

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
var partners = ["OPTION_ONE", "OPTION_TWO", "OPTION_THREE", "OPTION_FOUR", 
"OPTION_FIVE", "OPTION_SIX", "OPTION_SEVEN", "OPTION_EIGHT", "OPTION_NINE", "OPTION_TEN"];

class Social extends React.Component{

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
      <View style={styles.social}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={ this._renderRow }
        />
      </View>
    );
  }

}

export default Social;