const express = require('express');
const mongoDbConnect = require('./mongodb_connect');
var app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/welcome', (req, res) => {
    res.send("Welcome To My First Docker Project");
});

app.post('/users', (req, res) => {
    mongoDbConnect((client) => {
        db = client.db('DockerTest');
        db.collection('docusers').insertOne(req.body, (err, result) => {
            if (err)
                res.status(400).send(err);
            res.status(200).send('Document Saved');
        });
    });
});

app.get('/users', (req, res) => {
    mongoDbConnect((client) => {
        db = client.db('DockerTest');
        db.collection('docusers').find({}).toArray(function (err, docs) {
            if (err)
                res.status(400).send(err);
            res.send(docs);
        });
    });
});

//app listining
app.listen(3000, () => {
    console.log("App started");
})
