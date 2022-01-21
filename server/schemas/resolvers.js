const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { Quiz } = require("../models")
const { signToken } = require("../utils/auth");
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      console.log("Resolver: User Query");
      const user = await User.findOne({ _id: args._id }).populate("quizzes")
      return user;
    },
    quiz: async (parent, args, context) => {
      console.log("Resolver: Quiz Query");
      const quiz = await Quiz.findOne({ _id: args._id });
      return quiz;
    }
  },
  Mutation: {
    addQuiz: async (parent, args) => {
      console.log(args) // TODO delete after testing
      console.log("Resolver: AddQuiz Mutation");
      const quiz = await Quiz.create(args);
      console.log(quiz) // TODO delete after testing
      return quiz;
    },
    addUser: async (parent, args) => {
      console.log(args) // TODO delete after testing
      console.log("Resolver: AddUser Mutation");
      let user = await User.create(args);
      user = await User.findOne({_id: user._id}).populate("quizzes");
      console.log(user) // TODO delete after testing
      return user;
    }
  },
};

module.exports = resolvers;
