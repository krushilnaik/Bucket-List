const { gql } = require("apollo-server-micro");

const typeDefs = gql`
	type User {
		id: ID
		name: String!
		password: String!
		email: String!
		wishes: [Wish]
	}

	type Wish {
		id: ID
		wishText: String!
		isCompleted: Boolean!
		createdAt: String
		user: User!
	}

	type Query {
		me: User
		users: [User]
		user(id: String!): User
		wishes: [Wish]
		wish(id: ID!): Wish
	}

	type Mutation {
		login(email: String!, password: String!): User
		addUser(name: String!, email: String!, password: String!): User
		addWish(wishText: String!, userId: String!): Wish
	}
`;

module.exports = typeDefs;
