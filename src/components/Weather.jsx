import React from 'react'

const Weather = ({ weatherData }) => {
  console.log(weatherData); // 이 로그를 통해 전달받는 데이터 구조를 확인
  return (
    <div>
      {weatherData.weather && weatherData.weather.length > 0 ? (
        <div className='w-[100%] h-[100%] max-width: 500px bg-gray-300 shadow-lg rounded-xl
          m-auto relative px-5 top-[10%] py-3'>
          <div className="flex justify-between w-full">
            <div className='w-1/2 my-4 mx-auto flex justify-between items-center'>
              <div className="flex flex-col 
                items-start justify-between h-full">
                <div>
                  <p className='text-xl'>
                    {weatherData.name}, {weatherData.sys.country}
                  </p>
                  <p className='text-sm'>{weatherData.weather[0]
                  .description}</p>
                </div>
                <div>
                    <h1 className='text-6xl font-semibold'>{weatherData.main.temp.
                    toFixed()
                    }℃  </h1>
                </div>
              </div>
            </div>

            <div className='w-1/2 flex flex-col justify-between items-end'>
                <div className='relative'>
                <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" className='w-[120px]' />
            </div>
                {weatherData.name !== undefined ? (
                    <div className='flex flex-col justify-evenly gap-y-2 my-4 mx-auto text-xs'>
                        <div className="flex-justify-evenly gap-x-8">
                            <p>Feels Like</p>
                            <p className='font-bold w-20'>
                                {weatherData.main.feels_like.toFixed()} ℃
                            </p>
                        </div>
                        <div className="flex-justify-evenly gap-x-8">
                            <p>Humidity</p>
                            <p className='font-bold w-20'>
                                {weatherData.main.humidity} %
                            </p>
                            
                        </div>
                        <div className="flex-justify-evenly gap-x-8">
                            <p>Wind Speed</p>
                            <p className='font-bold w-20'>
                                {weatherData.wind.speed.toFixed()} KPH
                            </p>
                        </div>
                        <div className="flex-justify-evenly gap-x-8">
                            <p>Pressure</p>
                            <p className='font-bold w-20'>
                                {weatherData.main.pressure.toFixed()} hPa
                            </p>
                        </div>
                    </div>
                ): null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Weather
