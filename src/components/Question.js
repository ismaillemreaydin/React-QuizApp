import React from "react";

function Question({ question, handleAnswerOptionClick }) {
  return (
    <div>
      <div className="question-section">
        <div className="question-count">
          <span>Question</span>/{question?.difficulty.toUpperCase()}
        </div>
        <div className="question-text">{question?.question}</div>
      </div>
      <div className="answer-section">
        {question?.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswerOptionClick(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
