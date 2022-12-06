import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfoBar from './components/InfoBar/InfoBar';
import Loader from './components/Loader/Loader';
import Login from './components/Login/Login';
import { hideAlert, setAuthToken } from './redux/actions';
import { getAuthThunk } from './redux/thunks';

function App() {
  const {
    loading,
    token,
    alert: { open, message },
  } = useSelector((state) => state.popify);

  const dispatch = useDispatch();

  const handleAlertClose = () => dispatch(hideAlert());

  const logout = () => {
    dispatch(setAuthToken(''));
    window.localStorage.removeItem('spotify_token');
  };

  React.useEffect(() => {
    const hash = window.location.hash;
    let authToken = window.localStorage.getItem('spotify_token');

    if (!authToken && hash) {
      authToken = hash
        .substring(1)
        .split('&')
        .find((elem) => elem.startsWith('access_token'))
        .split('=')[1];

      window.location.hash = '';
      window.localStorage.setItem('spotify_token', authToken);
      dispatch(getAuthThunk());
    }
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!token ? <Login /> : <p>token</p>}
      <InfoBar open={open} handleClose={handleAlertClose} message={message} />
    </>
  );
}

export default App;
