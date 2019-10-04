# Weather-app-backend   [![Build Status](https://travis-ci.com/Lundii/weather-app-backend.svg?branch=develop)](https://travis-ci.com/Lundii/weather-app-backend)  [![Coverage Status](https://coveralls.io/repos/github/Lundii/weather-app-backend/badge.svg?branch=develop)](https://coveralls.io/github/Lundii/weather-app-backend?branch=develop)

#### A simple application to get the current weather report of a city across the world 
## APIS

*  Get the current weather report of a city `GET /api/v1/current-weather?cityName={}&countryCode={}`
  Reponse body 
  ```
  {
      id: 'integer',
      date: 'string',
      city: 'string',
      countryCode: 'string',
      highTemp:  'integer',
      lowTemp: 'integer',
      mainWeather: 'string',
      description: 'string',,
      icon: 'string',,
      moreData: {
        pressure: 'integer',
        humidity: 'integer',
        windSpeed: 'number',
        sunrise: 'string',
        sunset: 'string'
      }
   }
  ```
  
 * Get all countries in the word and their codes `GET /api/v1/countries`
 Response body 
 ```
 {
   {countryCode): {countryName}
   ...
 }
 ```
