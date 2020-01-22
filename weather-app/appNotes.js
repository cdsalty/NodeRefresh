const request = require('request'); // see 'all available options' on npm

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
