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
            <Results input={userInput}></Results>
        </>
    )
}

export default App
