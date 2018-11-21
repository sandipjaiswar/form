const express = require('express');
const app = express();
const pug = require('pug');
const router = express.Router()

router.get('/', function(req,res){
 res.render('home');
});

router.get('/login', function(req,res){
    console.log(req.body);    
    
 res.render('login')
});

router.post('/login', function(req, res){
    console.log(req.body);    
    res.send('Welcome '+ req.body.username)
})

module.exports = router