// Komponenta Current Weather i Forecast potřebuje svoje API, takže každá komponenta si ho bude stahovat zvlášť.

import CurrentWeather from './components/CurrentWeather'
import Forecast from './components/Forecast'
import CitySelect from './components/CitySelect'

import './App.css'
import { useState } from 'react'

// Nepovedlo se uložit API klíč do environment variable
// const myID = process.env.REACT_APP_MY_API_ID

const cities = [
  "Abuja",
  "Amsterdam",
  "Aswān",
  "Athens",
  "Bangkok",
  "Barcelona",
  "Belgrade",
  "Brno",
  "Budapest",
  "Buenos Aires",
  "Cape Town",
  "Dakar",
  "El Alto",
  "Hanoi",
  "Harbin",
  "Kingston",
  "Kuala Lumpur",
  "Kuwait",
  "Kyiv",
  "Lagos",
  "Ljubljana",
  "London",
  "Madrid",
  "Melbourne",
  "Miami",
  "Minsk",
  "Moscow",
  "New Delhi",
  "New York",
  "Norilsk",
  "Paris",
  "Porto",
  "Prague",
  "Reykjavik",
  "Seoul",
  "Skopje",
  "Sofia",
  "Split",
  "Sydney",
  "São Paulo",
  "Tallinn",
  "Tenerife",
  "Tirana",
  "Toronto",
  "Vancouver",
  "Vienna",
  "Vilnius",
  "Warsaw",
  "Winnipeg",
  "Yakutsk",
];

function App() {

  const [ city, setCity] = useState('Prague')

  const handleSelect = (citySelect) => {
    setCity(citySelect)
  }

  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>

        <CitySelect city={city} cities={cities} onSelect={handleSelect} />

        <div className="weather">
          <CurrentWeather city={city} />
          <Forecast city={city} />
        </div>

      </div>
    </div>
  )
}

export default App
