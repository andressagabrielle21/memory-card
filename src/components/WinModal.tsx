import Button from "./Button"

interface IModal {
    moves: number,
    onReset: () => void,
}

const WinModal = ({moves, onReset} : IModal) => {
  return (
    <div className={`flex justify-center items-center bg-black/70 
        fixed top-0 left-0 w-screen h-screen z-1000
    `}>
        <div className="flex flex-col gap-7 items-center p-6 
            bg-card border-2 border-amber-50/40 rounded-xl 
            font-bold text-lg text-white">
            <h2 className="text-3xl">🎉 Congratulations! 🎉</h2>

            <p>You completed the game in {moves} moves.</p>

            <Button onReset={onReset}/>
        </div>
    </div>
  )
}

export default WinModal
