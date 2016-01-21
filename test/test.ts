/// <reference path="../app.d.ts" />

import request = require('supertest');
import mocha = require('mocha');
import app = require('../app');

describe('GET /', () => {
    it('respond with hello worl', (done) => {
        request(app).get('/').expect('hello world', done);
    });
});