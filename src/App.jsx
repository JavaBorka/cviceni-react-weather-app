// Komponenta Current Weather i Forecast potřebuje svoje API, takže každá komponenta si ho bude stahovat zvlášť.

import CurrentWeather from './components/CurrentWeather'
import Forecast from './components/Forecast'
import CitySelect from './components/CitySelect'

import './App.css'
import { useState } from 'react'

// Nepovedlo se uložit API klíč do environment variable
// const myID = process.env.REACT_APP_MY_API_ID

const cities = [
  "Prague",
  "Reykjavik",
  "Tenerife"
]

function App() {

  const [ city, setCity] = useState('Prague')

  const handleButtonClick = (cityName) => {
    setCity(cityName)
  }

  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>

        <CitySelect cities={cities} onChange={handleButtonClick} />

        <div className="weather">
          <CurrentWeather city={city} />
          <Forecast />
        </div>

      </div>
    </div>
  )
}

export default App
