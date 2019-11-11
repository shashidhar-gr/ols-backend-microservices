"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    res.send('Hello world!!');
});
app.listen(3000, function () {
    console.log('User management app running on port 3000');
});
