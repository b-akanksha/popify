import actionTypes from './actionTypes';

export const setAuthToken = (payload) => ({
  type: actionTypes.SET_TOKEN,
  payload,
});

export const showAlert = (payload) => ({
  type: actionTypes.SHOW_ALERT,
  payload,
});

export const hideAlert = () => ({
  type: actionTypes.HIDE_ALERT,
});

export const showLoader = () => ({ type: actionTypes.SHOW_LOADER });

export const hideLoader = () => ({ type: actionTypes.HIDE_LOADER });

export const setData = (payload) => ({
  type: actionTypes.SET_DATA,
  payload,
});

export const setMostPopular = (payload) => ({
  type: actionTypes.SET_MAX_POPULAR,
  payload,
});

export const setLeastPopular = (payload) => ({
  type: actionTypes.SET_MIN_POPULAR,
  payload,
});

export const setAverageScore = (payload) => ({
  type: actionTypes.SET_AVERAGE_SCORE,
  payload,
});


export const clearData = () => ({ type: actionTypes.CLEAR_DATA });
