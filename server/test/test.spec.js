import chai, { expect, assert } from 'chai';

import chaiHttp from 'chai-http';

import request from 'supertest';

import server from '../index';

import func from '../controller/rideController';

chai.use(chaiHttp);

describe('/api/v1/rides', () => {
  it('should return all rides', (done) => {
    request(server)
      .get('/api/v1/rides')
      .set('Accept', 'application/json')
      .expect(200)
      .expect(func.rides)
      .end(done);
  });
});
