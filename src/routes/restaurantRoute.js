import express from 'express';
import controllers from '../controllers';

const router = express.Router();
const { getRestaurants, getSingleRestaurant } = controllers;

router.get('/', getRestaurants);
router.get('/:id', getSingleRestaurant);

export default router;
