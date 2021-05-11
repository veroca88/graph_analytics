const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const compare = require('./config/hbs-helper.config');

const hbs = require('hbs');

const app = express();

// Connected to Cluster Atlas MongoDB
require('./config/db.config')

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

// Routers
const dbRouter = require('./routes/db.routes');
const indexRouter = require('./routes/index.routes')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// Routes Middleware
app.use('/', dbRouter);
app.use('/index', indexRouter);


module.exports = app;
