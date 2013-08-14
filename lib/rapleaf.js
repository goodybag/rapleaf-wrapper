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
  this.options.qs.md5_email = md5.toLowerCase().trim();
  request(this.options, callback);
};

Rapleaf.prototype.queryBySha1 = function(sha1, callback) {
  this.options.qs.sha1_email = sha1.toLowerCase().trim();
  request(this.options, callback);
};

module.exports = Rapleaf;
