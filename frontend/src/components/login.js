import React from 'react';
import { GoogleLogin } from 'react-google-login';

function Login() {
  const onSuccess = (res) => {
    console.log("Login Successful! Current User: ", res.profileObj);
  }

  const onFailure = (res) => {
    console.log("Login Failed! res: ", res);
  }

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={process.env.REACT_APP_CLIENT_ID}
        buttonText="Sign In"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
