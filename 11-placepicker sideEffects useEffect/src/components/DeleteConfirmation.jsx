import {useEffect, useState} from "react";

const TIMER = 3000;
export default function DeleteConfirmation({ onConfirm, onCancel }) {
    const [remainingTime, setRemainingTime] = useState(TIMER);
    useEffect(()=> {
        const interval = setInterval(() => {
            console.log("Inside Del Confirmation - setInterval"); // infinite loop? if done without Effect
            setRemainingTime(prevTime => prevTime - 10);
        }, 10); // every 10 ms

        return ()=>{
            console.log("cleaning up interval"); // so no infinite loop as interval keeps updating
            clearInterval(interval);
        }
    }, [])
    useEffect(()=> {
        console.log('TIMER SET');
        const timer = setTimeout(() => {
            onConfirm();
        }, TIMER);
        return ()=> {
            console.log('cleaning up timer');
            clearTimeout(timer);
        };
    }, [onConfirm]); // don't add javascript objects, functions as deps, as they are not ===,
    // so infinite loop if state is updated inside useEffect,
    // here we are removing it from DOM inside Modal using {open? children:null}

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
        <progress value={remainingTime} max={TIMER}/>
    </div>
  );
}
