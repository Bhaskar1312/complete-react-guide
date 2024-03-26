import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";
import {useState} from "react";

function App() {
    const [userInput, setUserInput] =useState({
        initialInvestment: 1000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    const isUserInputValid = userInput.duration>0;

    function handleChange(inputIdentifier, newValue) {
        console.log(inputIdentifier, newValue);
        setUserInput(prevUserInput=>{
            return {
                ...prevUserInput,
                [inputIdentifier]: +newValue,
            //     add + so that string(by default) is converted to number
            };
        })
    }

    return (
        <>
            <Header></Header>
            <UserInput userInput={userInput} onChangeFn={handleChange}></UserInput>
            {isUserInputValid&& <Results input={userInput}></Results>}
            {!isUserInputValid&& <p className="center">Please enter duration > 0</p>}
        </>
    )
}

export default App
