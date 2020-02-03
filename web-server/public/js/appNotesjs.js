console.log('client side javascript file is now being loaded!!');

/*
Making Browswer HTTP Request using Fetch
*/

fetch('http://puzzle.mead.io/puzzle').then((response) => {
  response.json().then((data) => {
    console.log(data);
  });
});
/*
Challenge: Fetch The Weather 
1. Setup call to fetch the weather from a city
2. Get the Parse JSON response
  - if error property, print the error
  - If no error property, print location and the forecast
3. Refresh the browser to test 
*/
fetch('http://localhost:3000/weather?address=atlanta').then((response) => {
  response.json().then((data) => {
    console.log(data);
  });
});
/*---------------------------------------------------------------------------------------------*/
