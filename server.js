var express = require("express");
var url = require("url");
var datelib = require("./datelib");
var app = express();

app.use(express.static('client'));

/**
 * Matches anything that comes after / in the url 
 * We are expecting any string based on which data will be returned
 */
app.get(/.*/, function(req, res) {
    var dateString = decodeURI(req.url).substr(1);
    datelib(dateString, function(err, data) {
        res.end(JSON.stringify(data));
    });
});

app.listen(8080);