import React ,{useRef} from 'react'

const Answer = ({ answers , selectedA , ansS,onSelect}) => {
  const shuffledA = useRef(null);

  if (!shuffledA.current) {
    shuffledA.current = [...answers].sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
          {shuffledA.current.map((answer,index) => {
            let cssC = '';
            const isSelected =
              selectedA === answer;
            if (ansS === "answered" && isSelected) {
              cssC = "selected";
            }
            if (
              (ansS === "correct" || ansS === "wrong") &&
              isSelected
            ) {
              cssC = ansS;
            }
            return (
              <li key={index} className="answer">
                <button
                  onClick={() => onSelect(answer)}
                  className={cssC}
                  disabled={ansS !== ''}
                >
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
  )
}

export default Answer
