const { gql } = require("apollo-server-micro");

const typeDefs = gql`
	type User {
		_id: ID
		username: String!
		password: String!
		email: String!
		# friendCount: Int
		wishes: [Wish]
		# friends: [User]
	}

	type Wish {
		_id: ID
		wishText: String!
		createdAt: String
		user: User!
	}

	type Query {
		me: User
		users: [User]
		user(username: String!): User
		wishes: [Wish]
		wish(_id: ID!): Wish
	}

	type Mutation {
		login(email: String!, password: String!): User
		addUser(username: String!, email: String!, password: String!): User
		addWish(wishText: String!, userId: String!): Wish
	}
`;

module.exports = typeDefs;
