import React from 'react';
import { GoogleLogout } from 'react-google-login';
const clientId = process.env.REACT_APP_CLIENT_ID;

function Logout() {
  const onSuccess = () => {
    console.log("Log out successful!");
  }

  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        onLogoutSuccess={onSuccess}
        render={renderProps => (
          <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className="custom-button text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded text-lg flex justify-center items-center"
          >
            Logout
          </button>
        )}
      />
    </div>
  );
}

export default Logout;
