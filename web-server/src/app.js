const express = require('express');
const app = express();

app.get('', (req, res) => {
  res.send('hello express'); // on screen
});

app.get('/help', (req, res) => {
  res.send('Help Page');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/weather', (req, res) => {
  res.send('Your Weater');
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});

// nodemon src/app.js
