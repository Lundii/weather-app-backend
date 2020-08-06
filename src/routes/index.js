import express from 'express';
import weatherRoute from './weatherRoute';
import RestaurantRoute from './restaurantRoute';

const router = express.Router();

router.use('/', weatherRoute);
router.use('/restaurants', RestaurantRoute);

export default router;
