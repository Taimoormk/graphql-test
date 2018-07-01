var passport = require("passport");
var { Strategy } = require("passport-jwt");
var jwtOptions = require("./jwtOptions");

const users = [
  {
    id: "user-1",
    username: "taimoormk",
    password: "123456"
  },
  {
    id: "user-2",
    username: "taimoor",
    password: "1234"
  }
];

module.exports = function() {
  var strategy = new Strategy(jwtOptions, function(jwt_payload, next) {
    var user = users.filter(user => {
      return user.id === jwt_payload.id;
    })[0];

    if (user) {
      next(null, user);
    } else {
      next(null, false);
    }
  });
  passport.use(strategy);
};
