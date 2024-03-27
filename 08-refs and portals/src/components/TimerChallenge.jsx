import {useRef, useState} from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({title, targetTime}) {
    const [timeRemaining, setTimeRemaining] = useState(targetTime*1000);

    const timer = useRef(); // store state, but wouldn't cause react to re-execute DOM again
    const dialog = useRef();

    function handleStart() {
        timer.current = setInterval(()=> {
            setTimeRemaining(prev => prev - 10);
            // dialog.current.open();
        }, 10); // update every 10ms
    }
    let isTimerActive = timeRemaining > 0 && timeRemaining < targetTime*1000;

    if(timeRemaining <=0) {
        handleStop(); //setInterval won't stop on its own
        // setTimeRemaining(targetTime*1000);// be careful about setting state, this may well execute infinite times, not in this case because of if
    }

    function handleStop() {
        clearInterval(timer.current);
        dialog.current.open();
        // setTimeRemaining(targetTime*1000);
    }

    function handleReset() {
        setTimeRemaining(targetTime*1000)
    }

    return (
        <>
        <ResultModal ref={dialog} targetTime={targetTime} timeRemaining={timeRemaining} onReset={handleReset}/>
        <section className="challenge">
            <h2>{title}</h2>
            {/*{timerExpired && <p>You lost! </p>}*/}
            <p className="challenge-time">
                {targetTime} second{targetTime>1?'s':''}
            </p>
            <button onClick={isTimerActive? handleStop:handleStart}>
                {isTimerActive? 'Stop' :'Start'} Challenge
            </button>
            <p className={isTimerActive? 'active': undefined}>
                { isTimerActive ? 'Timer is running...': 'Timer inactive' }
            </p>
        </section>
        </>
    );
}