import { ApolloServer } from "apollo-server-micro";
import Cors from "micro-cors";
import { resolvers, typeDefs } from "../../../server/schemas";
const apolloServer = new ApolloServer({ typeDefs, resolvers });

const startServer = apolloServer.start();
const cors = Cors();

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
