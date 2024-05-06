import './App.css'
import axios from 'axios'
import './index.css'
import { useState } from 'react'

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState("")

  const API_KEY = "b641c1f69bb6c4da9b041d57648c9a39"
  const url = `https://api.openweathermap.org/data/2.5./weather?q=${location}&appid=
  ${API_KEY}`

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        }).catch((error) => {
          console.error("API 에러:", error);
        });
        setLocation("");
    }
  }
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