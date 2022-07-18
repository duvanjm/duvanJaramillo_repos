const express = require('express');
const routes = require('./routes/index');
const morgan = require('morgan');

const app = express();

app.use(express.json({ limit: '10kb' }));
app.use(morgan('dev'));
app.use(routes);

module.exports = app;
