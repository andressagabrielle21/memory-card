import Button from "./Button";

interface IGameValues {
  score: number;
  moves: number,
  onResetFunc: () => void
}

const GameHeader = ({score, moves, onResetFunc}: IGameValues) => {
  return (
    <div className="bg-header max-w-[90%] p-6 rounded-xl text-white border-white flex justify-center flex-col gap-5 shadow-xl/30">
      <h2 className="text-3xl font-bold">🎮 Memory Card Game 🎮</h2>

      <div className="flex justify-around">
        <div className="flex flex-col items-center">
            <p className="font-bold">SCORE:</p>
            <p className="text-2xl font-bold text-indigo-500">{score}</p>
        </div>

        <div className="flex flex-col items-center">
            <p className="font-bold">MOVES:</p>
            <p className="text-2xl font-bold text-indigo-500">{moves}</p>
        </div>
      </div>

      <div className="flex justify-center">
        <Button onReset={onResetFunc}/>
      </div>
    </div>
  )
}

export default GameHeader
