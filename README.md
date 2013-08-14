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

API
---

* [new Rapleaf(apiKey)](#new-rapleafapikey)
* [queryByEmail(email, callback)](#querybyemailemail-callback)
* [queryByMd5(md5, callback)](#querybymd5md5-callback)
* [queryBySha1(sha1, callback)](#querybysha1sha1-callback)

#### new Rapleaf(apiKey)

Create a new Rapleaf client

#### queryByEmail(email, callback)

  * email - string
  * callback - function(error, response, body)

#### queryByMd5(md5, callback)

 * md5 - string
 * callback - function(error, response, body)

#### queryBySha1(sha1, callback)

 * sha1 - string
 * callback - function(error, response, body)

Test
----

    npm test

License
-------

**MIT**
