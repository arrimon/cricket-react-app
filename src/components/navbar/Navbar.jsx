import React from 'react';
import dollerCoin from "../../assets/dollar-coin.png"

const Navbar = ({coin}) => {
    return (
        <div className="container mx-auto navbar bg-base-100 border-b-1 border-b-gray-200 py-4">
            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
                </button>
            </div>
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <button className="btn flex justify-between">
                    <p>{coin}</p>
                    <img src={dollerCoin} alt="Dollar Coin" />
                </button>
            </div>
        </div>
    );
};

export default Navbar;