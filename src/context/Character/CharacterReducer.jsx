import { GET_CHARACTERS, GET_PROFILE } from '../types';

export default (state, action) => {
	const { payload, type } = action;

	switch (type) {
		case GET_CHARACTERS:
			return {
				...state,
				characters: payload,
			};
		case GET_PROFILE:
			return {
				...state,
				selectCharacter: payload,
			};

		default:
			return state;
	}
};
