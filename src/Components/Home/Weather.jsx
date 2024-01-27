import { useEffect, useState } from "react"; 
{/*import moment from "moment";*/}

function Weather(){

    const [location, setLocation] = useState("Fredericksburg");
    const [lat, setLat] = useState(38.3032);
    const [long, setLong] = useState(-77.4605);
    const [temp, setTemp] = useState();
    const [feels, setFeels] = useState();
    const [sunrise, setSunrise] = useState();
    const [sunset, setSunset] = useState();
    const [high, setHigh] = useState();
    const [low, setLow] = useState();
    const [weatherCode, setWeatherCode] = useState();

    
    const url_weather = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,apparent_temperature,weather_code&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York&forecast_days=1`;
    const url_coord = `https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=1&language=en&format=json`;
     
    
    {/*Get the coordinates for a city*/}
    const coordFetch = async () => {

        const result = await fetch(url_coord)
        const new_coord = await result.json()
        const latitude = new_coord.results[0].latitude
        setLat(latitude)
        const longitude = new_coord.results[0].longitude
        setLong(longitude)

        fetchWeather();
        
        
    }

    useEffect(() => {
        coordFetch();
    }, [])
    
    const fetchWeather = async () => {

        const data = await fetch(url_weather);
        const new_weather = await data.json();
        console.log(new_weather)
        
        setTemp(new_weather.current.temperature_2m) 
        setFeels(new_weather.current.apparent_temperature)
        setSunrise(new_weather.daily.sunrise)
        setSunset(new_weather.daily.sunset)
        setHigh(new_weather.daily.temperature_2m_max)
        setLow(new_weather.daily.temperature_2m_min)

        if (new_weather.current.weather_code === 0) {
            setWeatherCode('🌞')
        } else if (new_weather.current.weather_code in [1,2,3]) {
            setWeatherCode('⛅')
        } else if (new_weather.current.weather_code in [45, 48]) {
            setWeatherCode('🌫️')
        } else if (new_weather.current.weather_code in [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82]) {
            setWeatherCode('🌧️')
        } else if (new_weather.current.weather_code in [95, 96, 99]) {
            setWeatherCode('⛈️')
        } else if (new_weather.current.weather_code in [71, 73, 75, 77, 85, 86]) {
            setWeatherCode('❄️')
        } else {
            setWeatherCode('')
        }

    }

    return (

        <>
        <div className="weatherHeading">
            <h2>Weather</h2>
        </div>
        <div className="weatherContainer">
            <div>
                <span className="weatherEmoji">{weatherCode}</span>
            </div>
            <div className="weatherCity">
                <h3>{location}</h3>
            </div>
            <div>
                <input type="search" 
                placeholder="Search City" 
                className="search-bar"
                value={location}
                onChange={(e) => setLocation(e.target.value)}/>
                <button type="submit" className="search-button" onClick={coordFetch}>Search</button>
            </div>
                <div>
                    <span className="weatherDataName">Temperature<span className="weatherData">{temp}</span></span>
                    <span className="weatherDataName">Feels Like <span className="weatherData">{feels}</span></span>
                    <span className="weatherDataName">High<span className="weatherData">{high}</span></span>
                    <span className="weatherDataName">Low <span className="weatherData">{low}</span></span>
                    <span className="weatherDataName">Sunrise <span className="weatherData">{sunrise}</span></span>
                    <span className="weatherDataName">Sunset <span className="weatherData">{sunset}</span></span>
                </div>
            </div>
        </>
    )
}

export default Weather