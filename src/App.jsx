import { useState, useEffect } from 'react'
import './App.css'

// Nepovedlo se uložit API klíč do environment variable
// const myID = process.env.REACT_APP_MY_API_ID

function App() {

  const [weather, setWeather] = useState(null)

  const fetchWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=Praha&appid=f6e5f0e49d538dd24bf7b59890e5efc2`)
    .then(response => response.json())
    .then(data => {
      setWeather(data)
    })
  }

  useEffect(() => {
    fetchWeather()
  }, [])

  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>
        <div className="weather">
          {/* <div className="button-group">
            <button className="button">City01</button>
            <button className="button">City02</button>
            <button className="button">City03</button>
          </div> */}

          <div className="weather__forecast" id="predpoved">
            <div className="forecast">
              <div className="forecast__day">Day, date</div>
              <div className="forecast__icon">
                {/* <img
                  src={URL FROM OPEN WEATHER}
                  style={{ height: "100%" }}
                  alt="current weather icon"
                /> */}
              </div>
              <div className="forecast__temp">-- °C</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
