interface IButton {
    onReset: () => void,
}

const Button = ({onReset} : IButton) => {
  return (
    <button className="reset-btn hover:transform 
        hover:translate-y-0.5 
        hover:shadow-indigo-500 hover:scale-110" 
        onClick={onReset}>
      <p>🆕 New Game</p>
    </button>
  )
}

export default Button
