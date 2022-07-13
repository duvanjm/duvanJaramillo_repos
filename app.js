const express = require('express');
const routes = require('./routes/index');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(routes);
app.use(express.json({ limit: '10kb' }));

module.exports = app;
