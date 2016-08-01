import React, { Component } from 'react';
import Landing from './containers/landing';
import Shell from './components/shell';
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
              <Scene key="landing" component={Landing} title="Footprint"/>
              <Scene key="shell" component={Shell} title="Footprint" rightTitle={'Logout'} onRight={()=>{console.log('Its working');}}/>
            </Scene>
          </Router>
        </Provider>
			);
	}
}

export default Main;