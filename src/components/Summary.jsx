import quizCLogo from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

const Summary = ({ userA }) => {
  const skippedA = userA.filter(ans => ans === null)
  const correctA = userA.filter((ans,index) => QUESTIONS[index].answers[0] === ans)
  const skippedS = Math.round(
    (skippedA.length / userA.length) * 100
  )
  const correctS = Math.round(
    (correctA.length / userA.length) * 100
  )

  const wrongS = 100 - skippedS - correctS
  return (
    <div id="summary">
      <img src={quizCLogo} alt="" />
      <h2>Quiz is Completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedS}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctS}%</span>
          <span className="text">answerd correctly</span>
        </p>
        <p>
          <span className="number">{wrongS}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userA.map((ans,index) => {
          let cssC = 'user-answer'

          if(ans === null){
            cssC +=' skipped'
          }else if(ans === QUESTIONS[index].answers[0]){
            cssC+=' correct'
          }else{
            cssC += ' wrong'
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssC}>{ans ?? 'Skipped'}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Summary;
