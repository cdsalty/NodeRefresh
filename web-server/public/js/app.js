/*
Challenge: Use the input value to get the weather
1. Migrate fetch call into the submit callback
2. Use the search text as the address query string value
3. Submit the form with a valid and invalid to test
*/

// Linking the form data that get's entered.
const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // console.log(search) will only return the input element but by adding value, we get the input
  // console.log(search.value);
  const location = search.value; // take this information and fetch it below
  fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      // console.log(data);
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data.location);
        console.log(data.forecast);
      }
    });
  });
});
