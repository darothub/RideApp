
import express from 'express';

import func from '../controller/rideappController';

const router = express.Router();

router.get('/api/v1', (req, res) => res.send('Home page'));
router.get('/api/v1/rides', func.getAllRides);
router.post('/api/v1/rides', func.createRide);

export default router;
