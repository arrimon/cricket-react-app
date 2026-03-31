import React from 'react';
import { Trash } from 'lucide-react';
import { FaUser, FaStar  } from "react-icons/fa";
import { GiCricketBat } from "react-icons/gi";
import { CiBaseball, CiLocationOn  } from "react-icons/ci";
import { TbSettingsSpark } from "react-icons/tb";
import { BiSolidError } from "react-icons/bi";
import SelectedCard from '../../ui/SelectedCard';

const SelectedPlayers = ({ selectedPlayer, setSelectedPlayer, coin, setCoin }) => {
    console.log(selectedPlayer)

    const handleDeleteSelectedPlayer = (player) => {
        // 1. এখানে 'player' হলো সেই অবজেক্ট যাকে আপনি ডিলিট করতে চাচ্ছেন (যে বাটনে ক্লিক করা হয়েছে)।
        console.log("Player from handeler", player)
        // 2. লুপে থাকা প্লেয়ারের নাম যদি ডিলিট করা প্লেয়ারের সাথে না মিলে (True), তবে সে লিস্টে থাকবে। 
        // 3.  আর মিলে গেলে (False) সে বাদ পড়ে যাবে।
        const filterPlayers = selectedPlayer.filter(
            (p) => p.name !== player.name,
        )

        console.log("Arter Filter", filterPlayers)
        setSelectedPlayer(filterPlayers)
        // coine also remove
        setCoin(coin + player.price);
    }


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