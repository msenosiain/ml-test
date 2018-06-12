var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

var itemRoutes = require('./api/items/routes');
itemRoutes(app);

app.listen(port);

console.log('RESTful API server started on: ' + port);