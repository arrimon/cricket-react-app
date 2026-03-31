import React from 'react';
import { Trash } from 'lucide-react';
import { FaUser, FaStar  } from "react-icons/fa";
import { GiCricketBat } from "react-icons/gi";
import { CiBaseball, CiLocationOn  } from "react-icons/ci";
import { TbSettingsSpark } from "react-icons/tb";
import { BiSolidError } from "react-icons/bi";
import SelectedCard from '../../ui/SelectedCard';
import { toast } from 'react-toastify';

const SelectedPlayers = ({ selectedPlayer, setSelectedPlayer, coin, setCoin }) => {
    console.log(selectedPlayer)

    const handleDeleteSelectedPlayer = (player) => {
        toast.info(
            ({ closeToast }) => (
            <div className="flex flex-col gap-2">
                <p className="font-semibold">
                Remove <span className="text-red-500">{player.name}</span> from squad?
                </p>

                <div className="flex gap-2 justify-end">
                <button
                    className="btn btn-sm bg-gray-200"
                    onClick={closeToast}
                >
                    Cancel
                </button>

                <button
                    className="btn btn-sm bg-red-500 text-white"
                    onClick={() => {
                    const filterPlayers = selectedPlayer.filter(
                        (p) => p.name !== player.name
                    );

                    setSelectedPlayer(filterPlayers);
                    setCoin(coin + player.price);

                    toast.dismiss(); // close confirm
                    toast.error(`${player.name} removed!`);
                    }}
                >
                    Yes, Remove
                </button>
                </div>
            </div>
            ),
            {
            autoClose: false,
            closeOnClick: false,
            }
        );
        };


    return (
        <div className='flex flex-col gap-3 mb-6'>
            {

            selectedPlayer.length === 0 ?  
            <div className='bg-gray-50 rounded-xl flex flex-col gap-3 justify-center items-center md:h-[40vh] h-[30vh]'>
                <h2 className='md:text-2xl text-lg font-bold text-gray-600'>No player selectet yet!</h2>
                <p className='text-gray-500'>Go to available tab to select players</p>
                <BiSolidError className='md:w-15 w-10 h-10 md:h-15 text-gray-300' />
            </div> :
            selectedPlayer.map((player, index)=>{
                    {/* <h2>Selected Players</h2> */}
                return(
                    <SelectedCard 
                        key={index}
                        player={player}
                        handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}
                    />    
                )
                })
             }
        </div>
    );
};

export default SelectedPlayers;