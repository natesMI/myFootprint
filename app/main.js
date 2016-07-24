import React, { Component } from 'react';
import Footprint from './containers/footPrint';
import Landing from './containers/landing';

import {
	View,
	Text,
	StyleSheet,
	Navigator
} from 'react-native';

import {
	Scene,
	Reducer,
	Router,
} from 'react-native-router-flux';

import { Provider } from 'react-redux';
import configureStore from './state/configureStore';

const store = configureStore();

const styles = StyleSheet.create({
	container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#27AE60',
  },
});


class Main extends React.Component{
	render(){
		return (
        <Provider store={store}>
          <Router>
            <Scene key="root">
              <Scene key="landing" component={Landing} title="Landing" />
              <Scene key="footprint" component={Footprint} title="Footprint" />
            </Scene>
          </Router>
        </Provider>
			);
	}
}

export default Main;