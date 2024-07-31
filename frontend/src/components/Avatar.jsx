import React, { useState, useEffect } from 'react';
import LogoutButton from "./logout"
import { gapi } from 'gapi-script'

const clientId = process.env.REACT_APP_CLIENT_ID;
const Avatar = () => {
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
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src="/icon-profile.jpg" />
                </div>
            </div>
            <div tabIndex={0} className="dropdown-content p-0 bg-transparent">
                <LogoutButton />
            </div>
        </div>
    )
}

export default Avatar;