import express from 'express';
import controllers from '../controllers';

const router = express.Router();
const { getCurrentWeather, getCountries } = controllers;

// get current weather report
router.get('/current-weather', getCurrentWeather);
router.get('/countries', getCountries)

export default router;
