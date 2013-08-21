/**
 * This module will intercept routes to a given url
 * and set up mock responses
 */
var Mocks = function(url) {
  this.profile = {
    'age':'21-24',
    'gender':'Male',
    'interests':{
      'Blogging':true,
      'High-End Brand Buyer':true,
      'Sports':true,
    },
    'education':'Completed Graduate School',
    'occupation':'Professional',
    'children':'No',
    'household_income':'75k-100k',
    'marital_status':'Single',
    'home_owner_status':'Rent'
  };

  this.errors = {
    'badRequest': 'API Key is not the correct length. Please make sure you are passing the correct value.'
  , 'unauthorized': 'Invalid API key.'
  };

  // Set up various mock responses
  this.api = require('nock')(url)

    // Valid email
    .get('/v4/dr?api_key=78ad9ddc21e3c220cc5da024b6dbe13c&email=john.doe%40hotmail.com')
    .reply(200, this.profile)

    // No profile found for email
    .get('/v4/dr?api_key=78ad9ddc21e3c220cc5da024b6dbe13c&email=unlikely.person%40abcdefg.com')
    .reply(200, {})
 
    // Valid email and name
    .get('/v4/dr?api_key=78ad9ddc21e3c220cc5da024b6dbe13c&email=prestonp08%40gmail.com&first=preston&last=pham')
    .reply(200, this.profile)
   
    // Valid md5 email
    .get('/v4/dr?api_key=78ad9ddc21e3c220cc5da024b6dbe13c&md5_email=1d5e02ee556557a5ff496990e606422c')
    .reply(200, this.profile)

    // Valid sha1 email
    .get('/v4/dr?api_key=78ad9ddc21e3c220cc5da024b6dbe13c&sha1_email=fc3ca05c6e64e56475578fe5fab8608681b93739')
    .reply(200, this.profile)

    // Invalid api key length
    .get('/v4/dr?api_key=fakekey&email=john.doe%40hotmail.com')
    .reply(400, this.errors.badRequest)

    // Invalid key
    .get('/v4/dr?api_key=00000000000000000000000000000000&email=john.doe%40hotmail.com')
    .reply(401, this.errors.unauthorized)

    // Missing key
    .get('/v4/dr?api_key=&email=john.doe%40hotmail.com')
    .reply(400, this.errors.badRequest);
};

module.exports = Mocks;
