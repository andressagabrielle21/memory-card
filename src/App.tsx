import GameHeader from "./components/GameHeader"
import Card from "./components/Card"
import WinModal from "./components/WinModal";
import { useGameLogic } from "./hooks/useGameLogic";

export interface ICards {
  id: number,
  value: string,
  isFlipped: boolean,
  isMatched: boolean,
  isLocked: boolean
}

const cardValues = [
  "🍉",
  "🍇",
  "🍎",
  "🍑",
  "🍓",
  "🥥",
  "🥑",
  "🍌",
  "🍉",
  "🍇",
  "🍎",
  "🍑",
  "🍓",
  "🥥",
  "🥑",
  "🍌"
]

function App() {
   const {cards, moves, score, initializeGame, handleCardClick, gameOver} = useGameLogic(cardValues);

  return (
    <div className="bg-main h-full md:h-screen py-8 flex justify-center items-center flex-col gap-5">
        <GameHeader score={score} moves={moves} onResetFunc={initializeGame}/>

        <div className={`${gameOver ? "flex" : "hidden"}`}>
          <WinModal moves={moves} onReset={initializeGame}/>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {cards.map((card) => (
            <Card cardValue={card} onClick={handleCardClick}/> 
          ))}
        </div>
        
    </div>
  )
}
 

export default App
