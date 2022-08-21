import "./styles.css";
import React,{useState} from 'react'
import StartGameMenu from './StartGameMenu'
import MemeryGame from './MemeryGame'
import {Context} from "./Context"

export default function App() {
const {gameStarted} = React.useContext(Context)
console.log(gameStarted)


  return (
    <div className="App">
    {!gameStarted ? <MemeryGame /> : <StartGameMenu/>}
   

    </div>
  );
}



