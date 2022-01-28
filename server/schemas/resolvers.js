const { AuthenticationError } = require('apollo-server-express');
const { User, Wish } = require('../models');
// const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('wishes');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('wishes');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('wishes');
    },
    wishes: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Wish.find(params).sort({ createdAt: -1 });
    },
    wish: async (parent, { _id }) => {
      return Wish.findOne({ _id });
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
    //   const token = signToken(user);

      return { user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

    //   const token = signToken(user);
      return { user };
    },
    addwish: async (parent, args, context) => {
      if (context.user) {
        const wish = await Wish.create({ ...args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { wishes: wish._id } },
          { new: true }
        );

        return wish;
      }

      throw new AuthenticationError('You need to be logged in!');
    }
  }
};

module.exports = resolvers;
