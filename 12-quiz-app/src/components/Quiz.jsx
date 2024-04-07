import {useCallback, useState} from "react";

import QUESTIONS from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex===QUESTIONS.length;


    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswers(prevAnswers => [...prevAnswers,  selectedAnswer]);
    }, []);

    const handleSkipAnswer = useCallback(
        ()=> handleSelectAnswer(null),
        [handleSelectAnswer]
    );

    if(quizIsComplete) {
        return (
            <Summary userAnswers={userAnswers} />
        );
    }

    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex}  //with key, when it changes, it is remounted
                index={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    );
}