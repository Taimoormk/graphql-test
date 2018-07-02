var path = require("path");
var morgan = require("morgan");
var express = require("express");
var bodyParser = require("body-parser");
var graphqlHTTP = require("express-graphql");
var schema = require("../schema");

module.exports = app => {
  app.use(morgan("dev"));
  app.use(express.static(path.join(__dirname, "../../dist")));
  app.use(bodyParser.json());
  const root = {
    item: () => {
      return {
        id: "123",
        text: "this is an item",
        timeISO: "2PM",
        time: 1212332,
        title: "GraphQL learning",
        deleted: false
      };
    }
  };
  app.use(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      rootValue: root,
      graphiql: true
    })
  );
};
