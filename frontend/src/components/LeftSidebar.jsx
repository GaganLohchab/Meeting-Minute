import React, { useState } from "react";
import { FaVideo } from "react-icons/fa";
import { MdKeyboardAlt } from "react-icons/md";

const LeftSidebar = () => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <>
        <div className="LeftSidebar w-1/2 h-screen">
            <div className="txt text-5xl text-left text-black pt-20 pl-11">
                Video calls and meetings for everyone
            </div>
            <div className="txt text-2xl text-left text-slate-600 pt-7 pl-11">
                Connect, collaborate, and celebrate from anywhere with Google Meet
            </div>
            <div className="meet w-full flex items-center pl-11 mt-11 space-x-4">
                <button
                    type="button"
                    className="custom-button text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded text-lg flex justify-center items-center"
                >
                    <FaVideo className="vicon mr-2.5" />
                    <span>Start a meeting</span>
                </button>
                <div className="relative flex items-center">
                    <MdKeyboardAlt className="absolute left-3 text-gray-500" />
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        className="form-control block h-11 pl-10 pr-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-500"
                        placeholder="Enter a code or link"
                        maxLength="50"
                        spellCheck="false"
                    />
                    <button
                        className={`btn btn-sm text-sm font-medium border-none tracking-wider h-11 ml-3 bg-transparent ${inputValue ? 'text-blue-600 hover:bg-gray-100' : 'text-gray-500 hover:bg-transparent'}`}
                    >
                        Join
                    </button>
                    
                </div>
                
            </div>
            <div className="line mt-4 text-gray-300">
            <span className="lines ml-11">_____________________________________________________________________________________</span>
            </div>
            <div className="enjoy ml-10 mt-5 text-gray-600 text-xl">
            <span>Enjoy high quality video calling</span>
            </div>
           
        </div>
        
        </>
    );
};

export default LeftSidebar;
