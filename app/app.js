const express = require('express');
const routes = require('./routes/index');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
app.set('view engine', 'pug');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended:true}));

app.use(upload.array());
app.use(express.static('./app/public'))

app.use('/', routes);

module.exports = app;
