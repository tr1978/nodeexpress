const express = require('express');
// const https = require('https');
const path = require('path');
// const fs = require('fs');
const app = express();

// const options = {
//     key: fs.readFileSync('/etc/letsencrypt/live/ryggnet.com/privkey.pem'),
//     cert: fs.readFileSync('/etc/letsencrypt/live/ryggnet.com/cert.pem'),
//     ca: fs.readFileSync('/etc/letsencrypt/live/ryggnet.com/chain.pem')
// }

app.use(express.static('public'));

// app.get('/', (req, res) => {
//     var myres = '<p>You requested: ' + req.url + '</p>\n<h1>My cool server</h1>';
//     res.send(myres);
// });

// app.all('*', (req, res) => {
//     res.status(404).send('<h2>The requested resource: ' + req.url + ', was not found</h2>');
// });

app.listen(3000, () => {
    console.log('Server listening on port 3000....');
});

// const httpsServer = https.createServer(options, app);

// httpsServer.listen(443, () => {
//         console.log('Listening on port 443');
// });
