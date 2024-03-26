import React from 'react';
import Review from "./Review.jsx";

// don't change the Component name "App"
function App() {
    const [isEditing, setIsEditing] = React.useState(false);
    function handleEditClick() {
        setIsEditing(wasEditing=>!wasEditing);
    }
    const [studentName, setStudentName] = React.useState('');
    function handleChangeName(event) {
        setStudentName(event.target.value);
    }
    const [feedbackText, setFeedbackText] = React.useState('');
    function handleChangeFeedback(event) {
        setFeedbackText(event.target.value);
    }

    return (
        <>
            <section id="feedback">
                <h2>Please share some feedback</h2>
                <p>
                    <label>Your Feedback</label>
                    <textarea onChange={handleChangeFeedback} value={feedbackText}/>
                </p>
                <p>
                    <label>Your Name</label>
                    <input type="text" onChange={handleChangeName} value={studentName}/>
                </p>
            </section>
            <section id="draft">
                <h2>Your feedback</h2>

                <Review student={studentName} feedback={feedbackText}/>

                <p>
                    <button onClick={handleEditClick}>Save</button>
                </p>
            </section>
        </>
    );
}

export default App;