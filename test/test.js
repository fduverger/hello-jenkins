/// <reference path="../app.d.ts" />
var request = require('supertest');
var app = require('../app');
describe('GET /', function () {
    it('respond with hello worl', function (done) {
        request(app).get('/').expect('hello world', done);
    });
});
