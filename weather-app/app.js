const request = require('request'); // see 'all available options' on npm
const forecast = require('./utilities/forecast');
const geoCode = require('./utilities/geocode');

// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

// will return an error message: Error: Sorry, Currently unable to find current location
forecast(-75.7088, 'a44.1545', (error, data) => {
  console.log('Error:', error);
  console.log('Data returned:', data);
});
// will return data:
// Error undefined
// Data returned: It is currently -21.84 degrees outside with a 0.03% of rain. The overall summary for
// today is Foggy in the evening and overnight.
forecast(-75.7088, 44.1545, (error, data) => {
  console.log('Error', error);
  console.log('Data returned:', data);
});
