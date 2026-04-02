import { useState } from 'react';
import './App.css';
import Hero from './Component/Navbar/Hero';
import Navbar from './Component/Navbar/Navbar';

function App() {
  const [coin, setCoin] = useState(0);

  return (
    <>
    <div className='px-2.5 lg:px-0'>
    <Navbar coin={coin} />
    <Hero coin={coin} setCoin={setCoin} />
    </div>
    </>
  )
}

export default App
