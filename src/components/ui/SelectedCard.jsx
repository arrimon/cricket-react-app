import React from 'react';
import { Trash } from 'lucide-react';
import { CiBaseball, CiLocationOn } from 'react-icons/ci';
import { FaStar, FaUser } from 'react-icons/fa';
import { GiCricketBat } from 'react-icons/gi';
import { TbSettingsSpark } from 'react-icons/tb';

const SelectedCard = ({player, handleDeleteSelectedPlayer}) => {
    return (
        <div className="card card-side bg-base-100 shadow-sm border p-6" key={player.id}>
            <figure className='w-sx md:mr-4 py-3'>
                <img
                    className='img-small'
                    src={player.image}
                    alt="Movie" 
                />
            </figure>
            <div className="card-body flex flex-row justify-between items-center p-4">
                {/* Left Side: Player Info */}
                <div className='0 flex flex-col justify-center items-start'>
                    <h2 className="flex gap-2 items-center text-sm md:text-lg font-semibold mb-2">
                        <FaUser className='w-4 h-4' /> 
                        {player.name}
                    </h2>
                    <p className="text-md font-semibold flex gap-2 items-center"> <TbSettingsSpark className='w-4 h-4 text' /> {player.role}</p>
                    <p className="text-md font-semibold flex gap-2 items-center"> <CiLocationOn className='w-4 h-4 text-green-800' /> {player.country}</p>
                    <p className="text-md font-semibold flex gap-2 items-center"> <GiCricketBat className='w-4 h-4 rotate-90' /> {player.battingType}</p>
                    <p className="text-md font-semibold flex gap-2 items-center"> <CiBaseball className='w-4 h-4' /> {player.bowlingType}</p>
                    <p className="text-md font-semibold flex gap-2 items-center"> <FaStar className='text-amber-400 w-4 h-4' /> {player.rating}</p>
                </div>

                {/* Right Side: Action Button */}
                <div className="card-actions">
                    <button  
                        onClick={() => handleDeleteSelectedPlayer(player)}
                        className="btn rounded-full text-red-500 hover:bg-red-200 p-2"
                    >
                        <Trash className='w-5 h-4' /> 
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SelectedCard;