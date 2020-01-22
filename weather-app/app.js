const request = require('request'); // see 'all available options' on npm

const url =
  'https://api.darksky.net/forecast/5e8a54e1354605908f9c1d425506dea9/37.8267,-122.4233';
const spainishUrl =
  'https://api.darksky.net/forecast/5e8a54e1354605908f9c1d425506dea9/37.8267,-122.4233?lang=es';

/*
Exercise A: 
  - Print small forcast to user
  - Print: "it is currently  58.5 degrees out; There is 0% chance of rain"
 
request({url: url, json: true}, (error, response) => {
  // by setting json to true, request will take care of parsing the json
  // console.log(response); // logs all the data we want to parse and access. in the body is the DATA
  // console.log(data.currently); // currrently is 'current forecast inforamtion'
  // console.log(response.body.currently); // all because of setting json to true
  let temp = response.body.currently.temperature;
  let rainChance = response.body.currently.nearestStormBearing;
  const summary = response.body.daily.data[0].summary;
  console.log(
    `It is currently ${temp} degrees outside with a ${rainChance}% of rain. The overall summary for today is ${summary}`
  );
});

 */

// ------------------------------------------------------------------------------------
/* 

Part II: HTTP Request Challenge
//    - Geocoding and Using an API (address->lat/long->weater)
    //- use reverse geocoding: provide an address and get lat/long back

Exercise: B
Goal: print the lat/long for los angeles
- use the link with mapbox inside the console: https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY2Rzb2x0aXMiLCJhIjoiY2s1b3Nwb2N6MGFnajNscGNlMG9yajFjNiJ9.Tx0JlVZRjDuAsvb7xSfiMg
- have the request module parse it as json
- print both the lat and long to terminal
- test code


const geoCodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY2Rzb2x0aXMiLCJhIjoiY2s1b3Nwb2N6MGFnajNscGNlMG9yajFjNiJ9.Tx0JlVZRjDuAsvb7xSfiMg`;
request({url: geoCodeUrl, json: true}, (error, response) => {
  const latitude = response.body.features[0].center[1]; // center is an array of lat and long, 0=long
  const longitude = response.body.features[0].center[0];
  console.log(
    `The latitude is approx ${latitude} and the longitude is appprox ${longitude}`
  );
});
*/

/*
Part III: Error Handling
- continued with examples from maplink
const geoCodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY2Rzb2x0aXMiLCJhIjoiY2s1b3Nwb2N6MGFnajNscGNlMG9yajFjNiJ9.Tx0JlVZRjDuAsvb7xSfiMg`; 

- Need to consider the error, where it's coming from and then how to handle it
    - error could be from server OR from the user such as not enough information because of no latitude provided, etc.
      - make use of error code by looking at the response and seeing if there is an error code.


request({url: url, json: true}, (error, response) => {
  if (error) {
    console.log('unable to communciate to server');
  } else if (response.body.error) {
    console.log('Unable to find location');
  } else {
    let temp = response.body.currently.temperature;
    let rainChance = response.body.currently.precipProbability;
    const summary = response.body.daily.data[0].summary;
    console.log(
      `It is currently ${temp} degrees outside with a ${rainChance}% of rain. The overall summary for today is ${summary}`
    );
  }
});

EXERCISE C: 
CREATE ERROR HANDLING FOR THE GEOLOCATION URL
1. setup error handler for low level error such as no internet connection
2. test by disabling wifi
3. setup error handling for no matching results
4. test by altering search term
*/

request({url: url, json: true}, (error, response) => {
  if (error) {
    console.log('check internet connection');
  } else if (error) {
    console.log('Not enough data or the data entered is incorrect');
  } else {
    let temp = response.body.currently.temperature;
    let rainChance = response.body.currently.precipProbability;
    const summary = response.body.daily.data[0].summary;
    console.log(
      `It is currently ${temp} degrees outside with a ${rainChance}% of rain. The overall summary for today is ${summary}`
    );
  }
});

const geoCodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY2Rzb2x0aXMiLCJhIjoiY2s1b3Nwb2N6MGFnajNscGNlMG9yajFjNiJ9.Tx0JlVZRjDuAsvb7xSfiMg`;
request({url: geoCodeUrl, json: true}, (error, response) => {
  if (error) {
    console.log('check internet connection');
  } else if (response.body.features.length === 0) {
    console.log('Please try your search again');
  } else {
    const latitude = response.body.features[0].center[1]; // center is an array of lat and long, 0=long
    const longitude = response.body.features[0].center[0];
    console.log(
      `The latitude is approx ${latitude} and the longitude is appprox ${longitude}`
    );
  }
});
