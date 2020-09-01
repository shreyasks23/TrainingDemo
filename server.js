//Module imports
const express = require('express');
const fs = require("fs");

const app = express();

//#region Routes
app.get('/Index', function (req, res) {
    fs.readFile(__dirname + "/" + "index.html", 'utf8', function (err, data) {
        res.end(data);
    });
});

app.get('/Jquery', function (req, res) {
    fs.readFile(__dirname + "/JS" + "/jquery-3.5.1.js", 'utf8', function (err, data) {
        res.end(data);
    });
});

app.get('/FuncFromTxt', function (req, res) {
    fs.readFile(__dirname + "/" + "sample.txt", 'utf8', function (err, data) {
        res.end(data);
    });
});

app.get('/mainJS', function (req, res) {
    fs.readFile(__dirname + "/" + "main.js", 'utf8', function (err, data) {
        res.end(data);
    });
});
//#endregion

//server initialization
const server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});