import { useState, useEffect } from 'react'

function CurrentWeather({city}) {
    const [weather, setWeather] = useState(null)

    const fetchWeather = () => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=f6e5f0e49d538dd24bf7b59890e5efc2`)
      .then(response => response.json())
      .then(data => {
        setWeather(data)
      })
    }
  
    useEffect(() => {
      fetchWeather()
    }, [city])

    return (
        <>
        {weather !== null ? (
            <div className="weather__current">
                <h2 className="weather__city" id="mesto">
                {weather.name}, {weather.sys.country}
                </h2>
                <div className="weather__inner weather__inner--center">
                <div className="weather__section weather__section--temp">
                    <span className="weather__temp-value" id="teplota">
                    {weather.main.temp.toFixed(1)}
                    </span>
                    <span className="weather__temp-unit">°C</span>
                    <div className="weather__description" id="popis">
                    {weather.weather[0].description}
                    </div>
                </div>
                <div
                    className="weather__section weather__section--icon"
                    id="ikona"
                >
                    <img
                    src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    alt={weather.weather[0].description}
                    />
                </div>
                </div>
                <div className="weather__inner">
                <div className="weather__section">
                    <h3 className="weather__title">Wind</h3>
                    <div className="weather__value">
                    <span id="wind">{weather.wind.speed.toFixed(1)}</span> km/h
                    </div>
                </div>
                <div className="weather__section">
                    <h3 className="weather__title">Humidity</h3>
                    <div className="weather__value">
                    <span id="humidity">{weather.main.humidity}</span> %
                    </div>
                </div>
                </div>
                <div className="weather__inner">
                <div className="weather__section">
                    <h3 className="weather__title">Sunrise</h3>
                    <div className="weather__value">
                    <span id="sunrise">
                        {new Date(weather.sys.sunrise * 1000).getHours().toString().padStart(2, "0")}:
                        {new Date(weather.sys.sunrise * 1000).getMinutes().toString().padStart(2, "0")}
                    </span>
                    </div>
                </div>
                <div className="weather__section">
                    <h3 className="weather__title">Sunset</h3>
                    <div className="weather__value">
                    <span id="sunset">
                        {new Date(weather.sys.sunset * 1000).getHours().toString().padStart(2, "0")}:
                        {new Date(weather.sys.sunset * 1000).getMinutes().toString().padStart(2, "0")}
                    </span>
                    </div>
                </div>
                </div>
            </div>
        ) : null}
        </>
    )
}

export default CurrentWeather;