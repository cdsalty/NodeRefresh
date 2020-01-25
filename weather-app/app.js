// const request = require('request'); // see 'all available options' on npm
const forecast = require('./utilities/forecast');
const geoCode = require('./utilities/geocode');

geoCode('Atlanta', (error, data) => {
  console.log('error', error);
  console.log('data:', data);
});

forecast(-75.7088, 44.1545, (error, data) => {
  console.log('Error', error);
  console.log('Data returned:', data);
});
