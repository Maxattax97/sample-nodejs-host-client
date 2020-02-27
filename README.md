# sample-nodejs-host-client

This sample shows how to pass JSON data from a client securely to a host.

## Install

This project uses Express to host the server, you can install it like so:

```
npm install
```

## Host

```
node ./host.js
```

Test it in your browser -- go to `https://localhost:8443`. It will complain about
a self signed certificate, ignore it and proceed. The insecure HTTP URL will also
work.

It's technically insecure to use these publicly provided certificates. To generate
fresh ones, execute:

```
openssl req -nodes -new -x509 -keyout key.pem -out cert.pem
```

When you go to `https://localhost:8443/api/gps`, your browser makes a GET request,
so it will dump the data the server has stored. The client application makes POST
requests, so it will store the data onto the server.

## Client

```
node ./client.js`
```
