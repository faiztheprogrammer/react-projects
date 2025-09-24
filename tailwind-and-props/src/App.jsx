import { useState } from 'react'
import './App.css'
import PropsComponent from "./PropsComponent"

function App() {

  return (
    <>
      <h1 className='bg-green-400 p-2 rounded-xl text-slate mb-0.5'>React With Vite</h1>
      <div className='flex gap-6 p-6'>
        <PropsComponent
          image="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTxJjCPQY7wOiX94nNdPt9HCz37Q4e7rP_HgREPw19aAEeVhPevMiq8X0jdOypHZPYyf-6ltRtzonT2EIkUJmfbua5JL7ATHXyG6weKEA"
          place="Attabad Lake"
          description="Attabad Lake also known as Hunza Lake, is a lake located in the Gojal region of the Pakistani-administered Gilgit-Baltistan"
        />

        <PropsComponent
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3g-8SFv4s5nXGcox3nLWO8tG4FwFKp0jkhw&s"
          place="Azad Kashmir"
          description="Neelum Valley is a breathtakingly beautiful region located in Azad Kashmir, Pakistan, known for its lush green landscapes"
        />
      </div>
    </>
  )
}

export default App
