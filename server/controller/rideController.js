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
    return res.status(400).send({ message: 'Your request is empty' });
  }
  rides.push(req.body);
  return res.status(201).send({ message: 'Your request has been created' });
};

const getRideById = (req, res) => {
  rides.forEach((driver) => {
    if (driver.rideId === req.params.id) {
      return res.status(200).json('Success!', driver);
    }
    return res.status(404).json('An error occured');
  });
};

const controllers = {
  getAllRides,
  createRide,
  getRideById,
  rides,
};
export default controllers;
