import { gql } from '@apollo/client';

export const ADD_QUIZ = gql`
  mutation addQuiz($title: String!, $questions: Input_Questions!, $alottedTime: Int!) {
    addQuiz(title: $title, questions: $questions, alottedTime: $allotedTime) {
      token
      user{
        userName
        email
        password
      }
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
