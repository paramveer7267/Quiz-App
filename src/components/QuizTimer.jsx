import React, { useEffect, useState } from "react";

const QuizTimer = ({ timeout, onTimeout ,mode}) => {
  const [remainT, setRemainT] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout)
    return () => {
      clearTimeout(timer)
    }
  }, [timeout, onTimeout]);
  useEffect(() => {
    const timer = setInterval(() => {
      setRemainT((prev) => prev - 100);
    }, 100)
    return () => {
      clearTimeout(timer)
    }
  }, []);

  return (
    <progress
      id="question-time"
      max={timeout}
      value={remainT}
      className={mode}
    ></progress>
  );
};

export default QuizTimer;
