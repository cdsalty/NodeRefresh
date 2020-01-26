const request = require('request');

// Goal attempting to achieve: Create a reusable function for getting the forecast
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const forecast = (latitude, longitude, callback) => {
  // callback = (error, data)
  const url = `https://api.darksky.net/forecast/5e8a54e1354605908f9c1d425506dea9/${latitude},${longitude}`;
  // next, trigger response that will get the specific location
  request({url: url, json: true}, (error, response) => {
    // response is there to symbolize that all the data we are trying to retrieve is inside response.
    if (error) {
      // check for low level errors
      callback('unable to connect to the weather service.', undefined);
    } else if (response.body.error) {
      // coordinate error such as not retrieving user's location, etc.
      callback('Sorry, Currently unable to find current location', undefined);
    } else {
      // on success and there is a forecast to provide
      let temp = response.body.currently.temperature;
      let rainChance = response.body.currently.precipProbability;
      const summary = response.body.daily.data[0].summary;
      callback(
        undefined,
        // `The overall summary for today is ${summary}. Currently, it's ${temp} degrees outside. Their is a ${rainChance}% of rain.`
        `${summary}. Currently, it's ${temp} degrees outside. Their is a ${rainChance}% of rain.`
      );
    }
  });
};

module.exports = forecast;

// callback("string text", undefined) or callback(undefined, "string text") is matching up with the
// request's (error, response) positioning
