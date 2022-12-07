import initialState from './initialState';
import actionTypes from './actionTypes';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TOKEN:
      window.localStorage.setItem('spotify_token', action.payload);
      return { ...state, token: action.payload };
    case actionTypes.SHOW_ALERT:
      return { ...state, alert: { open: true, message: action.payload } };
    case actionTypes.HIDE_ALERT:
      return { ...state, alert: { open: false, message: '' } };
    case actionTypes.SHOW_LOADER:
      return { ...state, loading: true };
    case actionTypes.HIDE_LOADER:
      return { ...state, loading: false };
    case actionTypes.SET_DATA:
      return {
        ...state,
        userData: { ...state.userData, data: action.payload },
      };
    case actionTypes.SET_AVERAGE_SCORE:
      return {
        ...state,
        userData: { ...state.userData, averageScore: action.payload },
      };
    case actionTypes.SET_MAX_POPULAR:
      return {
        ...state,
        userData: {
          ...state.userData,
          mostPopular: action.payload,
        },
      };
    case actionTypes.SET_MIN_POPULAR:
      return {
        ...state,
        userData: {
          ...state.userData,
          leastPopular: action.payload,
        },
      };
    case actionTypes.CLEAR_DATA:
      return {
        ...state,
        userData: {
          data: [],
          averageScore: 0,
          mostPopular: {},
          leastPopular: {},
        },
      };
    default:
      return state;
  }
};

export default reducer;
