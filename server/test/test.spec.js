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
          expect(res.body).to.deep.equal({ message: 'Home page!' });
        });
      done();
    });
  });
});

describe('API endpoints test', () => {
  describe('get rider by ID /api/v1/ride/:id', () => {
    it('rider with the id equal 0', (done) => {
      chai
        .request(server)
        .get('/api/v1/ride/0')
        .end((err, res) => {
          expect(res.status).to.equal(404);
          expect(res.body).to.equal({ message: 'ride not found' });
        });
      done();
    });
  });
});

describe('API endpoints test', () => {
  describe('get rider by ID /api/v1/ride/:id', () => {
    it('rider with the id equal 1', (done) => {
      chai
        .request(server)
        .get('/api/v1/ride/1')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.equal('Success!');
        });
      done();
    });
  });
});
