import { useState } from "react";

function CitySelect({city, cities, onSelect}) {

    const [citySelect, setCitySelect] = useState(city)

    return (
        <div className="select-wrapper">
            <select
                className="select"
                name="cityselect"
                id="cityselect"
                value={citySelect}
                onChange={(event) => {
                    setCitySelect(event.target.value)
                    onSelect(event.target.value)
                }}
            >
                {cities.map(city =>
                    <option key={city} value={city}>{city}</option>
                )}
            </select>
        </div>
    );
}

export default CitySelect;