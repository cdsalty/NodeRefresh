// Carrying over original notes.

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
CALL BACKS:


/*
 ** ** CALLBACKS ** **
Goal: Use the callback pattern

1. Define an add function that accepts the correct arguments
2. Use setTimeout to simulate a 2 second delay
3. After 2 seconds are up, call the callback function with the sum
4. Test your work!

// add(1, 4, (sum) => {
//   console.log(sum); // Should print: 5
// });

// thinking... add takes in 3 arguements, 2 numbers and a callback fumction call 'sum'

// finally...
const add = (x, y, callback) => { //done
  setTimeout(() => {  // queue
    callback(x + y);  // this will not run until 3 secs passes, callback(x+y)
  }, 3000);
};
add(1, 4, (sum) => {
  console.log(sum); // Should print: 5
});
 
*/
