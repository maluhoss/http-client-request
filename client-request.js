var request = require("request");
var fs = require("fs");

request('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function(err) {
    throw err;
  })
  .on('response', function(response) {
    console.log('Request Sent!');
    console.log('Downloading picture...')
    console.log(`Status Code: ${response.statusCode}, ${response.statusMessage}, ${response.headers['content-type']}`);
    console.log('Download complete!')
  })
  .pipe(fs.createWriteStream('./future.jpg'))