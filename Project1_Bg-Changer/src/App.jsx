import React from "react"
import { useState } from "react"


function App() {

    const[color, setColor] = useState["olive"];

  return (
    <>
       <div className="w-full"style={{backgroundColor: color}}>
        
         </div>
    </>
  )
}

export default App
