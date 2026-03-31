import React, { use, useState } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const Players = ({ playerPromise, setCoin, coin }) => {
    // console.log("test players Details =", playerPromise)
    // isSelected Btn
    const [selectedType, setSelectedType] = useState('available')

    // console.log('Selected type - ', selectedType)
    const players = use(playerPromise);
    // console.log("test players Details =", players)

    // Selected Players
    const [selectedPlayer, setSelectedPlayer] = useState([]);
    return (
        <div className='container mx-auto px-4'>
            <div className='flex justify-between items-center'>
                {selectedType === 'available' ? (
                    <h2 className='md:text-xl font-bold'>Available Players</h2>
                ) : (
                    <h2 className='md:text-xl font-bold'>Selected Players ({selectedPlayer.length}/{players.length})</h2>
                )}
                <div className='flex gap-0'>
                    <button 
                        onClick={() => setSelectedType('available')}
                        className={`btn ${selectedType === 'available' ? 'bg-[#E7FE29]' : ' '}  rounded-r-none`}
                    >
                        Available
                    </button>

                    <button 
                        onClick={() => setSelectedType('selected')}
                        className={`btn ${selectedType === 'selected' ? 'bg-[#E7FE29]' : ' '}  rounded-l-none`}>Selected ({selectedPlayer.length})</button>
                </div>
            </div>
            <div className='mt-10 '>
                {selectedType === 'available' ? (
                    <AvailablePlayers 
                        players={players}
                        setCoin={setCoin}
                        coin={coin}
                        setSelectedPlayer={setSelectedPlayer}
                        selectedPlayer={selectedPlayer}
                    />
                ) : (
                    <SelectedPlayers 
                        selectedPlayer={selectedPlayer}
                        setSelectedPlayer={setSelectedPlayer}
                        setCoin={setCoin}
                        coin={coin}
                    />
                )}
                
            </div>
        </div>
    );
};

export default Players;