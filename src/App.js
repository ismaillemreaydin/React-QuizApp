import React, { useState, useEffect } from "react";
import questionsData from "./data/questions.json";
import "./App.css";
import Quiz from "./components/Quiz";

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(questionsData);
  }, []);
  return (
    <div className="app">
      <Quiz questions={questions} />
    </div>
  );
}

export default App;
