import './App.css'
import axios from 'axios'
import './index.css'
import { useState } from 'react'

function App() {

  return (
   
  <div className='w-full h-full relative'>
      <div className='text-center p-4'>
      <input type="text" className='py-3 px-6 w-[700px]
      text-lg rounded-3xl border border-gray-200 text-gray-600 placeholder:text-gray-400
      focus:outline-none bg-white-600/100 shadow-md' placeholder='위치를 입력하세요.' 
      value={location}
      onChange={(event) => setLocation(event.target.value)}
      onKeyDownCapture={searchLocation}/>
      </div>
    </div>
  )
}

export default App
