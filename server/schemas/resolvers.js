const { AuthenticationError } = require("apollo-server-express");
const { User, Quiz } = require("../models");
const { signToken } = require("../utils/auth");
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    user: async (args) => {
      console.log(args)
      console.log("Resolver: User Query");
      const user = await User.findOne({ _id: args._id }).populate("quizzes")
      return user;
    },
    quiz: async (args) => {
      console.log("Resolver: Quiz Query");
      const quiz = await Quiz.findOne({ _id: args._id });
      return quiz;
    },
    users: async () => {
      console.log("Resolver: All Users Query");
      const users = await User.find({}).populate("quizzes");
      return users;
    },
    quizzes: async () => {
      console.log("Resolver: All Quizzes Query");
      const quizzes = await Quiz.find({});
      return quizzes;
    }
  },
  Mutation: {
    addQuiz: async (parent, args, context) => {
      console.log("Resolver: AddQuiz Mutation");
      if (!context.user){
        return new AuthenticationError("Please login.")
      }
      console.log(args)
      const quiz = await Quiz.create(
      {
        ...args, 
        creator: context.user._id
      });
      User.findOneAndUpdate(
        { _id: context.user._id },
        { $push: { quizzes: quiz._id }}
      )
      return quiz;
    },
    addUser: async (parent, args) => {
      console.log("Resolver: AddUser Mutation");
      const user = await User.create(args);
      const token = signToken(user);
      user.password = "REDACTED"
      return { token, user };
    },
    login: async (parent, {email, password}) => {
      console.log("Resolver: Login Mutation");
      const user = await User.findOne({email});

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
