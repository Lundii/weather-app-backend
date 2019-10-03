import rp from 'request-promise'

const getCurrentWeather = async (req, res) => {
  const { cityName, countryCode  } = req.query;
  const APPID = process.env.APPID;
  try{
    const weatherAPI = `http://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&APPID=${APPID}`;
    const getWeather = await rp(weatherAPI);
    const currrentWeather = JSON.parse(getWeather);
    const { dt, weather, main, wind } = currrentWeather;
    res.status(200).json({
      date: dt,
      main,
      weather,
      wind,
    });
  } catch(error) {
    res.status(500).json({
      error: error
    })
  }
}

export default {
  getCurrentWeather
}