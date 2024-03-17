// app using yahoo.com as a search engine
const express = require('express'); // Include ExpressJS
const app = express(); // Create an ExpressJS app
const bodyParser = require('body-parser'); // Middleware 
const axios = require('axios');
const path = require('path');
const request = require('request');
const { cpSync } = require('fs');

app.set('view engine', 'ejs');
app.use(express.static(__dirname));

// app.set('views', './');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// var newItem;
// Route to Login Page
app.get('/', (req, res) => {
    // console.log((req.query['q']));
    res.sendFile(__dirname + '/index.html');
});
app.post('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


app.post('/sendData', (req, res) => {
    console.log(req.body.group_membership_list)
    // axios.post('http://localhost:3000/customer',req.body)
    // .then(() => {
    //     console.log("data sent")
    //   })
    //   .catch((e) => {
    //     console.log("Could not send");
    //     console.log(e)
    //   });
});





const port = process.env.PORT || 2000 // Port we will listen on

// Function to listen on the port
app.listen(port, () => console.log(`This app is listening on port ${port}`));
