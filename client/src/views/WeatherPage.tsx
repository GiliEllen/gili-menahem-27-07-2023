import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import { useAppSelector } from '../app/hooks'
import { weatherSelector } from '../features/weather/weatherSlice'
import WeatherMain from '../components/WeatherMain'

const WeatherPage = () => {

  const weather = useAppSelector(weatherSelector)
  return (
    <div>
      <Header/>
      <Search/>
      <WeatherMain/>
      {weather ? <p> {JSON.stringify(weather)}</p> : null}
    </div>
  )
}

export default WeatherPage