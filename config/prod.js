/**
   prod.js
   ====================================
   Project: Hey-Team Slack App
   Created: 2018-05-04
   Version: 0.1.0
   Team: Jason Campbell, Manisha Lal,
         Christy Crites, Wesley Harvey
   About: Loads development environment
          data
   Notes: OK TO COMMIT
   -------------------------------------
 */

module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    googleCallbackURI: process.env.GOOGLE_CALLBACK_URI,
    mongoURI: process.env.MONGODB_URI
}
