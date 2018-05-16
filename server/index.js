/**
   slack-bot/hey-team-server/index.js
   ==================================
   Project: Hey-Team Slack App
   Created: 2018-05-04
   Updated: 2018-05-16
   Version: 0.2.0
   About:   Main server file
   Notes:   
   -----------------------------------
 */

require('dotenv').config();

const KEYS = require('../config/keys');
const PORT = process.env.PORT || process.env.DEV_SERVER_PORT;

const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
  res.set('Content-Type', 'application/json');
  res.send('{"message": "Hey Team!  Hello from hey-team-server"}');
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
