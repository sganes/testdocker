const express = require('express');
const mongoDbConnect = require('./mongodb_connect');
var app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/welcome', (req, res) => {
    const appenv = process.env.appenv || "Development"
    res.send(`Welcome To My First Docker Project in  ${appenv} environment`);
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
            if(docs.length < 1)
            {
                const seedData = {"name":"seedname"}
                mongoDbConnect((client) => {
                    db = client.db('DockerTest');
                    db.collection('docusers').insertOne(seedData, (err, result) => {
                        res.send(seedData)
                    });
                }); 
            }
            else if (err)
                res.status(400).send(err);
            else
                res.send(docs);
        });
    });
});

//app listining
app.listen(3000, () => {
    console.log("App started");
})
