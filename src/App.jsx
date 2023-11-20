// Komponenta Current Weather i Forecast potřebuje svoje API, takže každá komponenta si ho bude stahovat zvlášť.

import CurrentWeather from './components/CurrentWeather'
import Forecast from './components/Forecast'
import CitySelect from './components/CitySelect'

import './App.css'

// Nepovedlo se uložit API klíč do environment variable
// const myID = process.env.REACT_APP_MY_API_ID

function App() {

  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>

        <CitySelect />

        <div className="weather">
          <CurrentWeather city="Prague" />
          <Forecast />
        </div>

      </div>
    </div>
  )
}

export default App
