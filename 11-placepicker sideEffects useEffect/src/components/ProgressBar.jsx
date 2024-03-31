import {useEffect, useState} from "react";


export default function ProgressBar({timer}) {
    const [remainingTime, setRemainingTime] = useState(timer);
    useEffect(()=> {
        const interval = setInterval(() => {
            console.log("Inside Del Confirmation - setInterval"); // infinite loop? if done without Effect
            setRemainingTime(prevTime => prevTime - 10);
        }, 10); // every 10 ms

        return ()=>{
            console.log("cleaning up interval"); // so no infinite loop as interval keeps updating
            clearInterval(interval);
        }
    }, []);
    return (<progress value={remainingTime} max={timer}/>);
}