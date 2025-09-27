import React from "react";
import { useState } from "react";

function Button() {
    const [isDisabled, setIsDisabled] = useState(false)
    const [variant, setVariant] = useState(null) // will hold the selected style

    // Handle Enter key to disable the button
    function handleButton(event) {
        if (event.key === 'Enter') {
            setIsDisabled(true)
        }
    }

    // Define all possible styles
    const styleTheButton = {
        primary: { background: "blue", color: "white", border: "none" },
        secondary: { background: "white", color: "blue", border: "1px solid blue" },
        ghost: { background: "transparent", color: "gray", border: "none" },
        disabledStyling: { background: "#ade8f4", color: "black", border: "none" }
    }

    // Function to randomly select one style
    function randomStateSelector() {
        const keys = Object.keys(styleTheButton)
        const randomIndex = Math.floor(Math.random() * keys.length)
        const randomKey = keys[randomIndex]

        // Update state with the selected style
        setVariant(styleTheButton[randomKey])
        console.log(styleTheButton[randomKey])
    }

    // Decide final style (disabled takes priority)
    const appliedStyle = isDisabled
        ? styleTheButton.disabledStyling
        : variant || styleTheButton.primary // default is primary

    return (
    <>
      {/* Main button */}
      <button
        style={appliedStyle}
        onKeyDown={handleButton}
      >
        {isDisabled ? "Disabled!" : "Press enter!"}
      </button>

      {/* Random style button */}
      <button onClick={randomStateSelector} style={{ marginLeft: "10px" }}>
        Random State
      </button>
    </>

    )
}

export default Button;