import Immutable from 'seamless-immutable';

const ADD_NOTE = 'shedule/ADD_NOTE';

export function addNote(token) {
	return { type: ADD_NOTE, token };
}

const initialState = Immutable({
	notes: {}
});

export default function sheduleReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_NOTE:
			return state.merge({ });
		default:
			return state;
	}
}