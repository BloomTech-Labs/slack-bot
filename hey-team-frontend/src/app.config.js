/**
   src/.config.js
   =====================================
   Created: 2018-05-08
   Version: 0.1.0
   Team:    Jason Campbell, Manisha Lal,
            Christy Crites, Wesley Harvey
   About:   config file for React app
   Notes:   DO NOT COMMIT
   -------------------------------------
 */
export default {
  url: "{openid profile email}",
  issuer: "{https://dev-262012.oktapreview.com}/oauth2/default",
  redirect_uri: window.location.origin + "/implicit/callback",
  client_id: "{0oaey4kmdhcvKv7Dv0h7}"
};
