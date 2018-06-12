const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3080;

app.use(cors());
app.use(morgan('dev'));

app.get('/', function (req, res) {
    res.send('Welcome to te Dark Side!!')
});

const api = require('./api/api.routes')();

app.use('/api', api);

app.listen(port);

console.log('RESTful API server started on: ' + port);