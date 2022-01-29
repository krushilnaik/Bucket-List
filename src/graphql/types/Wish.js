import { extendType, objectType, stringArg } from "nexus";

export const Wish = objectType({
	name: "Wish",
	definition(t) {
		t.nonNull.string("_id");
		t.nonNull.string("wishText");
		t.nonNull.field("user", {
			type: "User",
		});
	},
});

export const WishQuery = extendType({
	type: "Query",
	definition(t) {
		// fetch all wishes by _id
		t.list.field("wish", {
			type: Wish,
			resolve(_parent, _args, { prisma }) {
				return prisma.project.findMany({
					include: { user: true },
				});
			},
		});

		// fetch a single wish by _id
		t.field("wish", {
			type: Wish,
			args: {
				_id: stringArg(),
			},
			async resolve(_parent, { _id }, { prisma }) {
				return await prisma.project.findUnique({
					where: { _id },
					include: { user: true },
				});
			},
		});
	},
});

export const WishMutation = extendType({
	type: "Mutation",
	definition(t) {
		// work on this
	},
});
