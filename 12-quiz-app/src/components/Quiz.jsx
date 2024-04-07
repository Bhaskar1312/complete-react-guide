import {useCallback, useState} from "react";
import QUESTIONS from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";

export default function Quiz() {
    // const [activeQuestionIndex, setActiveQuestionIndex] =  useState(0);
    const [answerState, setAnswerState] = useState('')
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = answerState==='' ? userAnswers.length:userAnswers.length-1;
    const quizIsComplete = activeQuestionIndex===QUESTIONS.length;


    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setAnswerState('answered')
        setUserAnswers(prevAnswers => [...prevAnswers,  selectedAnswer]);

        const timer = setTimeout(()=>{
            if(selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
                setAnswerState('correct')
            } else {
                setAnswerState('wrong')
            }
            setTimeout(()=>setAnswerState(''), 2000)
        }, 1000);
        // return ()=>clearTimeout(timer);
    }, [activeQuestionIndex]);

    const handleSkipAnswer = useCallback(()=> handleSelectAnswer(null), [handleSelectAnswer]);

    if(quizIsComplete) {
        return (
          <div id="summary">
              <img src={quizCompleteImg} alt="Trophy icon" />
              <h2>Quiz is Completed!</h2>
          </div>
        );
    }

    return (
        <div id="quiz">
        <div id="question">
            <QuestionTimer
                key={activeQuestionIndex}
                timeout={10000} onTimeout={handleSkipAnswer}/>
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <Answers
                key={activeQuestionIndex} // with key, when it changes, it is remounted
                answers={QUESTIONS[activeQuestionIndex].answers}
                selectedAnswer={userAnswers[userAnswers.length-1]}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />
        </div>
</div>
    );
}