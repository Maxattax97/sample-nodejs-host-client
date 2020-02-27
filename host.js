const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const https = require('https');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let latest_gps = null;

app.post('/api/gps', (req, res) => {
  console.log('received GPS data:', req.body);
  latest_gps = req.body;
  res.send('success');
});

app.get('/api/gps', (req, res) => {
  console.log('sending latest GPS data:', latest_gps);
  res.send(latest_gps);
});

// Handles GET, POST, and all the others in the same function.
app.all('/', (req, res) => {
  console.log('displaying front page');
  res.send('<body>'
    + '<h1>Welcome to the front page</h1>'
    + '<p>Check out this cool <a href="api/gps/">API endpoint</a>!</p>'
    + '</body>');
});

http.createServer(app).listen(8000);
https.createServer({
  key: fs.readFileSync('ssl/key.pem'),
  cert: fs.readFileSync('ssl/cert.pem'),
}, app).listen(8443);

console.log('HTTPS is listening on 8443, HTTP is listening on 8000');
