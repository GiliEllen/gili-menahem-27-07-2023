import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import { useAppSelector } from '../app/hooks'
import { weatherSelector } from '../features/weather/weatherSlice'

const WeatherPage = () => {

  const weather = useAppSelector(weatherSelector)
  return (
    <div>
      <Header/>
      <Search/>
      {weather ? <p> {JSON.stringify(weather)}</p> : null}
    </div>
  )
}

export default WeatherPage