import React from 'react'

const Weather = ({ weatherData }) => {
  console.log(weatherData); // 이 로그를 통해 전달받는 데이터 구조를 확인
  return (
    <div>
      {weatherData.weather && weatherData.weather.length > 0 ? (
        <div className='w-[500px] h-[250px] bg-gray-300 shadow-lg rounded-xl
          m-auto relative px-6 top-[10%]'>
          <div className="flex justify-between w-full">
            <div className='w-1/2 my-4 mx-auto flex justify-between items-center'>
              <div className="flex flex-col 
                items-start justify-between h-full">
                <div>
                  <p className='text-xl'>
                    {weatherData.name}, {weatherData.sys.country}
                  </p>
                  <p>{weatherData.weather[0].main}: {weatherData.weather[0].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Weather
