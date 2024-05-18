import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)
   const addValue = () =>{
      setCounter(counter + 1)
   }
   const removeValue = () => {
      setCounter(counter - 1);
   }
  return (
    <>
     <h1>Counter Function</h1>
     <h2>Increase Count</h2>
   <button onClick={addValue}>Increase Count {counter}</button>
     <h3>Decrease Count</h3>
     <button onClick={removeValue}> Decrease Count{counter}</button>
    </>
  )
}

export default App
