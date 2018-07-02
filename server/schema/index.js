var { buildSchema } = require("graphql");

const schema = buildSchema(`
  type HackerNewsItem {
    id: String
    text: String
    timeISO: String
    time: Int
    title: String
    deleted: Boolean
  }
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
  }
  type Query {
    item: HackerNewsItem,
    user: User
  }
  input UserInput {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
  }
  type Mutation {
    createUser(input: UserInput) : User
  }
`);

module.exports = schema;
