const request = require('request');

const geoCode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiY2Rzb2x0aXMiLCJhIjoiY2s1b3Nwb2N6MGFnajNscGNlMG9yajFjNiJ9.Tx0JlVZRjDuAsvb7xSfiMg`;

  request({url: url, json: true}, (error, response) => {
    // write an 'if' statement that will determine how things went. if that went well or not....f
    if (error) {
      // make first reference to our 'callback' if there is an error;
      callback('unable to connect to local server', undefined);
    } else if (response.body.features.length === 0) {
      // if I don't get any search results, there is a problem.
      callback('unable to find location, try again', undefined);
    } else {
      callback(undefined, {
        // this should be sent back as the data;
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name
      });
    }
  });
};

module.exports = geoCode;
