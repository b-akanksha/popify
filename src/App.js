import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import InfoBar from "./components/InfoBar/InfoBar";
import Loader from "./components/Loader/Loader";
import { hideAlert, setAuthToken } from "./redux/actions";
import { getAuthThunk } from "./redux/thunks";

function App() {
  const { loading, alert: { open, message } } = useSelector(state => state.popify);

  const dispatch = useDispatch();

  const handleAlertClose = () => dispatch(hideAlert());

  const [token, setToken] = React.useState("");

  const logout = () => {
    setToken("");
    dispatch(setAuthToken(""));
    window.localStorage.removeItem("token");
  };

  React.useEffect(() => {
    const hash = window.location.hash;
    let authToken = window.localStorage.getItem("token");

    if (!authToken && hash) {
      authToken = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", authToken);
      dispatch(getAuthThunk());
    }

    setAuthToken(authToken);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <InfoBar open={open} handleClose={handleAlertClose} message={message} />
    </>
  );
}

export default App;
