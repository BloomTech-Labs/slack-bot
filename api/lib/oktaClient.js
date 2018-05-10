const okta = require("@okta/okta-sdk-nodejs");

const client = new okta.Client({
  orgUrl: "https://dev-262012.oktapreview.com",
  token: "00yTbcl21yrDS5HDSudT5h-H-abxT7-ziRRdrsQqvA"
});

module.exports = client;
