import express from 'express';

import func from '../controller/rideController';

const router = express.Router();

router.post('/api/v1/rides', func.createRide);

router.get('/api/v1/rides', func.getAllRides);

router.get('/api/v1/ride/:id', func.getRideById);

router.post('/api/v1/rides', func.createRide);

export default router;
