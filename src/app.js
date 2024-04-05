const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const indexRouter = require('./routes/index');

const app = express();

app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

module.exports = app;
