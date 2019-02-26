const request = require('supertest');
const app = require('../server/server.js');

describe('GET/menu', function () {
  test("It responds GET request", (done) => {
    request(app).get('/menu').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});