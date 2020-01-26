// const request = require('request'); // see 'all available options' on npm
const forecast = require('./utilities/forecast');
const geoCode = require('./utilities/geocode');

// Chaining Callbacks

geoCode('Atlanta', (error, data) => {
  if (error) {
    return console.log(error);
  }
  // console.log('error', error);
  // console.log('data:', data);
  // the input from forcast comes from the output of geocode
  forecast(data.latitude, data.longitude, (error, forecastData) => {
    // the data inside this callback will overshad the geoCode 'data'; changed to forcastData
    if (error) {
      return console.log(error);
    }
    // Show Location and the forecast
    console.log(data.location);
    console.log(forecastData);
  });
});

// Need to make sure user can provide location without modifing the source code...
/*
Goal: Accept location via command line interface
- access the command line argument with using yargs
- use the string value as the input for geocode
- only geocode if the user provides a location
- test with 2 locations...
*/
