import { useThemeCotext } from "../contexts/ThemeContext";
import Question from "../components/Question";
import Timer from "../components/Timer";
import { useState } from "react";

const Quiz = ({ questions }) => {
  const { currentQuestion,resetCurrentQuestion,changeCurrentQuestion,showResult,result,setShowResultTrue,setShowResultFalse,returnShowResult,changeStateDataWrong } = useThemeCotext();
  const [answer,setAnswer] = useState(null);
  const [anwserIndex,setAnswerIndex] = useState(null);
  const [showAnswerTimer,setShowAnswerTimer] = useState(true);
  const [inputAnswer,setInputAnswer] = useState('');
  const { correctAnswer } = questions;

  const onTimeUp = () => {
    setShowAnswerTimer(false);
    setAnswer(false);
    changeStateDataWrong();
    setShowResultFalse();
    if (currentQuestion !== questions.length - 1) changeCurrentQuestion()
    else {
      resetCurrentQuestion();
      setShowResultTrue();
    }
    setAnswerIndex(null);
    setAnswer(null);
    setTimeout(() => {
      setShowAnswerTimer(true);
    });
  }

  const handelInputAnswer = (event) => {
    setInputAnswer(event.target.value);
    inputAnswer === correctAnswer ? setAnswer(true) : setAnswer(false);
  }

  return (
    <div className="quiz__container">
      {!showResult ?
        <>
          {showAnswerTimer && <Timer duration={10} onTimeUp={onTimeUp} />}
          <span className="active__question__number">{currentQuestion + 1}</span> /{" "}
          <span className="total__questions" onClick={changeCurrentQuestion}>
            {questions.length}
          </span>
          <Question questionObj={questions[currentQuestion]} questionlen={questions.length} answer={answer} setAnswer={setAnswer} anwserIndex={anwserIndex} setAnswerIndex={setAnswerIndex} inputAnswer={inputAnswer} handelInputAnswer={handelInputAnswer} setShowAnswerTimer={setShowAnswerTimer} />
        </>
        :
        <div className="result__container">
          <h3 className="result__title">Result</h3>
          <p className="result__number">Totla Questions: <span>{questions.length}</span></p>
          <p className="result__score">Totla Score: <span>{result.score}</span></p>
          <p className="result__correct-answers">Totla Correct Answers: <span>{result.correctAnswers}</span></p>
          <p className="result__wrong-answers">Totla Wrong Answers: <span>{result.wrongAnswers}</span></p>
          <button onClick={returnShowResult}>Try again</button>
        </div>
      }
    </div>
  );
};

export default Quiz;
