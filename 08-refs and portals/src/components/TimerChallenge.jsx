import {useRef, useState} from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({title, targetTime}) {
    const [timerExpired, setTimerExpired] = useState(false);
    const [timerStarted, setTimerStarted] = useState(false);

    const timer = useRef(); // store state, but wouldn't cause react to re-execute DOM again
    const dialog = useRef();
    function handleStart() {
        setTimerStarted(true);// this can also be set after setTimeout instead
        timer.current = setTimeout(()=> {
            setTimerExpired(true);
            dialog.current.showModal();
        }, targetTime*1000)
    }

    function handleStop() {
        clearTimeout(timer.current);
        setTimerStarted(false);
    }

    return (
        <>
        <ResultModal ref={dialog} targetTime={targetTime} result="lost"/>
        <section className="challenge">
            <h2>{title}</h2>
            {/*{timerExpired && <p>You lost! </p>}*/}
            <p className="challenge-time">
                {targetTime} second{targetTime>1?'s':''}
            </p>
            <button onClick={timerStarted? handleStop:handleStart}>
                {timerStarted? 'Stop' :'Start'} Challenge
            </button>
            <p className={timerStarted? 'active': undefined}>
                { timerStarted ? 'Timer is running...': 'Timer inactive' }
            </p>
        </section>
        </>
    );
}