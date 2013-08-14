/**
 * Rapleaf Client
 **/

var request = require('request');

var Rapleaf = function(key) {
  var self = this;

  this.key = key;
  this.options = {
    uri: 'https://personalize.rapleaf.com/v4/dr'
  , qs: {
      'api_key': key
    }
  , method: 'GET'
  , json: true
  };
};

Rapleaf.prototype.queryByEmail = function(email, callback) {
  this.options.qs.email = email;
  request(this.options, callback);
};

Rapleaf.prototype.queryByMd5 = function(md5, callback) {
  this.options.qs.md5 = md5;
  request(this.options, callback);
};

Rapleaf.prototype.queryBySha1 = function(sha1, callback) {
  this.options.qs.sha1 = sha1;
};

module.exports = Rapleaf;