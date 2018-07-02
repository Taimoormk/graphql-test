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

  const users = [];
  let user = {};

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
    },
    user: () => {
      return {
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@gmail.com"
      };
    },
    createUser: ({ input }) => {
      user = input;
      users.push(user);
      return user;
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
