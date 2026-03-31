import Card from '../../ui/Card';
import React from 'react';
import { FaUser, FaFlag, FaStar  } from "react-icons/fa";

const AvailablePlayers = ({ players, setCoin, coin, setSelectedPlayer, selectedPlayer }) => {
    console.log(players)
    return (
        <div className=''>
            {/* <p>Available Players</p> */}
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-6 px-4 md:px-0'>
                {
                    players.map((player, index) => {
                        return(
                            <Card 
                                key={index} 
                                player={player} 
                                setCoin={setCoin} 
                                coin={coin} 
                                setSelectedPlayer={setSelectedPlayer}
                                selectedPlayer={selectedPlayer}
                            />
                        )
                    })
                }
            </div>
            
        </div>
    );
};

export default AvailablePlayers;