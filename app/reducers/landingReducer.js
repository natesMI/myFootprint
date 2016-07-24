import { AUTHORIZE_USER } from '../constants/actions';

export default function (state = {}, action) {
	switch (action.type) {
	case GET_USER_INFO:
		return {
			...state,
			id: action.payload.id,
			name: action.payload.name,
			email: action.payload.email,
			iceboxID: action.payload.iceboxID,
		};
	default:
		return state;
	}
}