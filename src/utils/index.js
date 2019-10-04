let id = 1;

export const transform = (weatherData) => {
  
    const { dt, weather, main, wind, name, sys } = weatherData;
    const date = new Date(dt*1000);
    const sunrise = new Date(sys.sunrise * 1000);
    const sunset = new Date(sys.sunset * 1000);
    const data = {
      id,
      date: date.toDateString(),
      city: name,
      countryCode: sys.country,
      highTemp:  parseInt(main.temp_max - 273),
      lowTemp: parseInt(main.temp_min - 273),
      mainWeather: weather[0].main,
      description: weather[0].description,
      icon: weather[0].icon,
      moreData: {
        pressure: main.pressure,
        humidity: main.humidity,
        windSpeed: wind.speed,
        sunrise: sunrise.toLocaleTimeString(),
        sunset: sunset.toLocaleTimeString()
      }
    };
    id++;
    return data;
};
