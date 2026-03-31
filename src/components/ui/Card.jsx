import React, { useState } from 'react';
import { FaUser, FaFlag, FaStar  } from "react-icons/fa";
import { toast } from 'react-toastify';


const Card = ({player, setCoin, coin, setSelectedPlayer, selectedPlayer}) => {
    const [isSelected, setIsSelected] = useState(false);

    // console.log("player Price= " ,player.price)
    const handleChoosePlayer = () => {
        let newCoin = coin - player.price
        
        if(newCoin >= 0){
            setCoin(coin - player.price)
        }
        else{
            toast.error("Not Enough Coin to purchase this player")
            return;
        }
        setSelectedPlayer([...selectedPlayer, player])
        toast.success(`${player.name} is Selected`)
        setIsSelected(true);
        
    }
    return (
        <div className="card bg-base-100 w-full shadow-sm" key={player.id}>
            <figure className="px-6 pt-8">
                <img
                    src={player.image}
                    alt="Player Photo"
                    className="rounded-xl img-style" 
                />
            </figure>
            <div className="card-body ">
                <h2 className="card-title"><FaUser /> {player.name}</h2>
                <div className='flex justify-between items-center gap-3 my-2'>
                    <FaFlag />
                    <p>{player.country}</p>
                    <button className='btn btn-sm'>{player.role}</button>
                </div>
        
                    <hr className='border-1 border-gray-200' />
        
                    <h2 className='text-xl font-bold flex items-center gap-3'>Rating {player.rating} <FaStar  className='text-[#FFD700] text-2xl' /></h2>
                    <div className='flex justify-between space-y-3'>
                        <div className='flex flex-col gap-2'>
                            <h2 className='text-md font-bold'>{player.battingType}</h2>
                            <h2 className='text-md font-bold'>Price: $ {player.price}</h2>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h2 className='text-md'>{player.bowlingType}</h2>
                            <button 
                                className="btn btn-sm" 
                                onClick={handleChoosePlayer}
                                disabled={isSelected}
                            >
                                {isSelected ? 'Selected' : 'Choose Player'}
                            
                            </button>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Card;