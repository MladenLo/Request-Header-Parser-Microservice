//Importing modules
var express = require('express');
var router = express.Router();

//Importing controllers
var indexController = require('../controllers/index.controller');

//Routes
router.get('/', indexController.index);

module.exports = router;