
import { useState } from 'react'

import Frontpage from './components/Frontpage/Frontpage'
import GameStarted from './components/GameStarted/GameStarted';

function App() {
  const[isGameStarted,setIsGameStarted] = useState(false);
  const toggleGamePlay = () => {
    setIsGameStarted((prev)=>!prev);
  }

  return (
    <>
      {isGameStarted ? <GameStarted/> :  <Frontpage toggle = {toggleGamePlay}/>}
    </>
  )
}

export default App
