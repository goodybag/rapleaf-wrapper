/**
 * Rapleaf Client
 */
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

  this.copyOptions = function(options) {
    for (key in options) {
      this.options.qs[key] = options[key];
    }
  };
};

Rapleaf.prototype.queryByEmail = function(email, postal, callback) {
  this.options.qs.email = email;
  if (typeof postal === 'function') {
    callback = postal;
  } else {
    this.copyOptions(postal);
  }

  request(this.options, callback);
};

Rapleaf.prototype.queryByMd5 = function(md5, postal, callback) {
  this.options.qs.md5_email = md5.toLowerCase().trim();
  if (typeof postal === 'function') {
    callback = postal;
  } else {
    this.copyOptions(postal);
  }
  request(this.options, callback);
};

Rapleaf.prototype.queryBySha1 = function(sha1, postal, callback) {
  this.options.qs.sha1_email = sha1.toLowerCase().trim();
  if (typeof postal === 'function') {
    callback = postal;
  } else {
    this.copyOptions(postal);
  }
  request(this.options, callback);
};

module.exports = Rapleaf;
