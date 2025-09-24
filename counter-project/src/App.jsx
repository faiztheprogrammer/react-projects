import { useState } from 'react'
import './App.css'


function App() {

  let [counter, setCounter] = useState(5)
  let [text, setText] = useState("")

  function increase() {
    if(counter < 20) {
      counter = counter + 1;
      setCounter(counter)
    }
    console.log("Added", counter);
  }

  function decrease() {
    if(counter > 0) {
      counter = counter - 1;
      setCounter(counter)
    }
    
    console.log("Decreased", counter);
  }

  return (
    <>
      <h1>React Counter {counter}</h1>
      <button onClick={increase}>Increase {counter}</button>
      <br /><br />
      <button onClick={decrease}>Decrease {counter}</button>
      <br /><br />
      <input type="text" placeholder='Enter text' onChange={(e) => setText(e.target.value)} />
      <br /><br />
      <span>You typed: {text}</span>
    </>
  )
}

export default App
