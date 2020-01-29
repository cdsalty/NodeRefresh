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
Create HTML page for the "about" route that displays "ABOUT"  ->
Create an HTML page for the "help" route that displays "HELP" ->
- Remove the old route handlers for about and help
  - visit both routes and test.
*/