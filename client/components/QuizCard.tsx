import React, { useState } from "react";
import { Question } from "../pages/quiz";

const QuizCard = ({ questions }: { questions: Question[] }) => {
  let passingGrade = Math.round(questions.length * 0.7);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [disableAnswers, setDisabled] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const [retryQuiz, setRetryBtn] = useState(false);
  const [showRight, setRight] = useState(-1);
  const [showWrong, setWrong] = useState(-1);
  const [score, setScore] = useState(0);

  function pressedAnswer(answer: number) {
    setDisabled(true);

    const question = questions[currentQuestion];
    const noMoreQuestions = currentQuestion === questions.length - 1;

    let isRightAnswer: boolean = answer === question.correct;

    if (isRightAnswer) {
      setRight(question.correct);
      setScore(score + 1);
    } else {
      setWrong(answer);
      setRight(question.correct);
    }

    if (noMoreQuestions) {
      setRetryBtn(true);
    } else {
      setShowNext(true);
    }
  }

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setShowNext(false);
    setRight(-1);
    setWrong(-1);
    setDisabled(false);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setRetryBtn(false);
    setRight(-1);
    setWrong(-1);
    setDisabled(false);
    setScore(0);
  };

  return (
    <div className="question">
      {retryQuiz ? (
        <div className="results">
          <h2>
            <b>Score:</b> {Math.round((score / questions.length) * 100)}%
          </h2>
          <p>Passing Grade: 70%</p>
          <p className={`${score >= passingGrade ? "right" : "wrong"}`}>
            {score >= passingGrade ? "You Have Passed!" : "You Have Failed!"}
          </p>
          <button onClick={resetQuiz} className="btn btn__accent">
            Retry Quiz
          </button>
        </div>
      ) : (
        <>
          <span className="question__progress">
            <b>Q:</b> {currentQuestion + 1} / {questions.length}
          </span>
          <h1 className="question__heading text-bd">
            {questions[currentQuestion].question}
          </h1>
          <div className="question__answers">
            {questions[currentQuestion].answers.map(
              (answer: string, index: number) => (
                <button
                  disabled={disableAnswers}
                  className={`${index === showRight ? "right" : ""} ${
                    index === showWrong ? "wrong" : ""
                  }`}
                  onClick={() => pressedAnswer(index)}
                  key={index}
                >
                  {answer}
                </button>
              )
            )}
          </div>
          {showNext && currentQuestion < questions.length - 1 && (
            <button onClick={nextQuestion} className="btn btn__accent">
              Next Question
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default QuizCard;
