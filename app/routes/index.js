const express = require('express');
const app = express();
const pug = require('pug');
const router = express.Router()

router.get('/', function (req, res) {
    res.render('home');
});

router.get('/login', function (req, res) {
    res.render('login');
});

router.get('/signup', function (req, res) {
    res.render('signup');
});

router.post('/login', function (req, res) {
    res.send('Welcome ' + req.body.username)
})

module.exports = router