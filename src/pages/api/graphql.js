import { ApolloServer } from "apollo-server-micro";
import { makeExecutableSchema } from "@graphql-tools/schema";
import Cors from "micro-cors";

import typeDefs from "../../../server/schemas/typeDefs";
import resolvers from "../../../server/schemas/resolvers";
// import "../../../server/config/connection";

export const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
});

const cors = Cors();

const apolloServer = new ApolloServer({ schema });

const startServer = apolloServer.start();

export default cors(async function handler(req, res) {
	if (req.method === "OPTIONS") {
		res.end();
		return false;
	}
	await startServer;

	await apolloServer.createHandler({
		path: "/api/graphql",
	})(req, res);
});

export const config = {
	api: {
		bodyParser: false,
	},
};
