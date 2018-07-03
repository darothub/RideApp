const rides = [{
  rideId: '1',
  driverName: 'Darot',
  destination: 'Ajah',
  departure: 'Abule-egba',
  departureDate: new Date().toLocaleDateString(),
  departureTime: new Date().toLocaleTimeString(),
  request: [],
},
{
  rideId: '2',
  driverName: 'Tosin',
  destination: 'Ajah',
  departure: 'Oshodi',
  departureDate: new Date().toLocaleDateString(),
  departureTime: new Date().toLocaleTimeString(),
  request: [],
},

];

const getAllRides = (req, res) => { res.send(rides); };
const createRide = (req, res) => {
  if (req.body === {}) {
    res.sendStatus(400);
  }
  rides.push(req.body);
  res.sendStatus(201);
};
const getRideById = (req, res) => {
  rides.forEach((i) => {
    if (i.rideId === req.params.id) {
      res.send(i);
    }
  });
};

const postRideRequest = (req, res) => {
  rides.forEach((i) => {
    if (i.rideId === req.body.id) {
      i.request.push(req.body.request);
    }
  });
  res.sendStatus(201);
};

const func = {
  getAllRides,
  createRide,
  getRideById,
  postRideRequest,
};
export default func;
