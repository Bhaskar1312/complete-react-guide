import {useRef, useState} from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({title, targetTime}) {
    const [timerExpired, setTimerExpired] = useState(false);
    const [timerStarted, setTimerStarted] = useState(false);

    const timer = useRef(); // store state, but wouldn't cause react to re-execute DOM again
    function handleStart() {
        setTimerStarted(true);// this can also be set after setTimeout instead
        timer.current = setTimeout(()=> {
            setTimerExpired(true);
        }, targetTime*1000)
    }

    function handleStop() {
        clearTimeout(timer.current);
        setTimerStarted(false);
    }

    return (
        <>
        {timerExpired && <ResultModal targetTime={targetTime} result="lost"/>}
        <section className="challenge">
            <h2>{title}</h2>
            {/*{timerExpired && <p>You lost! </p>}*/}
            <p className="challenge-time">
                {targetTime} second{targetTime>1?'s':''}
            </p>
            <button onClick={timerStarted? handleStop:handleStart}>
                {timerStarted? 'Stop' :'Start'} Challenge
            </button>
            <p className="">
                Timer is running.../ Timer inactive
            </p>
        </section>
        </>
    );
}