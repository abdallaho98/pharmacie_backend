const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const commandRouter = require('./routes/command');
const pharmacieRouter = require('./routes/pharmacie');
const app = express();
const Mongoose = require('mongoose')
const url = "mongodb://localhost:27017/pharmacie";
const port = process.env.PORT || 3000;

Mongoose.connect(url).then(res => {console.warn('connected')}).catch(err => {console.warn(err)});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/commands', commandRouter);
app.use('/pharmacies', pharmacieRouter);

app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});

module.exports = app;
