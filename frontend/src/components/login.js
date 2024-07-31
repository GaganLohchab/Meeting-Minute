import React from 'react';
import { GoogleLogin } from 'react-google-login';
const clientId = process.env.REACT_APP_CLIENT_ID;

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
        clientId={clientId}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        render={renderProps => (
          <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className="custom-button text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded text-lg flex justify-center items-center"
          >
            Sign In
          </button>
        )}
      />
    </div>
  );
}

export default Login;
