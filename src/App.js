import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomePage from './components/HomePage/HomePage';
import InfoBar from './components/InfoBar/InfoBar';
import Loader from './components/Loader/Loader';
import Login from './components/Login/Login';
import { hideAlert, setAuthToken } from './redux/actions';
import { getAuthThunk } from './redux/thunks';
import { getTokenFromUrl } from './utils/functions';

function App() {
  const {
    loading,
    alert: { open, message },
  } = useSelector((state) => state.popify);

  const dispatch = useDispatch();

  const handleAlertClose = () => dispatch(hideAlert());

  const [spotifytoken, setSpotifyToken] = React.useState("");

  const logout = () => {
    setSpotifyToken('');
    dispatch(setAuthToken(''));
    window.localStorage.removeItem('spotify_token');
  };

  React.useEffect(() => {
    console.log('token', getTokenFromUrl());
    const spotToken = getTokenFromUrl()['access_token'];

    window.location.hash = '';

    if(spotToken) {
      window.localStorage.setItem('spotify_token', spotToken);
      setSpotifyToken(spotToken);
      dispatch(setAuthToken(spotToken));
    }
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!spotifytoken ? <Login /> : <HomePage handleLogout={logout}/>}
      <InfoBar open={open} handleClose={handleAlertClose} message={message} />
    </>
  );
}

export default App;
