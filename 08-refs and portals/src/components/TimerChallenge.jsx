import {useState} from "react";

export default function TimerChallenge({title, targetTime}) {
    const [timerExpired, setTimerExpired] = useState(false);
    const [timerStarted, setTimerStarted] = useState(false);

    let timer;
    function handleStart() {
        setTimerStarted(true);// this can also be set after setTimeout instead
        timer = setTimeout(()=> {
            setTimerExpired(true)
        }, targetTime*1000)
    }

    function handleStop() {
        clearTimeout(timer);
        setTimerStarted(false);
    }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You lost! </p>}
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
    );
}