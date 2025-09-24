import { useState } from "react";



function ColorChangerComponent() {
  const [color, setColor] = useState("olive")
    return (
        <>
        <div className="w-full h-screen" style = {{backgroundColor: color}}>
          <div className="w-full flex justify-center">
            <div className="bg-amber-50 p-4 fixed bottom-12 flex gap-4 rounded-full shadow">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-full"
                onClick={() => setColor("#2B7FFF")}
              >
                Blue
              </button>

              <button
                onClick={() => setColor("#00C951")}
                className="bg-green-500 text-white px-4 py-2 rounded-full">
                Green
              </button>

              <button
                onClick={() => setColor("#FB2C36")}
                className="bg-red-500 text-white px-4 py-2 rounded-full">
                Red
              </button>

              <button
                onClick={() => setColor("#F0B100")}
                className="bg-yellow-500 text-white px-4 py-2 rounded-full">
                Orange
              </button>

              <button
                onClick={() => setColor("#35530E")}
                className="bg-lime-900 text-white px-4 py-2 rounded-full">
                Lime
              </button>

              <button 
                onClick={() => setColor("#FEE685")}
                className="bg-amber-200 text-white px-4 py-2 rounded-full">
                Amber
              </button>

              <button
                onClick = {() => setColor("#00BBA7")}
                className = "bg-teal-500 text-white px-4 py-2 rounded-full">
                Teal
              </button>

              <button
                onClick = {() => setColor("cyan")}
                className="bg-cyan-500 text-white px-4 py-2 rounded-full">
                Cyan
              </button>

              <button 
                onClick = {() => setColor("#00A6F4")}
                className="bg-sky-500 text-white px-4 py-2 rounded-full">
                Sky
              </button>

              <button
                onClick = {() => setColor("#E12AFB")}
                className="bg-fuchsia-500 text-white px-4 py-2 rounded-full">
                Fuchsia
              </button>

              <button
                onClick={() => setColor("#8B0836")}
                className="bg-rose-900 text-white px-4 py-2 rounded-full">
                Rose
              </button>
            </div>
          </div>
        </div>
        </>
    )
}

export default ColorChangerComponent;