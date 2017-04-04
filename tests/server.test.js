const server = require('../src/server.js');
const tape = require('tape');
const inject = require('./inject.js');

// Example test for '/string' endpoint - (failing)
tape('check string handler', t => {
  const options = {
    path: '/string',
    method: 'GET',
    host: 'localhost',
    port: '4000',
  };
  inject(options, response => {
    t.equal(response.payload, 'Returns a string', '/string handler works!');
    t.end();
  });
});

// Write your tests here


tape('check the route', (t) => {
  var options = {
    path: '/',
    method: 'GET'
  }
  inject(options, (res) => {
    t.equal(res.statusCode, 200, 'Response status code correct');
    t.end();
  });
});

/**** Passing tests using Hapi's server.inject for inspiration
tape('check the route', (t) => {
  var options = {
    path: '/object',
    method: 'GET',
    headers: {'content-type': 'text'}
  }
  server.inject(options, (res) => {
    t.equal(res.statusCode, 400, 'checks handler checks for valid header')
    t.end()
  })
})
tape('check the home handler', (t) => {
  server.inject('/home', (res) => {
    t.equal(res.payload, 'home', 'handler is correct')
    t.end()
  })
})
****/
