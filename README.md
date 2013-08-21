Rapleaf client
==============
Just a thin request wrapper for [rapleaf](http://www.rapleaf.com/developers/personalization-api/personalization-api-documentation/)

Install
-------

    npm install rapleaf

Usage
-----

    var Rapleaf = require('rapleaf')
      , client  = new Rapleaf('a908DOTxP'); // Pass in a key

    client.queryByEmail('john.doe@hotmail.com', function(error, response, body) {
      if (!error) {
        console.log(body); // { age: '35-44', gender: 'Male' }
      }
    });
    
    // Narrow results by providing 'postal' or 'optional' parameters inside of an options object
    var options = {
      first: 'John'
    , last: 'Doe'
    , show_available: true
    };
    client.queryByEmail('john.doe@hotmail.com', options, function(error, response, body) {
      if (!error) {
        console.log(body); // { age: '35-44', gender: 'Male' }
      }
    });

API
---

* [new Rapleaf(apiKey)](#new-rapleafapikey)
* [queryByEmail(email, callback)](#querybyemailemail-callback)
* [queryByMd5(md5, callback)](#querybymd5md5-callback)
* [queryBySha1(sha1, callback)](#querybysha1sha1-callback)

#### new Rapleaf(apiKey)

Create a new Rapleaf client

#### queryByEmail(email, [options], callback)

  * email - string
  * options - object (postal or optional parameters such as first, last name, zip)
  * callback - function(error, response, body)

#### queryByMd5(md5, [options], callback)

  * md5 - string
  * options - object
  * callback - function(error, response, body)

#### queryBySha1(sha1, [postal], callback)

  * sha1 - string
  * options - object
  * callback - function(error, response, body)

Test
----

    npm test

License
-------

**MIT**
