import rp from 'request-promise';
import { transform } from '../utils';

/**
 * controller to get the current weather of a city
 * @param {object} req - the request object 
 * @param {object} res - the response object
 * @return - the current weather details
 */
const getCurrentWeather = async (req, res) => {
  const { cityName, countryCode  } = req.query;
  const APPID = process.env.APPID;
  try{
    const weatherAPI = `http://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&APPID=${APPID}`;
    const getWeather = await rp(weatherAPI);
    const currrentWeather = JSON.parse(getWeather);
    const data = transform(currrentWeather);
    res.status(200).json(data);
  } catch(error) {
    res.status(500).json({
      error: error
    })
  }
}

const getCountries = async (req, res) => {
  try {
    const countries = await rp('http://country.io/names.json');
    res.send(countries);
  } catch(error) {
    res.status(500).json({
      error: error
    })
  }
}
export default {
  getCurrentWeather, 
  getCountries
}