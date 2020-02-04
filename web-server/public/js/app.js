const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

const messageOne = document.querySelector('#message-one');
const messageTwo = document.querySelector('#message-two');

/*
Challenge: Render Content to the paragraphs
1. Select the first and second message from within the html (messsageOne, messageTwo);
2. Just before fetch, render loading message and empty p
3. If error, render error
4. If no error, render location and forecast
5. Test work!
*/

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const location = search.value; // take this information and fetch it below

  messageOne.textContent = 'Loading...';
  messageTwo.textContent = ''; // because of this, when user searches again, this will reset

  fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      // console.log(data);
      if (data.error) {
        // console.log(data.error);
        messageOne.textContent = data.error; // will not be rendered until the fetch is called by the event listener.
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
        // console.log(data.location);
        // console.log(data.forecast);
      }
    });
  });
});
