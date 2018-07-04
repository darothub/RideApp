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
  if (req.body) {
    rides.push(req.body);
    res.status(201).send({ message: 'Your request has been created' });
  }
  res.end();
};

const getRideById = (req, res) => {
  rides.forEach((driver) => {
    if (driver.rideId !== req.params.id) {
      res.status(404).json('Success!');
    }
    res.send(driver);
  });
  res.end();
};

const controllers = {
  getAllRides,
  createRide,
  getRideById,
  rides,
};
export default controllers;
