import React, { Suspense, useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Banner from './components/homepage/Banner/Banner'
import Players from './components/homepage/players/Players'
import { ToastContainer } from 'react-toastify'

const fetchPlayer = async () => {
  const res = await fetch('playerData.json');
  return res.json();
}

function App() {
  const playerPromise = fetchPlayer();
  const [coin, setCoin] = useState(4550000)
  return (
    <>
      <Navbar coin={coin} />
      <Banner />
      <Suspense fallback={<span className="loading loading-spinner text-accent"></span>}>
        <Players
          playerPromise={playerPromise}
          setCoin={setCoin}
          coin={coin}
        />
      </Suspense>
      
      
      {/* React toastify */}
      <ToastContainer />
    </>
  )
}

export default App
