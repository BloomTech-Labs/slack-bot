/**
   slack-bot/server/index.js
   ==================================
   Project: Hey-Team Slack App
   Created: 2018-05-04
   Updated: 2018-05-16
   Version: 0.3.0
   About:   Main server file
   Notes:   
   -----------------------------------
 */

require('dotenv').config();

const KEYS = require('../config/keys');
const PORT = process.env.PORT || process.env.DEV_SERVER_PORT;

const express = require('express');
const app = express();
const createError = require('http-errors');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const usersRouter = require('./routes/users');

app.use(logger('dev'));
app.use(cookieParser);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/users', usersRouter);

app.get('/api', (req, res) => {
  res.set('Content-Type', 'application/json');
  res.send('{"message": "Hey Team!  Hello from hey-team-server"}');
});

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.listen(PORT, () => {
  console.error(`process ${process.pid}: listening on port ${PORT}`);
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*', (req, res) => {
	res.sendFile(path.resolve(
	    __dirname, 'client', 'build', 'index.html'
	));
    });
}

module.exports = app;
