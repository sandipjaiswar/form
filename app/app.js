const express = require('express');
const routes = require('./routes/index');
const app = express();

app.set('view engine', 'pug');
app.set('views', './app/views');

app.use(express.static('./app/public'))

app.use('/', routes);

module.exports = app;
