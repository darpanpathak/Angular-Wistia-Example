var express = require('express');
var reqrouter = express.Router();
var path = require('path');

var router = function () {

    reqrouter.route('/')
        .get(function (req, res) {
            console.log(__dirname);
            res.sendFile(path.join(__dirname , '../../app/index.html'));
        });

    return reqrouter;
}

module.exports = router;