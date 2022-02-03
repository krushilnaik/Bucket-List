const { AuthenticationError } = require("apollo-server-micro");
const { User, Wish } = require("../models");
const mongoose = require("mongoose");

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
			return User.findOne({ _id: mongoose.Types.ObjectId(id) })
				.select("-__v -password")
				.populate("wishes");
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
		addWish: async (parent, { wishText, userId }, context) => {
			const wish = await Wish.create({
				wishText,
			});

			await User.findByIdAndUpdate(
				{ _id: mongoose.Types.ObjectId(userId) },
				{ $push: { wishes: mongoose.Types.ObjectId(wish.id) } },
				{ new: true }
			);

			return wish;
		},
		markWishDone: async (parent, { wishId }, context) => {
			const updatedWish = await Wish.findByIdAndUpdate(
				{ _id: mongoose.Types.ObjectId(wishId) },
				{
					isCompleted: true,
				}
			);

			return updatedWish;
		},
	},
};

module.exports = resolvers;
