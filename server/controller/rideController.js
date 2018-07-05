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

const getAllRides = (req, res) => { res.status(200).send({ data: rides }); };

const createRide = (req, res) => {
  if (req.body === {}) {
    res.status(400).send({ message: 'Your request is empty' });
  }
  rides.push(req.body);
  res.status(201).send({ message: 'Your request has been created' });
};

const getRideById = (req, res) => {
  rides.forEach((driver) => {
    if (driver.rideId === req.params.id) {
      res.status(200).send({ data: driver });
    }
  });
};

const postRideRequest = (req, res) => {
  rides.forEach((ride) => {
    if (ride.rideId === req.params.id) {
      ride.request.push(req.params.request);
      res.status(201).send({ message: 'Request sent' });
    }
  });
};

const controllers = {
  getAllRides,
  createRide,
  getRideById,
  postRideRequest,
  rides,
};
export default controllers;
