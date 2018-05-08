/**
   dev.js
   ====================================
   Project: Hey-Team Slack App
   Created: 2018-05-04
   Updated: 2018-05-08
   Version: 0.2.0
   Team: Jason Campbell, Manisha Lal,
         Christy Crites, Wesley Harvey
   About: Loads development environment
          data
   Notes: OK TO COMMIT
   -------------------------------------
 */

module.exports = {
  okta_oidc_issuer: `https://${process.env.OKTA_ORG_URI}/oauth2/default`,
  okta_client_id: `process.env.OKTA_CLIENT_ID`,
  okta_redirect_uri: `${process.env.DEV_SERVER_URL}:${process.env.DEV_WEB_SERVER_PORT}/implicit/callback`,
  okta_scope: 'openid profile email'
}
