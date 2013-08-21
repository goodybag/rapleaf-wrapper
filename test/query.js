/**
 * Test various query commands
 **/

var assert = require('assert')
  , Rapleaf = require('../lib/rapleaf')
  , testKey = '78ad9ddc21e3c220cc5da024b6dbe13c'
  , mocks = require('../lib/mocks')('https://personalize.rapleaf.com');

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

    it('should return empty for unknown email', function(done) {
      var client = new Rapleaf(testKey);
      client.queryByEmail('unlikely.person@abcdefg.com', function(error, response, body) {
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
  describe('query by email and first last name', function() {
    it('should return result', function(done) {
      var client = new Rapleaf(testKey);
      client.queryByEmail('prestonp08@gmail.com', { first: 'preston', last: 'pham' }, function(error, response, body) {
        assert(response.statusCode === 200);
        assert(!error);
        done();
      });
    });
  });
  describe('query by md5 hashed email', function() {
    it('should return valid response', function(done) {
      var client = new Rapleaf(testKey);
      // MD5 Hash of john.doe@hotmail.com
      client.queryByMd5('1D5E02EE556557A5FF496990E606422C', function(error, response, body) {
        assert(response.statusCode === 200);
        assert(!error);
        done();
      });
    });
  });

  describe('query by sha1 hashed email', function() {
    it('should return valid response', function(done) {
      var client = new Rapleaf(testKey);
      // SHA1 Hash of john.doe@hotmail.com
      client.queryBySha1('fc3ca05c6e64e56475578fe5fab8608681b93739', function(error, response, body) {
        assert(response.statusCode === 200);
        assert(!error);
        done();
      });
    });
  });
});
