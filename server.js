var express = require("express");
var app = express();

app.use(express.static('client'));

/**
 * Matches anything that comes after / in the url 
 * We are expecting any string based on which data will be returned
 */
app.get(/.*/, function(req, res) {
    
});

app.listen(8080);