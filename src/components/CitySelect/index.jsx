function CitySelect({cities, onChange}) {

    return (
        <>
            <div className="button-group">
                {cities.map(cityName =>
                <button 
                    key={cityName}
                    className="button"
                    onClick={() => {
                        onChange(cityName)
                    }}
                >
                    {cityName}
                </button>
                )}
            </div>
        </>
    );
}

export default CitySelect;