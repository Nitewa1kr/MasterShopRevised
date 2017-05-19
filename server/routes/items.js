var express = require('express');
var mongojs = require('mongojs');
var router = express.Router();

var axios = require('axios');
var db = mongojs('mongodb://adeel:password123@ds119370.mlab.com:19370/shownowdb', ['items']);

//this to get data
router.get('/items',(req,res)=>
{
    
});
module.exports = router;