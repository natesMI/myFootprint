import React, { Component } from 'react';
import Footprint from './containers/footPrint';
import Landing from './containers/landing';
import { Provider } from 'react-redux';
import configureStore from './state/configureStore';

import {
	View,
	Text,
	TabBarIOS
} from 'react-native';

import {
	Scene,
	Reducer,
	Router
} from 'react-native-router-flux';


const store = configureStore();

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