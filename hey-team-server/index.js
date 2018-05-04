/**
   slack-bot/hey-team-server/index.js
   ==================================
 */

const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.Port || 5000;


app.get('/api', (req, res) => {
  res.set('Content-Type', 'application/json');
  res.send('{"message": "Hey Team!  Hello from hey-team-server"}');
});

app.listen(PORT, () => {
  console.error(`process ${process.pid}: listening on port ${PORT}`);
});
