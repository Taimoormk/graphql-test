var path = require("path");
var morgan = require("morgan");
var express = require("express");
var bodyParser = require("body-parser");
var graphqlHTTP = require("express-graphql");
var schema = require("./schema");

module.exports = app => {
  app.use(morgan("dev"));
  app.use(express.static(path.join(__dirname, "../../dist")));
  app.use(bodyParser.json());
  app.use(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      rootValue: root,
      graphiql: true
    })
  );
};
