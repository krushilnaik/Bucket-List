const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    thoughts: [Thought]
    friends: [User]
  }

  type Wish {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    wishes(username: String): [Wish]
    wish(_id: ID!): Wish
  }

  type Mutation {
    login(email: String!, password: String!): User
    addUser(username: String!, email: String!, password: String!): User
    addWish(wishText: String!): Wish
  }
`;

module.exports = typeDefs;
