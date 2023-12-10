import { createContext,useContext,useState } from "react";

export const ThemeContext = createContext();

const initialState = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0
}

export const ThemeContextProvider = ({ children }) => {
  const [currentQuestion,setCurrentQuestion] = useState(0);
  const [result,setResult] = useState(initialState);
  const [showResult,setShowResult] = useState(false);

  const changeCurrentQuestion = () => {
    setCurrentQuestion((prev) => prev + 1);
  };

  const resetCurrentQuestion = () => {
    setCurrentQuestion(0);
  };

  const setShowResultTrue = () => {
    setShowResult(true);
  }

  const setShowResultFalse = () => {
    setShowResult(false);
  }

  const returnShowResult = () => {
    setShowResult(false);
    setResult(initialState);
  }

  const changeStateDataCorrect = () => {
    setResult({
      ...result,
      score: result.score + 5,
      correctAnswers: result.correctAnswers + 1
    })
  }

  const changeStateDataWrong = () => {
    setResult({
      ...result,
      wrongAnswers: result.wrongAnswers + 1
    })
  }

  return (
    <ThemeContext.Provider value={
      {
        currentQuestion,changeCurrentQuestion,resetCurrentQuestion,
        result,returnShowResult,
        showResult,setShowResultTrue,setShowResultFalse,
        changeStateDataWrong,changeStateDataCorrect
      }
    }>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeCotext = () => useContext(ThemeContext);
export default ThemeContextProvider;
