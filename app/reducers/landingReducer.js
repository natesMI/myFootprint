import { AUTHORIZE_USER } from '../constants/actions';

const INITIAL_STATE = {
	username: null,
	name: null,
	email: null,
};

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
	case AUTHORIZE_USER:
		return {
			...state,
			username: action.payload.username,
			name: action.payload.name,
			email: action.payload.email,
		};
	default:
		return state;
	}
}