import { gql } from "@apollo/client";

export const GET_USER = gql`
  query user($_id: ID) {
    user(_id: $_id) {
      userName
      email
      quizzes {
        title
        _id
        questions {
          q
          options
          answer
        }
        highScore
      }
    }
  }
`;

export const GET_QUIZ = gql`
  query quiz($_id: ID) {
    quiz(_id: $_id) {
      _id
      title
      questions {
        q
        options
        answer
      }
      highScore
      allottedTime
      description
      creator
    }
  }
`;

export const GET_ALL_USERS = gql`
  query users {
    users {
      _id
      userName
      email
      password
      quizzes {
        _id
        title
        questions {
          q
          options
          answer
        }
        highScore
        allottedTime
        description
        creator
      }
    }
  }
`;

export const GET_ALL_QUIZZES = gql`
  query getQuizzes{
    quizzes {
      _id
      title
      questions {
        q
        options
        answer
      }
      highScore
      allottedTime
      description
      creator
    }
  }
`;
