import initialState from "./initialState";
import actionTypes from "./actionTypes";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_TOKEN:
            window.localStorage.setItem("token", action.payload);
            return { ...state, token: action.payload };
        default:
            return state;
    }
}

export default reducer;