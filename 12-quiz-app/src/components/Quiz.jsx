import {useCallback, useState} from "react";
import QUESTIONS from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz() {
    // const [activeQuestionIndex, setActiveQuestionIndex] =  useState(0);
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex===QUESTIONS.length;


    const handleSelectAnswer = useCallback(function handleSelectAnswer(answer) {
        setUserAnswers(prevAnswers => {
           return [...prevAnswers,  answer];
        });
    }, []);

    const handleSkipAnswer = useCallback(()=> handleSelectAnswer(null), [handleSelectAnswer]);

    if(quizIsComplete) {
        return (
          <div id="summary">
              <img src={quizCompleteImg} alt="Trophy icon" />
              <h2>Quiz is Completed!</h2>
          </div>
        );
    }

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random()-0.5); // swap, [-1, 1]

    return (
        <div id="quiz">
        <div id="question">
            <QuestionTimer timeout={10000} onTimeout={handleSkipAnswer}/>
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <ul id="answers">
                {shuffledAnswers.map((answer) =>
                    (<li key={answer} className="answer">
                        <button onClick={()=>handleSelectAnswer(answer)}>{answer}</button>
                    </li>)
                )}
            </ul>
        </div>
</div>
    );
}