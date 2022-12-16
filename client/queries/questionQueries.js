import { gql } from "@apollo/client";

const GET_QUESTIONS = gql`
  query getQuestions {
    questions {
      question
      answers
      correct
    }
  }
`;

export default GET_QUESTIONS;
