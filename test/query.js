/**
 * Test various query commands
 **/

var assert = require('assert')
  , Rapleaf = require('../lib/rapleaf')
  , testKey = 'dsapodksaopdkada';

describe('rapleaf queries', function() {
  describe('query by email', function() {

    it('should return valid response', function(done) {
      var client = new Rapleaf(testKey);
      client.queryByEmail('john.doe@hotmail.com', function(error, response, body) {
        assert(response.statusCode === 200);
        assert(!error);
        done();
      });
    });
    
    it('should return empty for invalid email', function(done) {
      var client = new Rapleaf(testKey);
      client.queryByEmail('dsadsaoidqiodhqo.doe@dsadsadwqrwq.com', function(error, response, body) {
        assert(response.statusCode === 200);
        assert(!error);

        // Check body is an empty object, check body's properties
        if (typeof body === 'object') {
          for(var prop in body) {
            if (body.hasOwnProperty(prop))
              assert(false);
          }
        }
        done();
      });
    });

  });
});


