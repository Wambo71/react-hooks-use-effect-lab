import React, { useEffect } from 'react';

function Question({ question, timeRemaining, setTimeRemaining, onAnswered }) {
  useEffect(() => {
    if (timeRemaining === 0) {
      onAnswered(false);       
      return;                  
    }

    const timeoutId = setTimeout(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [timeRemaining, setTimeRemaining, onAnswered]);

  function handleAnswerClick(index) {
    const isCorrect = index === question.correctIndex;
    onAnswered(isCorrect);
   
  }

  return (
    <div>
      <h2>{question.prompt}</h2>
      <ul>
        {question.answers.map((answer, index) => (
          <li
            key={index}
            onClick={() => handleAnswerClick(index)}
            style={{ cursor: "pointer", padding: "8px", borderBottom: "1px solid #ccc" }}
          >
            {answer}
          </li>
        ))}
      </ul>
      <p>{timeRemaining} seconds remaining</p>
    </div>
  );
}

export default Question;
