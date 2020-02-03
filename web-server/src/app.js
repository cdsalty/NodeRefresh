const path = require('path'); // used to concate the directory path along with the path I intend to go too
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utilities/geocode');
const forecast = require('./utilities/forecast');
// const request = require('request');
const app = express();

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
  // small mistake not to make that cost me time './about' vs '/about'      ******!!******
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
  if (!req.query.address) {
    return res.send({
      error: 'You must provide an address!'
    });
  }

  geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
    // set parameters equal to an empty object(undefined but will prevent it from crashing)
    if (error) {
      return res.send({error});
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return res.send({error});
      }

      res.send({
        forecast: forecastData,
        location,
        address: req.query.address
      });
    });
  });
});

// practice to work with query strings (Creating a route to get our JSON data)
app.get('/products', (req, res) => {
  // console.log(req.query); // retuns {serach: "games"}
  // console.log(req.query.search); // returns games
  // Only do a search is there is criteria to search; if no criteria "!"
  if (!req.query.search) {
    // if no search criteria/item is provided... send back a JSON error messaage
    return res.send({
      error: 'No search term was provided'
    });
  }
  console.log(req.query.search);
  res.send({
    products: []
  });
});

// extensions to previous routes: this/help/example vs routes that don't exist this/other/givesError
// help/example
app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404 Error',
    name: 'Christopher',
    errorMessage: 'Help article NOT found'
  });
});

// 404 Route Error  -- always have this route listed last
app.get('*', (req, res) => {
  // res.send("You've reached a 404 error");
  res.render('404', {
    title: 404,
    name: 'Christopher',
    errorMessage: 'Page NOT found'
  });
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
