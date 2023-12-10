import { useState } from "react";
import { useThemeCotext } from "../contexts/ThemeContext";

const Question = ({ questionObj,questionlen,answer,setAnswer,anwserIndex,setAnswerIndex,inputAnswer,handelInputAnswer,setShowAnswerTimer }) => {
  const { question,choices,correctAnswer,type } = questionObj;
  const { currentQuestion,changeCurrentQuestion,resetCurrentQuestion,changeStateDataWrong,changeStateDataCorrect,setShowResultTrue } = useThemeCotext();

  const onAnswerClick = (answer,index) => {
    setAnswerIndex(index);
    answer === correctAnswer ? setAnswer(true) : setAnswer(false);
  };

  const handelNextQuestion = () => {
    setShowAnswerTimer(false);
    answer ? changeStateDataCorrect() : changeStateDataWrong();
    if (currentQuestion !== questionlen - 1) changeCurrentQuestion()
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

  return (
    <>
      <h2 className="question__title">{question}</h2>
      {type === "MCQs" ?
        <ul className="question__list">
          {

            choices.map((answer,index) => {
              return (
                <li
                  onClick={() => onAnswerClick(answer,index)}
                  key={index}
                  className={
                    anwserIndex === index ? "question__list__item selected" : "question__list__item"
                  }
                >
                  {answer}
                </li>
              )
            })
          }
        </ul>
        : <input type="text" className="question__input" value={inputAnswer} onChange={handelInputAnswer} />
      }
      <div className="question__button">
        <button
          onClick={handelNextQuestion}
          disabled={anwserIndex === null && !inputAnswer}
        >
          {currentQuestion === questionlen - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </>
  );
};

export default Question;
