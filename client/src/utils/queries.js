import { gql } from '@apollo/client';

export const GET_USER = gql`
  query user($_id: ID) {
    user{
      _id
      username
      email
      password
      quizzes
    }
  }
`;

export const GET_QUIZ = gql`
  query quiz($_id: ID) {
    quiz{
      title
      questions{
        q
        options
        answer
      }
      highScore
      allottedTime
    }
  }
`;

export const GET_ALL_USERS = gql`
  query users{
    users{
      _id
      userName
      email
      password 
      quizzes{
        title
        questions{
          q
          options
          answer
        }
        highScore
        allottedTime
      }
    }
  }
`;

export const GET_ALL_QUIZZES = gql`
  query quizzes{
    quizzes{
      _id
      title
      questions{
        q
        options
        answer
      }
      highScore
      allottedTime
    }
  }
`;
