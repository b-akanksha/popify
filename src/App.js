import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import InfoBar from "./components/InfoBar/InfoBar";
import Loader from "./components/Loader/Loader";
import { hideAlert } from "./redux/actions";

function App() {
  const { loading, alert: { open, message } } = useSelector(state => state.popify);

  const dispatch = useDispatch();

  const handleAlertClose = () => dispatch(hideAlert());

  return (
    <>
      {loading && <Loader />}
      <InfoBar open={open} handleClose={handleAlertClose} message={message} />
    </>
  );
}

export default App;
