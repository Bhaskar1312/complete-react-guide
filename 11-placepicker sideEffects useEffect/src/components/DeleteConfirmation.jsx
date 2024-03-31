import {useEffect} from "react";

export default function DeleteConfirmation({ onConfirm, onCancel }) {
    useEffect(()=> {
        console.log('TIMER SET');
        const timer = setTimeout(() => {
            onConfirm();
        }, 3000);
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
    </div>
  );
}
