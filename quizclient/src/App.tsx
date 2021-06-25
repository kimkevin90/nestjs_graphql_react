// import React, { useState } from "react";
// import { fetchQuizQuestions } from "./API";
// import QuestionCard from "./components/QuestionCard";

// import { QuestionState, Difficulty } from "./API";

// //Styles

// import { GlobalStyle, Wrapper } from "./App.styles";
// import { useQuery } from "@apollo/client";
// import { getAllUsersQuery } from "./graphql/queries";
// import { useRef } from "react";

// export type AnswerObject = {
//   question: string;
//   answer: string;
//   correct: boolean;
//   correctAnswer: string;
// };

// interface RefObject {
//   SayHi: () => void;
// }

// const TOTAL_QUESTIONS = 10;

// const App = () => {
//   const [loading, setLoading] = useState(false);
//   const [questions, setQuestions] = useState<QuestionState[]>([]);
//   const [number, setNumber] = useState(0);
//   const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
//   const [score, setScore] = useState(0);
//   const [gameOver, setGameOver] = useState(true);
//   const [selectedAnswer, setSelectedAnswer] = useState("");
//   const clickedRef = useRef<HTMLButtonElement | null>(null);
//   // const { data, error } = useQuery(getAllUsersQuery);

//   // console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));
//   // console.log(questions);
//   const startTrivia = async () => {
//     setLoading(true);
//     setGameOver(false);

//     const newQuestions = await fetchQuizQuestions(
//       TOTAL_QUESTIONS,
//       Difficulty.EASY
//     );

//     setQuestions(newQuestions);
//     setScore(0);
//     setUserAnswers([]);
//     setNumber(0);
//     setLoading(false);
//   };
//   const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
//     if (!gameOver) {
//       // User's answer
//       const answer = e.currentTarget.value;

//       setSelectedAnswer(answer);
//       // Check answer against correct answer
//     }
//   };
//   // console.log(questions);

//   const nextQuestion = () => {
//     const correct = questions[number].correct_answer === selectedAnswer;
//     // Add score if answer is correct
//     if (correct) setScore((prev) => prev + 1);
//     // Save the answer in the array for user answers
//     const answerObject = {
//       question: questions[number].question,
//       selectedAnswer,
//       correct,
//       correctAnswer: questions[number].correct_answer,
//     };

//     setUserAnswers((prev: any) => [...prev, answerObject]);

//     const nextQuestion = number + 1;

//     if (nextQuestion === TOTAL_QUESTIONS) {
//       setGameOver(true);
//     } else {
//       setNumber(nextQuestion);
//     }
//   };
//   // console.log(userAnswers.length);
//   console.log(userAnswers);
//   // console.log(TOTAL_QUESTIONS);
//   //46
//   return (
//     <>
//       <GlobalStyle />
//       <Wrapper>
//         <div className="App">
//           <h1>React QUIZ</h1>
//           {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
//             <button className="start" onClick={startTrivia}>
//               start
//             </button>
//           ) : null}
//           {!gameOver ? <p className="score">Score: {score}</p> : null}
//           {loading && <p>Loading Questions ...</p>}
//           {!loading && !gameOver && (
//             <QuestionCard
//               // array +1 해서 질문 1 만듬
//               questionNr={number + 1}
//               totalQuestions={TOTAL_QUESTIONS}
//               question={questions[number].question}
//               answers={questions[number].answers}
//               userAnswer={userAnswers ? userAnswers[number] : undefined}
//               clickedRef={clickedRef}
//               callback={checkAnswer}
//             />
//           )}
//           {/* {!gameOver &&
//           !loading &&
//           userAnswers.length === number + 1 &&
//           number !== TOTAL_QUESTIONS - 1 ? (
//             <button className="next" onClick={nextQuestion}>
//               Next Question
//             </button>
//           ) : null} */}
//           {!gameOver &&
//           !loading &&
//           !!clickedRef.current &&
//           number !== TOTAL_QUESTIONS - 1 ? (
//             <button className="next" onClick={nextQuestion}>
//               Next Question
//             </button>
//           ) : null}
//         </div>
//       </Wrapper>
//     </>
//   );
// };

// export default App;
import React, { useEffect, useState } from "react";
import { fetchQuizQuestions } from "./API";
import QuestionCard from "./components/QuestionCard";

import { QuestionState, Difficulty } from "./API";

//Styles

import { GlobalStyle, Wrapper } from "./App.styles";
import { useQuery } from "@apollo/client";
import { getAllUsersQuery } from "./graphql/queries";
import CountDownTimer from "./components/CountDownTimer";

export type AnswerObject = {
  question: string;
  answer: string;
  // correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App = () => {
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
      // User's answer
      const answer = e.currentTarget.value;
      // // Check answer against correct answer
      // const correct = questions[number].correct_answer === answer;
      // // Add score if answer is correct
      // if (correct) setScore((prev) => prev + 1);
      // Save the answer in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        // correct,
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
    console.log(userAnswers[number].answer);
    if (correct) setScore((prev) => prev + 1);
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  console.log(questions);
  // console.log(number);
  // console.log(TOTAL_QUESTIONS);
  //46
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <div className="App">
          <h1>React QUIZ</h1>
          <CountDownTimer hours={5} minutes={9} seconds={55} />
          {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
            <button className="start" onClick={startTrivia}>
              start
            </button>
          ) : null}
          {!gameOver ? <p className="score">Score: {score}</p> : null}
          {loading && <p>Loading Questions ...</p>}
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
          number !== TOTAL_QUESTIONS - 1 ? (
            <button className="next" onClick={nextQuestion}>
              Next Question
            </button>
          ) : null}
        </div>
      </Wrapper>
    </>
  );
};

export default App;
