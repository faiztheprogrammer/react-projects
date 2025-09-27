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
    ghost: { background: "transparent", color: "gray", border: "none" },
    disabledStyling: {background: "#ade8f4", color: "black", border: "none"}
  }

  // Pick which variant to use (e.g. "primary")
  function variantHandler() {
    let chosenVariant
    if(isDisabled) {
      return chosenVariant = styleTheButton.disabledStyling
    } else {
      return chosenVariant = styleTheButton.primary
    }
  }
  

  return (
    <>
      <h1>Test</h1>
      <button 
        onKeyDown={handleButton} 
        disabled={isDisabled}
        style={variantHandler()}
      >
        {isDisabled ? "Disabled!" : "Press enter!"}
      </button>
    </>
  )
}

export default App
