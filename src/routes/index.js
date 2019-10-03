import express from 'express';
import weatherRoute from './weatherRoute';

const router = express.Router();

router.use('/', weatherRoute);

export default router;
