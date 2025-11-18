import type { ICards } from "../App"

interface ICard {
  cardValue: ICards,
  onClick: (card: ICards) => void
}

const Card = ({cardValue, onClick} : ICard) => {
  return (
    <div className="flex justify-center items-center" onClick={() => onClick(cardValue)}>
        <div className={`card ${cardValue.isFlipped && "flipped bg-[#1e1e1e] shadow-xl/40 shadow-blue-300"} 
          ${cardValue.isMatched && "border-2 border-green-300 pointer-none shadow-green-300 bg-[#7ed32133]"} 
          border border-white/10 text-white flex 
          justify-center items-center text-5xl rounded-lg shadow-xl/30 
          ${!cardValue.isMatched && "hover:shadow-indigo-500 hover:scale-110 "} 
            w-[110px] h-[110px] max-w-[200px] max-h-[200px] 
        `}>
          <div className={`${cardValue.isFlipped && "hidden"} card-front font-bold`}>?</div>
          <span className={`${cardValue.isFlipped ? "block" : "hidden"} card-back`}>{cardValue.value}</span>
        </div>
    </div>
  )
}

export default Card
