// const request = require('request'); // see 'all available options' on npm

const url =
  'https://api.darksky.net/forecast/5e8a54e1354605908f9c1d425506dea9/37.8267,-122.4233';
const spainishUrl =
  'https://api.darksky.net/forecast/5e8a54e1354605908f9c1d425506dea9/37.8267,-122.4233?lang=es';

// by setting json to true, which will have 'request' parse the information as json
// I dont need to parse
/*
Goal: Print small forcast to user
  - Print: "it is currently  58.5 degrees out; There is 0% chance of rain"
  */
request({url: url, json: true}, (error, response) => {
  // console.log(response); // logs all the data we want to parse and access. in the body is the DATA
  // const data = JSON.parse(response.body);
  // console.log(data.currently); // currrently is 'current forecast inforamtion'
  // console.log(response.body.currently); // all because of setting json to true
  let temp = response.body.currently.temperature;
  let rainChance = response.body.currently.nearestStormBearing;
  const summary = response.body.daily.data[0].summary;
  console.log(
    `It is currently ${temp} degrees outside with a ${rainChance}% of rain. The overall summary for today is ${summary}`
  );
});

/*
the json responded back as below with currently through flags as different objects, seperators
{
latitude: 37.8267,
longitude: -122.4233,
timezone: "America/Los_Angeles",
currently: {},
minutely: {},
hourly: {},
daily: {},
alerts: [],
flags: {},
offset: -8
}
*/

// request(url: url, function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

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
*/
// a) define the url and assign it to a variable
const geoCodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY2Rzb2x0aXMiLCJhIjoiY2s1b3Nwb2N6MGFnajNscGNlMG9yajFjNiJ9.Tx0JlVZRjDuAsvb7xSfiMg`;
// b) fire off request to the options object, the url and set json to true
request({url: geoCodeUrl, json: true}, (error, response) => {
  // console.log(response.body); // start with looking inside response.body
  // c) print lat and long
  const latitude = response.body.features[0].center[1]; // center is an array of lat and long, 0=lat
  // console.log(latitude);
  const longitude = response.body.features[0].center[0];
  console.log(
    `The latitude is approx ${latitude} and the longitude is appprox ${longitude}`
  );
});

/*
_______________________   CARRYING OVER NOTES FOR FRESH PAGE TO WORK WITH     _____________________________
*/

/*
const url =
  'https://api.darksky.net/forecast/5e8a54e1354605908f9c1d425506dea9/37.8267,-122.4233';
const spainishUrl =
  'https://api.darksky.net/forecast/5e8a54e1354605908f9c1d425506dea9/37.8267,-122.4233?lang=es';

const geoCodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY2Rzb2x0aXMiLCJhIjoiY2s1b3Nwb2N6MGFnajNscGNlMG9yajFjNiJ9.Tx0JlVZRjDuAsvb7xSfiMg`;

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
*/

/*
 ** ** CALLBACKS ** **
Goal: Use the callback pattern

EXERCISE D:

1. Define an add function that accepts the correct arguments
2. Use setTimeout to simulate a 2 second delay
3. After 2 seconds are up, call the callback function with the sum
4. Test your work!
*/
// add(1, 4, (sum) => {
//   console.log(sum); // Should print: 5
// });

// thinking... add takes in 3 arguements, 2 numbers and a "callbackFunction" function that later will be
// referenced with by calling calling 'sum'

const add = (x, y, callbackFunction) => {
  setTimeout(() => {
    // queue
    callbackFunction(x + y); // this will not run until 3 secs passes, callback(x+y)
  }, 3000);
};
// add(1, 4, (sum) => {
//   // sum represents the 'callback' function
//   console.log(sum); // Should print: 5
// });

/* 
EXERCISE D:

Callback Challenge:
- Using both apis, first get the address(lat and long). Then use that information to retrieve the current
  location's weather; Once I have the latitude and longitude back, I will then use a callback that I referenced
  as 'callback'
- encodeURIComponent(address); may be required... 

*/
// to make it reusuable, moving to geocode.js
// const geoCode = (address, callback) => {
//   const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiY2Rzb2x0aXMiLCJhIjoiY2s1b3Nwb2N6MGFnajNscGNlMG9yajFjNiJ9.Tx0JlVZRjDuAsvb7xSfiMg`;

//   request({url: url, json: true}, (error, response) => {
//     // write an 'if' statement that will determine how things went. if that went well or not....f
//     if (error) {
//       // make first reference to our 'callback' if there is an error;
//       callback('unable to connect to local server', undefined);
//     } else if (response.body.features.length === 0) {
//       // if I don't get any search results, there is a problem.
//       callback('unable to find location, try again', undefined);
//     } else {
//       callback(undefined, {
//         // this should be sent back as the data;
//         latitude: response.body.features[0].center[0],
//         longitude: response.body.features[0].center[1],
//         location: response.body.features[0].place_name
//       });
//     }
//   });
// };
// - geoCode will communicate with the mapbox api
// callback functions will give you an error if things go poorly or data if we get our response.
geoCode('Atlanta', (error, data) => {
  console.log('error', error);
  console.log('data:', data);
});

// the callback expects two things, the error(if there is one) otherwise, the data.
