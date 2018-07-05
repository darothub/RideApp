import express from 'express';

import controllers from '../controller/rideController';

const router = express.Router();

router.post('/api/v1/rides', controllers.createRide);

router.get('/api/v1/rides', controllers.getAllRides);

router.get('/api/v1/ride/:id', controllers.getRideById);

router.post('/api/v1/rides', controllers.createRide);

router.post('/api/v1/ride/:id/:request', controllers.postRideRequest);

export default router;
