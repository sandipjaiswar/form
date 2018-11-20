const express = require('express');
const app = express();
const pug = require('pug');
const router = express.Router()


router.get('/', function(req,res){
 res.render('home');
});

module.exports = router