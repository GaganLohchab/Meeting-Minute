import React, { useState, useEffect } from 'react';

const Header = () => {
    const [currentTime, setCurrentTime] = useState('');

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
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="/icon-profile.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
