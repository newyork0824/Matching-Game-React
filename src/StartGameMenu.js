import React from 'react'
import {Context} from "./Context"

function StartGameMenu() {
const {gameStarted,setGameStarted} = React.useContext(Context)
function startGame() {
  setGameStarted(prev => !prev)
  
  
}



return (
  <div className="start-game-con">
  <div className="start-game-content">
<h1 className="start-title"> Marvel Match Em </h1>
<button onClick={ startGame} className="startGameBtn"> Start Game </button>
</div>
</div>


)


}
export default StartGameMenu