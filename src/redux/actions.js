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

export const setArtists = (payload) => ({
  type: actionTypes.SET_ARTISTS,
  payload,
});

export const setMostPopularArtists = (payload) => ({
  type: actionTypes.SET_MAX_POPULAR_ARTIST,
  payload,
});

export const setLeastPopularArtists = (payload) => ({
  type: actionTypes.SET_MIN_POPULAR_ARTIST,
  payload,
});

export const setAverageScore = (payload) => ({
  type: actionTypes.SET_AVERAGE_SCORE,
  payload,
});

export const clearData = () => ({ type: actionTypes.CLEAR_DATA });
