import {useRef} from "react";

export default function Answers(
    {   answers,
        selectedAnswer,
        answerState,
        onSelect: handleSelectAnswer}
) {

    const shuffledAnswers = useRef(); // not change the element
    if(!shuffledAnswers.current) { // only when undefined, shuffle the array
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random()-0.5); // swap, [-1, 1]
    }

    return (
        <ul id="answers">
            {shuffledAnswers.current.map((answer) =>{
                    let cssClass = '';
                    const isSelected = selectedAnswer === answer;
                    if(answerState==='answered' && isSelected) {
                        cssClass='selected';
                    }
                    if((answerState==='correct' || answerState==='wrong') && isSelected) {
                        cssClass=answerState;
                    }
                    return (<li key={answer} className="answer">
                        <button
                            className={cssClass}
                            onClick={()=>handleSelectAnswer(answer)}
                            disabled={answerState !==''}
                        >
                            {answer}</button>
                    </li>)
                }
            )}
        </ul>
    );
}