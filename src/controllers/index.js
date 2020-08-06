import weatherController from './weatherController';
import restaurantController from './restaurantController';

const { getCurrentWeather, getCountries } = weatherController;
const { getRestaurants, getSingleRestaurant } = restaurantController;

export default {
  getCurrentWeather,
  getCountries,
  getRestaurants,
  getSingleRestaurant
}