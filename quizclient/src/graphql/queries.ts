import { gql } from "@apollo/client";

export const getAllUsersQuery = gql`
  query getAllQuizUser {
    getAllQuizUser {
      id
      name
      currentPoint
      beforePoint
    }
  }
`;

export const getOneUsersQuery = gql`
  query getOneQuizUser($quizOneData: QuizOneInput!) {
    getOneQuizUser(quizOneData: $quizOneData) {
      id
      name
      currentPoint
      beforePoint
    }
  }
`;

export const addQuizUsersMutation = gql`
  mutation addNewQuizUser($newQuizData: NewQuizInput!) {
    addNewQuizUser(newQuizData: $newQuizData) {
      id
      name
      currentPoint
      beforePoint
    }
  }
`;

export const updateQuizUsersMutation = gql`
  mutation updateNewQuizUser($id: String!, $updateQuizData: UpdateQuizInput!) {
    updateNewQuizUser(updateQuizData: $newQuizData) {
      id
      name
      currentPoint
      beforePoint
    }
  }
`;
