// useref -> for reference with other input , 
// usestate -> for ui change
// useffect -> for the custom design change in the ui
import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  // created for the length, setlength;
  const [length, setlength] = useState(8)
  const[numAllow, setnumAllow] = useState(false);
  const[charAllow, setcharAllow] = useState(false);
  const [passAllow, setpassAllow] = useState("");
  const passcopytoClipboard = useRef(null);
  // out here only we have to change the window so, that the code can be clicked


  const passwordGenerator = useCallback(fn =>{

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numAllow) str += "0123456789"; 
    if(charAllow) str += "@#%^&(&({[}*(&";

    for(let i=0; i<=array.length(); i++)
      {
        let char = Math.floor(Math.random() * str.length + 1);

        pass += str.charAt(char);
      }

      setpassAllow(pass)

  },[length, numAllow, charAllow, passAllow, setpassAllow]);


  useEffect(() => {
    passwordGenerator
  }, [length, numAllow, charAllow, passwordGenerator]);

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4my-8 text-orange-500 bg-gray-800 text-black-500'
     >
      <h1 className='text-white text-center my-3'>Password Generator</h1>
     <div className='className="flex shadow rounded-lg overflow-hidden mb-4'>
      <input 
      type="text" 
      value={passAllow}
      className='outine-none w-full py-1 px-3'
      placeholder='password'
      readOnly
      />

      <button
      onClick={passcopytoClipboard}
      ref={passcopytoClipboard }
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
      >copy</button>
     </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={10}
          value={length}
          className='cursor-pointer'
          onChange={(e)=> {setlength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>

         <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={numAllow}
          id="numberInput"
          onChange={() => {
            setnumAllow((prev) => !prev);  
          }}
          />
          <label htmlFor="numberInput">Numbers</label>
         </div>
         <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={charAllow}
          id="characterInput"
          onChange={() => {
               setcharAllow((prev) =>{
                !prev
               })
          }}
          />
         </div>
         <label htmlFor="characterInput">Characters</label>


      </div>


     </div>
    </>
  )
}

export default App
