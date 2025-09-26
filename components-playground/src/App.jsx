import { useState } from 'react'
import './App.css'

function App() {
  const [isDisabled, setIsDisabled] = useState(false)

  function handleButton(event) {
    if (event.key === 'Enter') {
      setIsDisabled(true)
    }
  }

  const styleTheButton = {
    primary: { background: "blue", color: "white", border: "none" },
    secondary: { background: "white", color: "blue", border: "1px solid blue" },
    ghost: { background: "transparent", color: "gray", border: "none" }
  }

  // Pick which variant to use (e.g. "primary")
  const chosenVariant = styleTheButton.primary

  return (
    <>
      <h1>Test</h1>
      <button 
        onKeyDown={handleButton} 
        disabled={isDisabled}
        style={chosenVariant}
      >
        {isDisabled ? "Disabled!" : "Press enter!"}
      </button>
    </>
  )
}

export default App
