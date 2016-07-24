import { combineReducers } from 'redux';
import landingReducer from './landingReducer';
import footprintReducer from './footprintReducer';

const rootReducer = combineReducers({
	landing: landingReducer,
	footprint: footprintReducer
});

export default rootReducer;