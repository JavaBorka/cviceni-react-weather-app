import { useEffect, useState } from "react";

import { getDateFromUnix, getDayFromUnix } from "../helpers";


function Forecast({city}) {

    const [weather, setWeather] = useState(null)

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${city}&appid=f6e5f0e49d538dd24bf7b59890e5efc2`)
        .then(response => response.json())
        .then(data => {
            setWeather([
                data.list[0],
                data.list[8],
                data.list[16],
                data.list[24],
                data.list[32],
            ])
        })
    }, [city])

    return (
        <>
            {weather !== null ? (
                <div className="weather__forecast" id="predpoved">
                    {weather.map(day => 
                        <div key={day.dt} className="forecast">
                            <div className="forecast__day">{getDayFromUnix(day.dt)}, {getDateFromUnix(day.dt)}</div>
                            <div className="forecast__icon">
                                <img
                                    src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                                    alt={day.weather[0].description}
                                    style={{ height: "100%" }}
                                />
                            </div>
                            <div className="forecast__temp">{day.main.temp.toFixed(1)} °C</div>
                        </div>
                    )}
                </div>
            ) : null}
        </>
    );
}

export default Forecast;