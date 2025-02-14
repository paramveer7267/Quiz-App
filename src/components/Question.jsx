import React, { useState } from "react";
import QuizTimer from "./QuizTimer";
import Answer from "./Answer";
import QUESTIONS from "../questions";
const Question = ({
  idx,
  onSelectA,
  onSkip
}) => {
 const [answer,setAns]  = useState({
  selectedA:'',
  isCorr:null
 })

 let timer  = 10000
 if(answer.selectedA){
  timer = 1000;
 }
 if(answer.isCorr !== null){
  timer = 1000;
 }


 function handleSelectAnswer(answer){
  setAns({
    selectedA:answer,
    isCorr: null
  })

  setTimeout(() => {
    setAns({
      selectedA:answer,
      isCorr:QUESTIONS[idx].answers[0] === answer
    })

    setTimeout(() => {
      onSelectA(answer)
    },1000)
  },1000)
 }

 let ansS = ''
if(answer.selectedA && answer.isCorr !== null){
  ansS = answer.isCorr ? "correct" : "wrong"
}else if(answer.selectedA){
  ansS = 'answered'
}

  return (
    <div id="question">
      <QuizTimer
      key={timer}
        timeout={timer}
        onTimeout={answer.selectedA === '' ? onSkip : null}
        mode={ansS}
      ></QuizTimer>
      <h2>{QUESTIONS[idx].text}</h2>
      <Answer
        answers={QUESTIONS[idx].answers}
        onSelect={handleSelectAnswer}
        ansS={ansS}
        selectedA={answer.selectedA}
      />
    </div>
  );
};

export default Question;
