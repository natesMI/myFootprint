import React, { Component } from 'react';
import Actions from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import FootPrint from '../containers/footPrint';
import Discover from './discover';
import Social from './social';
import Settings from './settings';

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
  navbar: {
    flex: 1,
  },
});

class Shell extends React.Component{

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

      	<Icon.TabBarItemIOS
          iconName="paw"
          iconSize={22}
      	  selected={this.state.selectedTab === 'footprint'} 
      	  title="Footprint" 
      	  onPress={() => {this.setState({selectedTab: 'footprint'})}}
      	>
      	  <FootPrint/>
      	</Icon.TabBarItemIOS>

      	<Icon.TabBarItemIOS
          iconName="compass"
          iconSize={22}
      	  selected={this.state.selectedTab === 'discover'} 
      	  title="Discover" 
      	  onPress={() => {this.setState({selectedTab: 'discover'})}}
      	>
          <Discover/>
      	</Icon.TabBarItemIOS>

      	<Icon.TabBarItemIOS
          iconName="commenting"
          iconSize={22}
      	  selected={this.state.selectedTab === 'social'} 
      	  title="Social" 
      	  onPress={() => {this.setState({selectedTab: 'social'})}}
          badge={3}
      	>
      	  <Social/>
      	</Icon.TabBarItemIOS>

        <Icon.TabBarItemIOS
          iconName="gear"
          iconSize={22}
          selected={this.state.selectedTab === 'settings'}
          title="Settings"
          onPress={() => {this.setState({selectedTab: 'settings'})}}
        >
          <Settings/>
        </Icon.TabBarItemIOS>

	  	</TabBarIOS>
		);
	}
}

export default Shell;
