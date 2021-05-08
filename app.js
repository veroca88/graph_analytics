const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const favicon = require('serve-favicon');

// Connected to Cluster Atlas MongoDB
require('./config/db.config')

// Routers
const dbRouter = require('./routes/db-routes');

const app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));
app.use(logger('dev'));
app.use(express.json({ extended: false }))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

// Routes Middleware
app.use('/', dbRouter);


module.exports = app;
