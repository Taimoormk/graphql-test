// create app
var express = require("express");
var app = express();

// run middleware
require("./middleware")(app);

// run passport strategy middleware
require("./passport")();

// run routes
require("./routes")(app);

// run moongoose
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://taimoor:taimoorgraphql1@ds151651.mlab.com:51651/graphql")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Running on port ", port);
});
