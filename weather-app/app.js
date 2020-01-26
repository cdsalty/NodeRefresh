const https = require('https');
const url =
  'https://api.darksky.net/forecast/5e8a54e1354605908f9c1d425506dea9/37.8267,-122.4233';

const request = https.request(url, (response) => {
  let data = '';

  response.on('data', (chunk) => {
    data = data + chunk.toString(); // with toString, we get 3 large buffers
    // data = the data + the string format of data
  });

  response.on('end', () => {
    // console.log(data);
    const body = JSON.parse(data);
    console.log(body);
  });
});
request.on('error', (error) => {
  console.log('an error', error);
});
request.end();
