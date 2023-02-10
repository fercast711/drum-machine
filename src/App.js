import React from 'react';
import Drum from './components/Drum';
import { useSelector } from 'react-redux';
function App() {
  let sound = new Audio();
  sound.volume = 0.4;  
  const {sounds} = useSelector(state=>state.drums)
  const handleClick = (num,booleano)=>{
    if(booleano){
      sound.src = sounds[num]
      return sound.play()
  } 
  }
  return (
    <div className="App" >
      <Drum handleClick={handleClick}/>
      
    </div>
  );
}

export default App;
