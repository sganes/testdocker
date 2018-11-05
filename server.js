const express = require('express');
const  mongoDbConnect = require('./mongodb_connect');
var app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/welcome', (req, res) => {
    res.send("Welcome To My First Docker Project");
});

app.post('/users', (req, res) => {
    mongoDbConnect((client)=>{
        db = client.db('DockerTest');
        db.collection('users').insertOne(req.body, (err, result) => {
            if (err)
               res.status(200).send('Document Saved');
          });
    }); 
});


//app listining
app.listen(3000, () => {
    console.log("App started");
})