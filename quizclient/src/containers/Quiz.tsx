import React, { useEffect, useState } from "react";
import { fetchQuizQuestions } from "../API";
import QuestionCard from "../components/QuestionCard";
import Timer from "../components/Timer";
import { QuestionState, Difficulty } from "../API";
import {
  CenterLayout,
  HorizontalDivider,
  SquareBorderButton,
  SquareButton,
} from "../layouts/CenterLayout";
//Styles
import { useQuery } from "@apollo/client";
import { getAllUsersQuery } from "../graphql/queries";
import CountDownTimer from "../components/CountDownTimer";
import PageTop from "../layouts/PageTop";

export type AnswerObject = {
  question: string;
  answer: string;
  // correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const Quiz = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  // const { data, error } = useQuery(getAllUsersQuery);
  // console.log(data);
  // console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));
  // console.log(questions);
  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const answerObject = {
        question: questions[number].question,
        answer,

        correctAnswer: questions[number].correct_answer,
      };
      if (!userAnswers[number]) {
        setUserAnswers((prev) => [...prev, answerObject]);
      } else {
        setUserAnswers((prev) => {
          prev.splice(number, 1, answerObject);
          return [...prev];
        });
      }
    }
  };

  const nextQuestion = () => {
    const correct =
      questions[number].correct_answer === userAnswers[number].answer;

    if (correct) setScore((prev) => prev + 1);
    const nextQ = number + 1;
    // console.log(nextQ);
    // console.log(TOTAL_QUESTIONS);
    if (nextQ === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQ);
    }
  };

  console.log(number);

  //46
  return (
    <CenterLayout>
      <div>
        <PageTop deletePadding title="퀴즈 앱" subtitle="관리자 로그인" />
        <CountDownTimer hours={0} minutes={0} seconds={0} gameOver={gameOver} />
        {!gameOver ? <p>획득 점수: {score}</p> : null}
        <HorizontalDivider style={{ marginTop: 0, marginBottom: 10 }} />
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button onClick={() => startTrivia()}>start</button>
        ) : null}

        {loading && <p>문제를 불러오는중 입니다...</p>}
        {!loading && !gameOver && (
          <QuestionCard
            // array +1 해서 질문 1 만듬
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTIONS ? (
          <button onClick={nextQuestion}>Next Question</button>
        ) : null}
        <SquareButton
          onClick={nextQuestion}
          textColor="black"
          contrastTextColor="white"
          color="black"
        >
          초기화
        </SquareButton>
      </div>
    </CenterLayout>
  );
};

export default Quiz;
