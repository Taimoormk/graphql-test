const { ExtractJwt } = require("passport-jwt");
var jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = "@£&(@))££((£))£jiJSH@()kHKNSKlj(@@*£1121KK";

module.exports = jwtOptions;
