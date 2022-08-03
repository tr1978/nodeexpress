const express = require('express');
const app = express();

app.get('/', (req, res) => {
    var myres = '<p>You requested: ' + req.url + '</p>\n<h1>My cool server</h1>';
    res.send(myres);
});

app.get('/surdeig', (req, res) => {
    res.sendFile('/home/trygve/coding/node-projects/servertest/images/sd.jpg', (err) => {
        console.log('Something went wrong');
    });
});

app.all('*', (req, res) => {
    res.status(404).send('<h2>The requested resource: ' + req.url + ', was not found</h2>');
});

app.listen(3000, () => {
    console.log('Server listening on the cool port 3000');
});
