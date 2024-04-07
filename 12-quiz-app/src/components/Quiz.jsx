import {useState} from "react";
import QUESTIONS from "../questions.js";

export default function Quiz() {
    // const [activeQuestionIndex, setActiveQuestionIndex] =  useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;

    function handleSelectAnswer(answer) {
        setUserAnswers(prevAnswers => {
           return [...prevAnswers,  answer];
        });
    }

    return (
        // <div id="quiz"></div>
        <div id="question">
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <ul id="answers">
                {QUESTIONS[activeQuestionIndex].answers.map((answer) =>
                    (<li key={answer} className="answer">
                        <button onClick={()=>handleSelectAnswer(answer)}>{answer}</button>
                    </li>)
                )}
            </ul>
        </div>
    )
}