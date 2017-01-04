var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3005;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

var apirouter = require('./src/routes/apiroutes')();
app.use('/api', apirouter);

var reqRouter = require('./src/routes/reqroutes')();
app.use('/', reqRouter);

app.use(express.static('app'));

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});