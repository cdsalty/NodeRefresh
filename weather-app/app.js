// const request = require('request'); // see 'all available options' on npm
const forecast = require('./utilities/forecast');
const geoCode = require('./utilities/geocode');

/*
// Need to make sure user can provide location without modifing the source code...
Goal: Accept location via command line interface
- access the command line argument without using yargs  (use argv)
- use the string value as the input for geocode
- only geocode if the user provides a location
- test with 2 locations...
*/
// console.log(process.argv);  --> shows me I need to use the 3rd item in the array...
const locationEntered = process.argv[2]; // add this into our geocode to replace 'atlanta'
if (!locationEntered) {
  console.log('Please enter a valid address');
} else {
  geoCode(locationEntered, (error, data) => {
    if (error) {
      return console.log(error);
    }
    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      // Show Location and the forecast
      // console.log(data.location);
      console.log(`The "current" Weather Report in ${data.location}:${forecastData}`);
    });
  });
}
// geoCode('Atlanta', (error, data) => {

// --------------------Chaining Callbacks-------------------------------

// geoCode('Atlanta', (error, data) => {
//   if (error) {
//     return console.log(error);
//   }
//   // console.log('error', error);
//   // console.log('data:', data);
//   // the input from forcast comes from the output of geocode
//   forecast(data.latitude, data.longitude, (error, forecastData) => {
//     // the data inside this callback will overshad the geoCode 'data'; changed to forcastData
//     if (error) {
//       return console.log(error);
//     }
//     // Show Location and the forecast
//     console.log(data.location);
//     console.log(forecastData);
//   });
// });

//          PROCESS.ARGV
