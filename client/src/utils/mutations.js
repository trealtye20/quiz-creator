import { gql } from '@apollo/client';

export const ADD_QUIZ = gql`
mutation addQuiz($title: String!, $questions: Input_Question!, $allottedTime: Int!, $description: String!) {
  addQuiz(title: $title, questions: $questions, allottedTime: $allottedTime, description: $description) {
    _id
    title
    questions{
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

export const ADD_USER = gql`
  mutation addUser($userName: String!, $email: String!, $password: String!, $quizzes: [ID]){
    addUser(userName: $userName, email: $email, password: $password, quizzes: $quizzes){
      token
      user{
        userName
        email
        password
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!){
    login(email: $email, password: $password){
      token
      user{
        userName
        email
        password
      }
    }
  }
`;
