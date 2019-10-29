import React, {useState, useEffect} from 'react';
import Board from './components/board';
import './App.css';
import intializeDeck from './deck'



export default function App() {
  const [cards, setCards] = useState([])



  //in this const we are getting the flipped thats in the div, setFlipped is the name of the method that sets the state,
  //useState default state is a default state
  const [flipped, setFlipped] = useState([]) //the use state array will store ids
  
  const [dimension, setDimension] = useState(400)

  const [solved, setSolved] = useState([])//board logic

  const[disabled, setDisabled] = useState(false) //disables board when card is flipped

  useEffect(()=>{
    resizeBoard()
    setCards(intializeDeck())
  }, [])
  

  useEffect(() => {
    const resizeListener = window.addEventListener('resize', resizeBoard)

    return()=> window.removeEventListener('resize', resizeListener)
  })
  
  const handleClick = (id) => { 
    
    setDisabled(true)
    if (flipped.length===0){
      setFlipped([id])
      setDisabled(false)
      
    }else{
      if (sameCardClicked (id))return
      setFlipped([flipped[0], id])
      if (isMatch(id)){
        setSolved([...solved, flipped[0], id])
        resetCards()
      }else{
        setTimeout(resetCards, 2000)
      }
    }
    //id needs to be inside a array otherwise it will become a number. Number doesnt have method (includes)
    
  }


const resetCards = () => {
  setFlipped([])
  setDisabled(false)
}

const sameCardClicked = (id) => flipped.includes(id)

const isMatch = (id) => {
  const clickedCard = cards.find((card)=> card.id ===id)
  const flippedCard = cards.find((card) => flipped[0] === card.id)

  return flippedCard.type === clickedCard.type
}

  const resizeBoard = () =>{
    setDimension(Math.min(
      document.documentElement.clientWidth,
      document.documentElement.clientHeight,
    ),
    )
  }

  return (
    <div className="App">
      <h1>Memory</h1>
      <h2>Remember where the cards are!</h2>
     <Board 
     dimension={dimension}
      cards={cards}
      flipped={flipped}
      handleClick={handleClick}
      disabled={disabled}
      solved={solved}
    />
    </div>
  );
}


