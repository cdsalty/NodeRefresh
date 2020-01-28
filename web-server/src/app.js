const path = require('path'); // used to concate the directory path along with the path I intend to go too
const express = require('express');

const app = express();

const publicDirectory = path.join(__dirname, '../public');
// to have it calling the src destination + the public url info

app.use(express.static(publicDirectory)); // static is an express method that calls on use the method for url routing

app.get('', (req, res) => {
  res.send('hello express');
});

app.get('/weather', (req, res) => {
  res.send({
    weather: 'cloudy',
    location: 'Atlanta, GA'
  });
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});

// nodemon src/app.js
