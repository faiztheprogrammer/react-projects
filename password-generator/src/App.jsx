import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'
import './index.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*(){}[]`"

    for (let i = 0; i < length; i++) {
      let randomChar = Math.floor(Math.random() * str.length)
      pass += str[randomChar]
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  const copyToClipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select() // highlight the text
      window.navigator.clipboard.writeText(password)
    }
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-slate-400 p-6 rounded-lg flex flex-col items-center gap-4 w-[600px]">
        
        {/* Heading */}
        <h3 className="font-bold text-lg text-center">
          Password Generator
        </h3>

        {/* Input + Button */}
        <div className="flex w-full gap-2">
          <input
            type="text"
            value={password}
            placeholder="Password will generate here"
            className="outline-none bg-white rounded-md w-full px-2 py-1"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyToClipboard}
            className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-800 cursor-pointer">
            Copy
          </button>
        </div>

        {/* Options in one line */}
        <div className="flex gap-4 items-center">
          <div>
            <input
              type="range"
              min={8}
              max={50}
              onChange={(e) => setLength(Number(e.target.value))}
              value={length}
            /> <label>Length {length}</label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            /> <label>Numbers</label>
          </div>
          <div>
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            /> <label>Characters</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
