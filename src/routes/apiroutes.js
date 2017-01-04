var express = require('express');
var apirouter = express.Router();
var bodyParser = require('body-parser');


var router = function () {

    apirouter.route('/')
        .get(function (req, res) {
            res.send("YAY..");
        });

    return apirouter;
}

module.exports = router;