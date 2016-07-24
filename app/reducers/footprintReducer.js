import { CREATE_PRINT } from '../constants/actions';

const INITIAL_STATE = {
	id: null,
	name: null,
	mapData: [],
};

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
	case CREATE_PRINT:
		return {
			...state,
			id: action.payload.id,
			name: action.payload.name,
			mapData: [...state.mapData, ...action.payload.mapData],
		};
	default:
		return state;
	}
}