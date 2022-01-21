const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    userName: String
    email: String
    password: String
    quizzes: [Quiz]
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
  }
`;

module.exports = typeDefs;
