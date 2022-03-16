import React, { useState, useEffect } from 'react'
import Start from './component/Start'
import Question from './component/Question'
import quizData from './data/quiz.json'
import End from './component/End'
import './App.css'
let interval
const App = () => {
  const [step, setStep] = useState(1)
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [answer, setAnswer] = useState([])
  const [time, setTime] = useState(0)

  useEffect(() => {
    if (step === 3) {
      clearInterval(interval)
    }
  }, [step])

  const quizStartHandle = () => {
    setStep(2)
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1)
    }, 1000)
  }
  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswer([]);
    setStep(2);
    setTime(0);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1)
    }, 1000)
  }
  return (
    <div className="App">
      {step === 1 && <Start onQuizStart={quizStartHandle} />}
      {step === 2 && (
        <Question
          data={quizData.data[activeQuestion]}
          onAnswerUpdate={setAnswer}
          numberOfQuestion={quizData.data.length}
          activeQuestion={activeQuestion}
          onSetStep={setStep}
          onSetActiveQuestion={setActiveQuestion}
        />
      )}
      {step === 3 && (
        <End
          results={answer}
          data={quizData.data}
          onReset={resetClickHandler}
          time={time}
        />
      )}
    </div>
  )
}

export default App
