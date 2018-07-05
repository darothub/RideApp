import chai, { expect } from 'chai';

import chaiHttp from 'chai-http';

import assertArrays from 'chai-arrays';

import controllers from '../controller/rideController';

import server from '../index';

chai.use(chaiHttp);
chai.use(assertArrays);

describe('API root path /api/v1', () => {
  before(() => {
    console.log('now we are testing');
  });

  after(() => {

  });
  it('should return home page', () => {
    chai.request(server)
      .get('/api/v1')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
      }).catch((error) => {
        console.log(error);
      });
  });
});

describe('API root path /api/v1/rides', () => {
  before(() => {
  });

  after(() => {

  });
  it('should return all rides', (done) => {
    chai.request(server)
      .get('/api/v1/rides')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
      }).catch((error) => {
        console.log(error);
      });
    done();
  });
  it('should create/add new ride', (done) => {
    chai.request(server)
      .post('api/v1/rides')
      .send({
        rideId: 3,
        driverName: 'name',
        destination: 'Ajah',
        departure: 'Abule-egba',
        departureDate: new Date().toLocaleDateString(),
        departureTime: new Date().toLocaleTimeString(),
        request: [],
      })
      .then((res) => {
        expect(res).to.have.status(201);
        expect(res).to.be.an('object')
        expect(res.body.results).to.be.array().that.includes('Ajah');
      })
      .catch((error) => {
        console.log(error);
      });
    done();
  });
});

describe('API root path /api/v1/1', () => {
  before(() => {
    console.log('now we are testing');
  });

  after(() => {
    console.log(({ message: 'Ride found' }));
  });
  it('should return a ride by id:1', () => {
    chai.request(server)
      .get('/api/v1/ride/1')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
      }).catch((error) => {
        console.log(error);
      });
  });
});
describe('API root path /api/v1/ride/:id/request', () => {
  before(() => {
    console.log('now we are testing');
  });

  after(() => {
    console.log(({ message: 'Request sent' }));
  });
  it('should send a ride request', () => {
    chai.request(server)
      .post('/api/v1/ride/:id/request')
      .send({ id: 1, request: 'join' })
      .then((res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.include({ request: ['join'] });
      })
      .catch((error) => {
        console.log(error);
      });
  });
});
