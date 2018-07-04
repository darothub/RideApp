import chai, { expect } from 'chai';

import chaiHttp from 'chai-http';

import request from 'supertest';

import server from '../index';

import controllers from '../controller/rideController';

chai.use(chaiHttp);

describe('API endpoints test', () => {
  describe('GET all rides home page /api/v1/rides', () => {
    it('should return all rides', (done) => {
      chai
        .request(server)
        .get('/api/v1/rides')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).not.equal({ message: undefined });
        });
      done();
    });
  });
});

describe('API endpoints test', () => {
  describe('root home page /api/v1', () => {
    it('should return home page', (done) => {
      chai
        .request(server)
        .get('/api/v1')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.equal('Home page!');
        });
      done();
    });
  });
});
