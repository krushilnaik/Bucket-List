import { extendType, objectType, stringArg } from "nexus";

export const User = objectType({
	name: "User",
	definition(t) {
		t.nonNull.string("_id");
		t.nonNull.string("username");
		t.nonNull.string("password");
		t.string("imageURL");
		t.list.field("wishes", {
			type: "Wish",
			async resolve({ _id }, _args, ctx) {
				return await ctx.prisma.wish.findMany({
					where: { _id },
				});
			},
		});
	},
});

export const UserQuery = extendType({
	type: "Query",
	definition(t) {
		// fetch a single user by _id
		t.field("user", {
			type: User,
			args: { _id: stringArg() },
			async resolve(_parent, { _id }, { prisma }) {
				return await prisma.user.findUnique({
					where: { _id },
					include: { wishes: true },
				});
			},
		});

		// fetch all users
		t.list.field("users", {
			type: User,
			async resolve(_parent, _args, { prisma }) {
				const temp = await prisma.user.findMany({
					include: { wishes: true },
				});

				console.log(temp);

				return temp;
			},
		});
	},
});

export const UserMutation = extendType({
	type: "Mutation",
	definition(t) {
		// work on this
	},
});
