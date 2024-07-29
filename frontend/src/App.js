import React, { useState, useEffect } from 'react';
import './App.css';
import Homepage from './components/Homepage'
import LoginButton from "./components/login"
import LogoutButton from "./components/logout"
import{ gapi } from 'gapi-script'

const clientId = process.env.REACT_APP_CLIENT_ID;

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      }).then(() => {
        console.log("GAPI client initialized");
      }).catch((error) => {
        console.error("Error initializing GAPI client", error);
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  return (
    <div className="App h-screen overflow-hidden">
      <LoginButton />
      <LogoutButton />
    </div>
  );
}

export default App;
