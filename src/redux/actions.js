import actionTypes from "./actionTypes";

export const setAuthToken = (payload) => ({ type: actionTypes.SET_TOKEN, payload });

export const showAlert = (payload) => ({ type: actionTypes.SHOW_ALERT, payload });

export const hideAlert = () => ({
    type: actionTypes.HIDE_ALERT
});