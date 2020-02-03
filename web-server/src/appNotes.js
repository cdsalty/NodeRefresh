const path = require('path'); // used to concate the directory path along with the path I intend to go too
const express = require('express');

const app = express();

// console.log(__dirname); // provides a directory path to app.js alone so we concat below
// console.log(path.join(__dirname, '../public'));
// returns /Users/christopher/Desktop/NODE/web-server/public

const publicDirectory = path.join(__dirname, '../public'); // to have it calling the src destination + the public url info

app.use(express.static(publicDirectory)); // static is an express method that calls on use
// -> local host should now go to localhost/public which will render the h1 tag, "from a static file"
// this will overwrite the app.get method below for ' '.
// this also replaced my help page and my setup page routes so they are no longer necessary
app.get('', (req, res) => {
  res.send('hello express'); // on screen
});

// practice working with query strings (Creating a route to get our JSON data)
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

// Over Written
app.get('/help', (req, res) => {
  res.send('Help Page');
});
// setup about route to render a title with HTML; now it is getting overwritten through path.join
app.get('/about', (req, res) => {
  res.send('<h2>ABOUT ROUTE</h2>');
});
// setup weather route to send back JSON (object with forcast and location strings)
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

/*
Challenge: Update weather route endpoint to accept address
1. If no address is provided, send back an error message
2. If user provides address, send back static JSON
  - Add an address property into JSON which returns the provided address
3. Test:
  - /weather
  - /weather?address=atlanta
*/

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'No address provided. Please enter location to search'
    });
  }
  res.send({
    forecast: 'cloudy',
    location: 'Atlanta',
    address: req.query.address
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
