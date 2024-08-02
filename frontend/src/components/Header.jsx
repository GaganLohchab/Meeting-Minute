import React, { useState, useEffect } from 'react';
import LoginButton from "./login";
import Avatar from "./Avatar";
import { gapi } from 'gapi-script';

const clientId = process.env.REACT_APP_CLIENT_ID;

const Header = () => {
    const [currentTime, setCurrentTime] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        function start() {
            gapi.load('client:auth2', () => {
                gapi.client.init({
                    clientId: clientId,
                    scope: ""
                }).then(() => {
                    console.log("GAPI client initialized");
                    const authInstance = gapi.auth2.getAuthInstance();
                    if (authInstance) {
                        setIsLoggedIn(authInstance.isSignedIn.get());
                        if (authInstance.isSignedIn.get()) {
                            setUserEmail(authInstance.currentUser.get().getBasicProfile().getEmail());
                        }
                        authInstance.isSignedIn.listen((isSignedIn) => {
                            setIsLoggedIn(isSignedIn);
                            if (isSignedIn) {
                                setUserEmail(authInstance.currentUser.get().getBasicProfile().getEmail());
                            } else {
                                setUserEmail('');
                            }
                        });
                    }
                }).catch((error) => {
                    console.error("Error initializing GAPI client", error);
                });
            });
        }

        start();
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const options = { hour: '2-digit', minute: '2-digit', hour12: true, weekday: 'short', month: 'short', day: 'numeric' };
            const formattedTime = now.toLocaleString('en-US', options);
            setCurrentTime(formattedTime);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="navbar bg-base-100 bg-white">
            <div className="flex-1 flex items-center">
                <img
                    src="/video-camera.png"
                    alt="Logo"
                    className="w-18 h-12 mr-2 ml-3 rounded-lg"
                />
                <a className="name text-xl font-bold text-black">Meeting-Minutes</a>
            </div>
            <div className="flex-none gap-2">
                <div className="flex items-center">
                    <span className="mr-4 text-sm text-black">{currentTime}</span>
                    {isLoggedIn ? <Avatar userEmail={userEmail} /> : <LoginButton />}
                </div>
            </div>
        </div>
    );
};

export default Header;
