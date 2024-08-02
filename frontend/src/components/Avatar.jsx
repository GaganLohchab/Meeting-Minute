import React from 'react';
import LogoutButton from "./logout";

const Avatar = ({ userEmail }) => {
    // Extract the first character of the email
    const initial = userEmail ? userEmail.charAt(0).toUpperCase() : '';

    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="avatarc w-10 h-10 rounded-full flex items-center justify-center text-white text-xl">
                    {initial || <img alt="Default Avatar" src="/icon-profile.jpg" />}
                </div>
            </div>
            <div tabIndex={0} className="dropdown-content p-0 bg-transparent mt-2 mr-1">
                <LogoutButton />
            </div>
        </div>
    );
};

export default Avatar;