const rides = [{
  driverName: 'Darot',
  destination: 'Ajah',
  departure: 'Abule-egba',
  departureDate: new Date().toLocaleDateString(),
  departureTime: new Date().toLocaleTimeString(),
  request: [],
}];

const createRide = (req, res) => {
  if (req.body === {}) {
    res.send('Error: You have entered nothing');
  }
  rides.push(req.body);
  res.sendStatus(201);
};

const getAllRides = (req, res) => res.send(rides);

const func = { createRide, getAllRides };

export default func;
