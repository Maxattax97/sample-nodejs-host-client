const https = require('https');
const http = require('http');
const request = require('request');

function sendMessage(obj) {
  request.post({
    url: 'https://127.0.0.1:8443/api/gps',
    method: 'POST',
    json: true,
    body: obj,
    rejectUnauthorized: false, // Our server has a self-signed cert -- ignore it.
  }, (err, res, body) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Message sent sent succesfully');
    }
  });
}

setInterval(() => {
  const message = {
    lat: Math.random() * 90 * 2 - 90,
    long: Math.random() * 180 * 2 - 180,
    alt: Math.random() * 8000 - 200,
    time: (new Date()).toISOString(),
  };

  console.log('Uploading data to server:', message);
  sendMessage(message);
}, 1000);
