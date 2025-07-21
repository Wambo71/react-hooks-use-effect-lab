import React, { useState, useEffect } from "react";
import Question from "./Question";
import quiz from "../data/quiz";

function App() {
  const [questions, setQuestions] = useState(quiz);
  const [currentQuestionId, setCurrentQuestion] = useState(1);
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(10); // ⏱️ Add timer state

  const currentQuestion = questions.find((q) => q.id === currentQuestionId);

  function handleQuestionAnswered(correct) {
    if (correct) {
      setScore((score) => score + 1);
    }

    // Move to next question or end game
    if (currentQuestionId < questions.length) {
      setCurrentQuestion((id) => id + 1);
    } else {
      setCurrentQuestion(null); // End quiz
    }

    setTimeRemaining(10); // 🔄 Reset timer for next question
  }

  return (
    <main>
      <section>
        {currentQuestion ? (
          <Question
            question={currentQuestion}
            timeRemaining={timeRemaining} // ⏱️ Pass timer props
            setTimeRemaining={setTimeRemaining}
            onAnswered={handleQuestionAnswered}
          />
        ) : (
          <>
            <h1>Game Over</h1>
            <h2>Total Correct: {score}</h2>
          </>
        )}
      </section>
    </main>
  );
}

export default App;
