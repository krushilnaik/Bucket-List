const { AuthenticationError } = require("apollo-server-micro");
const { User, Wish } = require("../models");
const mongoose = require("mongoose");
// const { signToken } = require('../utils/auth');

const resolvers = {
	Query: {
		me: async (parent, args, context) => {
			if (context.user) {
				const userData = await User.findOne({ id: context.user._id })
					.select("-__v -password")
					.populate("wishes");

				return userData;
			}

			throw new AuthenticationError("Not logged in");
		},
		users: async () => {
			return User.find().select("-__v -password").populate("wishes");
		},
		user: async (parent, { id }) => {
			return User.findOne({ id }).select("-__v -password").populate("wishes");
		},
		wishes: async (parent, { id }) => {
			const params = id ? { id } : {};
			return Wish.find(params).sort({ createdAt: -1 });
		},
		wish: async (parent, { id }) => {
			return Wish.findOne({ id });
		},
	},

	Mutation: {
		addUser: async (parent, args) => {
			const user = await User.create(args);
			//   const token = signToken(user);

			return user;
		},
		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });

			if (!user) {
				throw new AuthenticationError("Incorrect credentials");
			}

			const correctPw = await user.isCorrectPassword(password);

			if (!correctPw) {
				throw new AuthenticationError("Incorrect credentials");
			}

			//   const token = signToken(user);
			return { user };
		},
		addWish: async (parent, args, context) => {
			// if (context.user) {
			const wish = await Wish.create({
				...args,
				// name: context.user.name,
			});

			await User.findByIdAndUpdate(
				{ _id: mongoose.Types.ObjectId(args.userId) },
				{ $push: { wishes: mongoose.Types.ObjectId(wish.id) } },
				{ new: true }
			);

			return wish;
			// }

			// throw new AuthenticationError("You need to be logged in!");
		},
	},
};

module.exports = resolvers;
