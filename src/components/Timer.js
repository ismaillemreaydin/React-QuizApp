import React, { useEffect } from "react";

function Timer({ timeLeft, setTimeLeft, handleAnswerOptionClick }) {
  useEffect(() => {
    if (timeLeft === 0) {
      handleAnswerOptionClick(null); // Time's up, move to the next question
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, setTimeLeft, handleAnswerOptionClick]);

  return (
    <div className="timer">
      Time left: {timeLeft} seconds
    </div>
  );
}

export default Timer;

