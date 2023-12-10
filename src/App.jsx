import Quiz from "./pages/Quiz";
import { useEffect,useState } from "react";

const App = () => {

  const [questions,setQuestions] = useState([])

  useEffect(() => {
    getQuestions();
  },[])

  const getQuestions = async () => {
    try {
      const response = await fetch('https://644982a3e7eb3378ca4ba471.mockapi.io/questions');
      const questionsData = await response.json()
      setQuestions(questionsData);
    } catch (error) {
      console.log(error);
    }
  }

  return (questions.length != 0 && <Quiz questions={questions} />);
};

export default App;
