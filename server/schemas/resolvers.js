const { AuthenticationError } = require("apollo-server-express");
const { User, Quiz } = require("../models");
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
      const user = await User.create(args);
      const token = signToken(user);
      user.password = "REDACTED"
      console.log(user) // TODO delete after testing
      return { token, user };
    },
    login: async (parent, {email, password}) => {
      console.log({email, password}) // TODO delete after testing
      console.log("Resolver: Login Mutation");
      const user = await User.findOne({email})

      if (!user) {
        throw new AuthenticationError('No user with this email found!');
      }

      const passwordCheck = await user.isCorrectPassword(password);

      if (!passwordCheck) {
        throw new AuthenticationError("Incorrect Password!");
      }

      const token = signToken(user);
      user.password = "REDACTED"
      return {token, user};
    }
  },
};

module.exports = resolvers;
