const express = require('express');
var app = express();

app.get('/welcome', (req, res) => {
    res.send("Welcome To My First Docker Project to test app");
});

//app listining
app.listen(3000, () => {
    console.log("App started");
})
