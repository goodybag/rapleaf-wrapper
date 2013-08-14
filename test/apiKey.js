/**
 * Test Rapleaf API key
 **/

var assert = require('assert')
  , Rapleaf = require('../lib/rapleaf');

describe('rapleaf api key', function() {
  describe('invalid keys', function() {
    it('return error for invalid length', function(done) {
      var client = new Rapleaf('fakekey');
      client.queryByEmail('john.doe@hotmail.com', function(error, response, body) {
        assert(!error);
        assert(response.statusCode === 400); // Bad Request
        assert(body === 'API Key is not the correct length. Please make sure you are passing the correct value.');
        done();
      });
    });

    it('return error for invalid key', function(done) {
      var client = new Rapleaf('00000000000000000000000000000000');
      client.queryByEmail('john.doe@hotmail.com', function(error, response, body) {
        assert(!error);
        assert(response.statusCode === 401); // Unauthorized
        assert(body === 'Invalid API key.');
        done();
      });
    });

    it('return error for missing key', function(done) {
      var client = new Rapleaf();
      client.queryByEmail('john.doe@hotmail.com', function(error, response, body) {
        assert(!error);
        assert(response.statusCode === 400); // Bad Request
        assert(body === 'API Key is not the correct length. Please make sure you are passing the correct value.');
        done();
      });
    });
  });
});


