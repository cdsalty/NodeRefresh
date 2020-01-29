const path = require('path'); // used to concate the directory path along with the path I intend to go too
const express = require('express');

const app = express();

// Define paths for Express config
const publicDirectory = path.join(__dirname, '../public'); // calling the src destination + the public url info
const viewsPath = path.join(__dirname, '../templates');

// Setup handlebars engine and views location
app.set('view engine', 'hbs'); // in short, telling express we're using a templating engine.
app.set('views', viewsPath); // replacing default folder name of views with the viewsPath directory

// Setup Static Directory to serve
app.use(express.static(publicDirectory)); // static is an express method that calls on use the method for url routing

app.get('', (req, res) => {
  // res.render is used to display and view the 'views/handlebars' file.
  res.render('index', {
    title: 'Weather Application', // we can go back and use this information within Handlebars
    name: 'Christopher Soltis'
  });
});

app.get('/about', (req, res) => {
  // small mistake not to make that cost me time './about' vs '/about'
  res.render('about', {
    from: 'Georgia',
    pupsName: 'Daisy'
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    phoneContactName: 'Ellie',
    phone: '876-501-3905'
  });
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
