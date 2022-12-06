import initialState from './initialState';
import actionTypes from './actionTypes';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TOKEN:
      window.localStorage.setItem('token', action.payload);
      return { ...state, token: action.payload };
    case actionTypes.SHOW_ALERT:
      return { ...state, alert: { open: true, message: action.payload } };
    case actionTypes.HIDE_ALERT:
      return { ...state, alert: { open: false, message: '' } };
    case actionTypes.SHOW_LOADER:
      return { ...state, loading: true };
    case actionTypes.HIDE_LOADER:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default reducer;
