var express = require('express');
var app = express();
/**
 * Cau hinh body-parser
 */

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/** Cac router */

require('./app/routers/home.router')(app);
require('./app/routers/book.router')(app);



app.listen(3001, function(req, res) {
    console.log("Server listening on http://localhost:3001")
});
