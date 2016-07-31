import { combineReducers } from 'redux';
import landingReducer from './landingReducer';
import footprintReducer from './footprintReducer';

/*
const rootReducer = combineReducers({
	landing: landingReducer,
	footprint: footprintReducer
});

export default rootReducer;
*/

const appReducer = combineReducers({
  landing: landingReducer,
  footprint: footprintReducer
})

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer;
