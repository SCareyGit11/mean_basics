var express = require('express');
// Create an Express App
var app = express();



// Require path
var path = require('path');
// Setting our Views Folder Directory
app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_componentsmkdir')));










// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})