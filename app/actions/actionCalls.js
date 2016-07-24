import { AsyncStorage, AlertIOS } from 'react-native';
import * as TYPES from '../constants/actions';
import { Actions } from "react-native-router-flux";
import { reset } from 'redux-form';

const API_URL = 'http://localhost:8080';

export const getFootprint = () => (
	(dispatch) => {
		getToken().then(token => {
			fetch(`${API_URL}/api/footprint`, {
				method: 'GET',
				headers: {
					'Accept'      : 'application/json',
					'Content-Type': 'application/json'
				}
			})
			.then(rawResponse => rawResponse.json())
			.then(response => {
				dispatch({ type: TYPES.CREATE_PRINT, payload: response.footprint });
			})
			.catch(error => {
				console.log('error on getFootprint fetch of : ',error);
			});
		});
	}
);