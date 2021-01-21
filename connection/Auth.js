const path = require("path");
var jwt = require("express-jwt");
var jwks = require("jwks-rsa");

module.exports = Object.freeze({
  checkJwt: jwt({
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: "https://appframework-dev.eu.auth0.com/.well-known/jwks.json",
    }),
    audience: "https://bmc.lennertvh.xyz",
    issuer: "https://appframework-dev.eu.auth0.com/",
    algorithms: ["RS256"],
  }),
});
