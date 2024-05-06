import './App.css'
import axios from 'axios'
import './index.css'
import { useState } from 'react'
import Weather from './components/Weather';


function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState("")

  const API_KEY = "b641c1f69bb6c4da9b041d57648c9a39"; //지울 예정임
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      console.log("Making API Call to URL:", url); // URL 로그를 찍어서 호출 URL 확인
      axios.get(url)
        .then((response) => {
          console.log("API Response Data:", response.data); // API로부터 받은 데이터 로그
          setData(response.data); // 데이터를 상태에 저장
        }).catch((error) => {
          console.error("API Error:", error); // 에러 로그
          console.error("Error Details:", error.response ? error.response.data : 'No response data'); // 에러 상세 정보 로그
        });
      setLocation(""); // 위치를 입력한 후 초기화
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

      <Weather weatherData = {data}/>
    </div>
  )
}

export default App