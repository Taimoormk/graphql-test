var testHandler = require("../handlers/testHandler");
var passport = require("passport");
require("../passport")();

module.exports = app => {
  app.get("/test", testHandler);
};
