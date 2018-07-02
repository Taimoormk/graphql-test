const users = [];
let user = {};

const resolvers = {
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
  getUser: ({ id }) => {
    return users.find(user => user.id === id);
  },
  users: () => {
    return users;
  },
  createUser: ({ input }) => {
    user = input;
    users.push(user);
    return user;
  }
};

module.exports = resolvers;
