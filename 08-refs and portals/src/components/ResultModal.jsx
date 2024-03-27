import {forwardRef} from "react";
const ResultModal = forwardRef( function ResultModal({result, targetTime}, ref) {
    return (<dialog ref={ref} className="result-modal" open>
        {/*built-in dialog buy default is not visible, so open in <dialog className="result-modal" open>
        but doing it directly won't blur the background and we need to pass ref*/}
        <h2>You {result}</h2>
        <p>The targetTime was <strong>{targetTime}</strong> seconds.</p>
        <p>You stopped the timer with <strong>X seconds left.</strong></p>
        <form method="dialog">
            <button>Close</button>
        {/*    this closes the dialog - browser stuff, not react*/}
        </form>
    </dialog>)
}
)
export default ResultModal;