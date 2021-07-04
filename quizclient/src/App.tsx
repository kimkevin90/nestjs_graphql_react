// import React, { useEffect, useState } from "react";
// import { fetchQuizQuestions } from "./API";
// import QuestionCard from "./components/QuestionCard";
// import Timer from "./components/Timer";
// import { QuestionState, Difficulty } from "./API";

// //Styles

// import { useQuery } from "@apollo/client";
// import { getAllUsersQuery } from "./graphql/queries";
// import CountDownTimer from "./components/CountDownTimer";

// export type AnswerObject = {
//   question: string;
//   answer: string;
//   // correct: boolean;
//   correctAnswer: string;
// };

// const TOTAL_QUESTIONS = 10;

// const App = () => {
//   const [loading, setLoading] = useState(false);
//   const [questions, setQuestions] = useState<QuestionState[]>([]);
//   const [number, setNumber] = useState(0);
//   const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
//   const [score, setScore] = useState(0);
//   const [gameOver, setGameOver] = useState(true);

//   // const { data, error } = useQuery(getAllUsersQuery);
//   // console.log(data);
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
//       // // Check answer against correct answer
//       // const correct = questions[number].correct_answer === answer;
//       // // Add score if answer is correct
//       // if (correct) setScore((prev) => prev + 1);
//       // Save the answer in the array for user answers
//       const answerObject = {
//         question: questions[number].question,
//         answer,
//         // correct,
//         correctAnswer: questions[number].correct_answer,
//       };
//       if (!userAnswers[number]) {
//         setUserAnswers((prev) => [...prev, answerObject]);
//       } else {
//         setUserAnswers((prev) => {
//           prev.splice(number, 1, answerObject);
//           return [...prev];
//         });
//       }
//     }
//   };

//   const nextQuestion = () => {
//     const correct =
//       questions[number].correct_answer === userAnswers[number].answer;

//     if (correct) setScore((prev) => prev + 1);
//     const nextQ = number + 1;
//     // console.log(nextQ);
//     // console.log(TOTAL_QUESTIONS);
//     if (nextQ === TOTAL_QUESTIONS) {
//       setGameOver(true);
//     } else {
//       setNumber(nextQ);
//     }
//   };

//   console.log(number);

//   //46
//   return (
//     <>
//       <div>
//         <h1>React QUIZ</h1>
//         <CountDownTimer hours={0} minutes={0} seconds={0} gameOver={gameOver} />
//         {/* <Timer /> */}
//         {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
//           <button onClick={() => startTrivia()}>start</button>
//         ) : null}
//         {!gameOver ? <p>Score: {score}</p> : null}
//         {loading && <p>Loading Questions ...</p>}
//         {!loading && !gameOver && (
//           <QuestionCard
//             // array +1 해서 질문 1 만듬
//             questionNr={number + 1}
//             totalQuestions={TOTAL_QUESTIONS}
//             question={questions[number].question}
//             answers={questions[number].answers}
//             userAnswer={userAnswers ? userAnswers[number] : undefined}
//             callback={checkAnswer}
//           />
//         )}
//         {!gameOver &&
//         !loading &&
//         userAnswers.length === number + 1 &&
//         number !== TOTAL_QUESTIONS ? (
//           <button onClick={nextQuestion}>Next Question</button>
//         ) : null}
//       </div>
//     </>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Quiz from "./containers/Quiz";
import {
  StylesProvider,
  ThemeProvider as MUIThemeProvider,
} from "@material-ui/core/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { MUITheme, languageFontFamilies, darkTheme } from "./styles/theme";
import { CssBaseline, createMuiTheme, Button } from "@material-ui/core";
import Dnd from "./containers/Dnd";
const App = () => {
  return (
    <>
      <StylesProvider injectFirst>
        <MUIThemeProvider theme={MUITheme}>
          <StyledThemeProvider theme={MUITheme}>
            <>
              <CssBaseline>
                <BrowserRouter>
                  <Switch>
                    <Route exact path="/" component={Quiz} />
                    <Route exact path="/drag" component={Dnd} />
                  </Switch>
                </BrowserRouter>
              </CssBaseline>
            </>
          </StyledThemeProvider>
        </MUIThemeProvider>
      </StylesProvider>
    </>
  );
};

export default App;
