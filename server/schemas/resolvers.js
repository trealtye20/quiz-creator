const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  
  Query: {
    user: async (parent, args, context) => {
      console.log(args)
      const user = await User.findOne({_id:args._id}).populate("quizzes")
      console.log(user)
      return user;
    }
  },
  Mutation: {
    addQuiz: async (parent, args) => {

    }
  }
};

module.exports = resolvers;
