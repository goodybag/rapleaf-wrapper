Rapleaf client
--------------

Just a thin request wrapper for rapleaf

#### Install

    npm install rapleaf

#### Usage

    var Rapleaf = require('rapleaf')
      , client  = new Rapleaf('a908DOTxP'); // Pass in a key

    client.queryByEmail('john.doe@hotmail.com', function(error, response, body) {
      if (error) {
        console.error('Error querying by email', error);
        return;
      }

      console.log('Response:', response); // HTTP response in JSON
      console.log('Body:', body); // { age: '35-44', gender: 'Male' }
    });

#### API

**new Rapleaf(apiKey)**

Create a new Rapleaf client

**queryByEmail(email, callback)**

  * email - string
  * callback - function(error, response, body)

**queryByMd5(md5, callback)**

 * md5 - string
 * callback - function(error, response, body)

**queryBySha1(sha1, callback)**

 * sha1 - string
 * callback - function(error, response, body)

#### Test

    npm test

#### License

**MIT**
