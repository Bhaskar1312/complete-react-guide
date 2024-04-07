import {useEffect, useState} from "react";

export default function QuestionTimer({timeout, onTimeout}) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        console.log('set timeout'); // strict mode calls every component twice in main.jsx
        const timer = setTimeout(onTimeout, timeout);
        return ()=>{
            clearTimeout(timer);
        }
    },
        [timeout, onTimeout]); // onTimeout is a function(functions are not equal), hence executing every time

    // setInterval(()=>setRemainingTime(prevTime => prevTime-100), 100); // infinite loop, state update

    useEffect(()=>{
        console.log('set interval');
       const interval = setInterval(()=>setRemainingTime(prevTime => prevTime-100), 100);

       return ()=>{
           clearInterval(interval);
       }
    }, []); // Empty array ensures the effect runs only once

    return (
        <progress id="question-time" max={timeout} value={remainingTime}></progress>
    )
}