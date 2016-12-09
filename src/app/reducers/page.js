import actionTypes from "./../actionTypes";

export default function(state = "home", action) {
	switch (action.type) {
		case actionTypes.SWITCH_PAGE:
			return action.page;
		default:
			return state;
	}
}