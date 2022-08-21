import React, { useState, useEffect } from "react";
import Spiderman from "./images/Spiderman.jpg"
import IronMan from "./images/Iron-Man.jpg"
import Thor from "./images/Thor.jpg"
import Hulk from "./images/Hulk.jpg"
import BlackPather from "./images/Black-Panther.jpeg"
import CaptainAmerica from "./images/Captain-America.jpg"
import backImg from "./images/Back-Card.png"
import {Context} from "./Context"

function MemeryGame() {
  const [score, setScore] = useState(0);
  const[cardArray,setCardArray] = useState([])
  const [flippedArray, setFlippedArray] = useState([])
  let localflipped
  const [winner,setWinner] = useState(false)
 const {startGame, setStartGame} = React.useContext(Context)
 const [gameIsOn, setGameIsOn] = useState(true)
 const[playAgainBtn,setPlayAgainBtn] = useState(false)
let localCardArray = [
    {
      id: 1,
      name: "Spiderman",
      Img: Spiderman,
      backImg: backImg,
      isFlipped: false,
      isMatched: false

    },
    {
      id: 2,
      name: "Iron Man",
      Img: IronMan,
       backImg: backImg,
       isFlipped: false,
       isMatched: false
    },
    {
      id:3,
      name: "Captain America",
      Img: CaptainAmerica,
       backImg: backImg,
       isFlipped: false,
       isMatched: false
    },
    {
      id: 4,
      name: "Black Panther",
      Img: BlackPather,
       backImg: backImg,
       isFlipped: false,
       isMatched: false
    },
    {
      id: 5,
      name: "Thor",
      Img: Thor,
       backImg: backImg ,
       isFlipped: false,
       isMatched: false
    },
    {
        id: 6,
      name: "Hulk",
      Img: Hulk,
       backImg: backImg,
       isFlipped: false,
       isMatched: false 
    },
      {
        id:7,
      name: "Spiderman",
      Img: Spiderman,
       backImg: backImg,
       isFlipped: false,
      isMatched: false 
    },
    {
      id:8,
      name: "Iron Man",
      Img: IronMan,
       backImg: backImg,
       isFlipped: false,
       isMatched: false
    },
    {
      id:9,
      name: "Captain America",
      Img: CaptainAmerica,
       backImg: backImg,
       isFlipped: false,
      isMatched: false
    },
    {
      id: 10,
      name: "Black Panther",
      Img: BlackPather,
       backImg: backImg,
       isFlipped: false,
      isMatched: false
    },
    {
      id: 11,
      name: "Thor",
      Img: Thor,
       backImg: backImg,
       isFlipped: false,
      isMatched: false
    },
    {
      id: 12,
      name: "Hulk",
      Img: Hulk,
      backImg: backImg,
      isFlipped: false,
      isMatched: false 
    }

  ]

  useEffect(() => {
   localCardArray = localCardArray.sort(() => Math.random() - 0.5 )
   
   setCardArray(localCardArray)
  }, [gameIsOn])

  


  function startRound(id,card) {
    if(flippedArray.length < 2) {
  flipCard(id)
  localflipped = card 

setFlippedArray(prevArray => [...prevArray, localflipped])
console.log(flippedArray)
    }
  }

  
function flipCard(id) {
  setCardArray(prevCard => prevCard.map(card => {
 return card.id === id ?
    {...card, isFlipped: true} : card
  }))

}

useEffect(() => {
  if(flippedArray.length === 2 ) {
    setTimeout(checkForMatch, 500)
      
  }
  

}, [flippedArray.length])


  function checkForMatch() {
        if(flippedArray[0].name === flippedArray[1].name) {
        setCardArray(prevArray => prevArray.map(card => {
          return card.name === flippedArray[0].name ? 
          {...card, 
          isMatched: true,
          isFlipped: true } : card
        }))
             setScore(prevScore => prevScore + 1)
           setFlippedArray([])
      } else {
        setCardArray(prevArray => prevArray.map(card => {
          return card.name === flippedArray[0] || flippedArray[1] && card.isMatched != true ? 
          {...card,
          isFlipped: false} : card
          }))
           setFlippedArray([])
 
         }
         }

function matchWarning() {
  console.log("This is matched already!")
}

useEffect(() => {
score === 6 ? setWinner(true)  : ""
if(score === 6) {
  setPlayAgainBtn(true)
  setGameIsOn(false)
 
}




}, [score])

function playAgain() {
  setPlayAgainBtn(false)
  setScore(0)
   
  setWinner(false)
  setGameIsOn(true)
}


  const cardGrid = cardArray.map(card => 
  <img key={card.id}  onClick={!card.isMatched ?  e => startRound(card.id,card) : e => matchWarning}  alt="a card" src={card.isFlipped ? card.Img : card.backImg} className="grid-item" />
  )


  return (
    <div>
      <h3 className="memery-score"> Score: {score} </h3>
      {playAgainBtn ? <button className="play-again-btn" onClick={playAgain}> Play Again </button>: ""}
      <div className="memery-grid"></div>
      {cardGrid}
    {winner ? <h1 className="winner-text"> You Win! </h1> : ""}
    </div>
  );
}

export default MemeryGame;
