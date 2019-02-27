var express = require("express");
var app= express();

var session = require ('express-session');
app.use(session({secret:"abcdefghi"}))

app.use(express.static( __dirname + '/public/dist/public' ));

var bp = require('body-parser');
app.use(bp.urlencoded({extended:true}));

const flash = require('express-flash');
app.use(flash());

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// require('./server/routes')(app)

app.listen(8000, ()=> {
    console.log("listening on pport *****8000*****");
});