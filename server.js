//Importing modules
var express = require('express');

//Import user defined routes
var indexRoutes = require('./app/routes/index');

//Initialize app
var app = express();

//Hide "powered by express". This helps against attacks.
app.disable('x-powered-by');

//Defining routes
app.use('/', indexRoutes);

//Start the server
app.listen(process.env.PORT || 8000);
