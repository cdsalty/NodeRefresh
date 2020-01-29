const path = require('path'); // used to concate the directory path along with the path I intend to go too
const express = require('express');
const hbs = require('hbs');
const app = express();

/*
Challenge: Create and Render a 404 page with handlebars
- setup the templete to render the header and the footer
- setup the templete to render an error message in a paragraph
- render the templete for both 404 routes
      ---> Page Not Found
      ---> Help Article Not Found
- test work by visiting /what and /help/units
*/

// Define paths for Express config
const publicDirectory = path.join(__dirname, '../public'); // calling the src destination + the public url info
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs'); // in short, telling express we're using a templating engine.
app.set('views', viewsPath); // replacing default folder name of views with the viewsPath directory
hbs.registerPartials(partialsPath); // to use partials

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
    title: 'About',
    name: 'Christopher',
    pupsName: 'Daisy'
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    helpText: 'This is some HELPful text',
    title: 'Help',
    name: 'Christopher'
  });
});

app.get('/weather', (req, res) => {
  res.send({
    weather: 'cloudy',
    location: 'Atlanta, GA'
  });
});

// extensions to previous routes: this/help/example vs routes that don't exist this/other/givesError
// help/example
app.get('/help/*', (req, res) => {
  res.send('Help article');
});

// 404 Route Error
app.get('', (req, res) => {
  res.send("You've reached a 404 error");
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});

// nodemon src/app.js
