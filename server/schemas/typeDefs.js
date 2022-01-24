const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    userName: String
    email: String
    password: String
    quizzes: [Quiz]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Quiz {
    title: String
    questions: [Question]
    highScore: Int
    allottedTime: Int
  }
  type Question {
    q: String
    options: [String]
    answer: String
  }
  type Query {
    user(_id: ID): User
    quiz(_id: ID): Quiz
    users: [User]
  }
  input Input_Question {
    q: String,
    options: [String],
    answer: String
  }
  type Mutation {
    addQuiz(title: String!, questions: Input_Question!, allottedTime: Int!): Quiz
    # Sign up and log in
    addUser(userName: String!, email: String!, password: String!, quizzes: [ID]): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
