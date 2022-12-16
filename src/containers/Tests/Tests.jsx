import React from "react";
import { Skeleton } from "@mui/material";
import { useState } from "react";
import Quiz from "react-quiz-component";


import {
  TestContainer,
  TestContent,
  TestTabs,
  TestTab,
  TestUl,
  TestName,
} from "./styles";

import TopPanel from "../../components/TopPanel";
import Header from "../../components/Header";

import { quiz_one, quiz_second,quiz_third } from "./data";

const Tests = ({ theme }) => {
  // const [active, setActive] = useState(TESTS_ARRAY[0]?.Test);

  const renderCustomResultPageOne = (obj) => (
    <div>
      <p>Тест 1 завершен</p>
      <p>
        Ваш результат: {obj.numberOfCorrectAnswers} из {obj.numberOfQuestions}{" "}
        праивильно
      </p>
      <button
        className="admin__button"
        onClick={() => {
          location.reload();
        }}
      >
        Начать заново
      </button>
    </div>
  );

  const setQuizResultFirst = async (obj) => {
    const body = {
      test_one:
        obj.numberOfCorrectAnswers >= user.test_one
          ? obj.numberOfCorrectAnswers
          : user.test_one,
      id: user._id,
    };

    await axios.patch(`${API_URL}/profile`, body);
  };
   const setQuizResultThird = async (obj) => {
     const body = {
       test_third:
         obj.numberOfCorrectAnswers >= user.test_third
           ? obj.numberOfCorrectAnswers
           : user.test_third,
       id: user._id,
     };

     await axios.patch(`${API_URL}/profile`, body);
   };

  const setQuizResultSecond = async (obj) => {
    const body = {
      test_two:
        obj.numberOfCorrectAnswers >= user.test_two
          ? obj.numberOfCorrectAnswers
          : user.test_two,
      id: user._id,
    };

    await axios.patch(`${API_URL}/profile`, body);
  };

  return (
    <TestContainer>
      <Header />
      <TestContent>
        <TopPanel />
        <Quiz
          quiz={quiz_one}
          continueTillCorrect={false}
          shuffle={true}
          showInstantFeedback={false}
          showDefaultResult={false}
          customResultPage={renderCustomResultPageOne}
          onComplete={setQuizResultFirst}
        />
        <Quiz
          quiz={quiz_second}
          continueTillCorrect={false}
          shuffle={true}
          showInstantFeedback={false}
          showDefaultResult={false}
          customResultPage={renderCustomResultPageOne}
          onComplete={setQuizResultSecond}
        />
        <Quiz
          quiz={quiz_third}
          continueTillCorrect={false}
          shuffle={true}
          showInstantFeedback={false}
          showDefaultResult={false}
          customResultPage={renderCustomResultPageOne}
          onComplete={setQuizResultThird}
        />
      </TestContent>
    </TestContainer>
  );
};

export default Tests;
