import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import GET_QUESTIONS from "../queries/questionQueries";
import { client } from "../pages/_app";
import QuizCard from "../components/QuizCard";
import Head from "next/head";

export interface Question {
  __typename: string;
  question: string;
  answers: string[];
  correct: number;
}

const Quiz = ({ questions }: { questions: Question[] }) => {
  if (!questions) {
    return (
      <div className="center">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Quiz App With GraphQL and Apollo</title>
        <meta
          name="description"
          content="Quiz App Built With GraphQL and Apollo Client"
        />
      </Head>
      <section className="quiz center container">
        <QuizCard questions={questions} />
      </section>
    </>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({ query: GET_QUESTIONS });

  return {
    props: {
      questions: data.questions,
    },
  };
}

export default Quiz;
