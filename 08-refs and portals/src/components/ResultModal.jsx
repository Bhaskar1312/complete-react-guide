import {forwardRef, useImperativeHandle, useRef} from "react";
import {createPortal} from "react-dom";

const ResultModal = forwardRef( function ResultModal({timeRemaining, targetTime, onReset}, ref) {
    const dialog = useRef();
    useImperativeHandle(ref, ()=>{
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })
    timeRemaining = (timeRemaining/1000.0).toFixed(2);
    const score = Math.round((1 - timeRemaining/targetTime)*100);
    return createPortal((<dialog ref={dialog} className="result-modal" onClose={onReset}>
        {/*built-in dialog buy default is not visible, so open in <dialog className="result-modal" open>
        but doing it directly won't blur the background and we need to pass ref*/}
        <h2>You {timeRemaining>0? "won":"lost"}</h2>
        {timeRemaining > 0 && (<h2>Your score: {score}</h2>)}
        <p>The targetTime was <strong>{targetTime}</strong> seconds.</p>
        {timeRemaining>0 &&<p>You stopped the timer with <strong>{timeRemaining} seconds left.</strong></p>}
        <form method="dialog" onSubmit={onReset}>
            <button>Close</button>
        {/*    this closes the dialog - browser stuff, not react*/}
        </form>
    </dialog>), document.getElementById("modal")); // teleport to modal div for accessibility or some other element doesn't block it
}
)
export default ResultModal;