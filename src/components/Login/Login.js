import React from "react";
import cd from '../../assets/cd.gif';
import './Login.css';

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-page-content cd-image">
      <img src={cd} alt="CD" className="login-image"/>

      </div>
      <div className="login-page-content content-box">
      <h1 >Popify</h1>
      <p >How popular are the artists you groove to?</p>
      <a
        className="button"
        href={`${process.env.REACT_APP_AUTH_ENDPOINT}?client_id=${
          process.env.REACT_APP_CLIENT_ID
        }&redirect_uri=${
          process.env.NODE_ENV === "development"
            ? process.env.REACT_APP_LOCAL_REDIRECT_URI
            : process.env.REACT_APP_PROD_REDIRECT_URI
        }&response_type=${process.env.REACT_APP_RESPONSE_TYPE}&state=${(
          Math.random() + 1
        )
          .toString(36)
          .substring(7)}`}
      >
        Login to Spotify
      </a>
      </div>
    </div>
  );
};

export default Login;
