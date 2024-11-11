// create web server
var express = require('express');
var app = express();
var fs = require('fs');

// create a route
app.get('/comments', function(req, res) {
  fs.readFile('comments.json', function(err, data) {
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

// start server
app.listen(3000, function() {
  console.log('Server running on http://localhost:3000');
});