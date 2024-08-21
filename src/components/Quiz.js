import React, { useState } from "react";
import Question from "./Question";
import Timer from "./Timer";

function Quiz({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
      alert("Correct!");
    } else {
      alert("Wrong!");
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setTimeLeft(10); // Reset timer for the next question
    } else {
      setShowScore(true);
    }
  };

  return showScore ? (
    <div className="score-section">
      You scored {score} out of {questions.length}
    </div>
  ) : (
    <div>
      <Timer
        timeLeft={timeLeft}
        setTimeLeft={setTimeLeft}
        handleAnswerOptionClick={handleAnswerOptionClick}
      />
      <Question
        question={questions[currentQuestion]}
        handleAnswerOptionClick={handleAnswerOptionClick}
      />
    </div>
  );
}

export default Quiz;
