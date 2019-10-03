import express from 'express';
import controllers from '../controllers';

const router = express.Router();
const { getCurrentWeather } = controllers;

// get current weather report
router.get('/current-weather', getCurrentWeather);

export default router;
