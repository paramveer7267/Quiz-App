import React, { useState, useCallback } from "react";
import QUESTIONS from "../questions";
import Question from "./Question";
import Summary from "./Summary";

const Quiz = () => {
  const [userA, setUserA] = useState([]);
  const activeQ = userA.length;

  const quizC = activeQ === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedA) {
      setUserA((prev) => {
        return [...prev, selectedA];
      });
    },
    []
  );
  const handleSkipA = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizC) {
    return (
      <Summary userA = {userA}/>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQ}
        idx={activeQ}
        onSelectA={handleSelectAnswer}
        onSkip={handleSkipA}
      />
    </div>
  );
};

export default Quiz;
