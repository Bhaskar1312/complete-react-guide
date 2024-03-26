import {useState} from "react";

export default function UserInput({onChangeFn, userInput}) {

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required
                           value={userInput.initialInvestment}
                           onChange={(event)=>
                        onChangeFn('initialInvestment', event.target.value)}/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required
                           value={userInput.annualInvestment}
                           onChange={(event)=>
                        onChangeFn('annualInvestment', event.target.value)}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" required
                           value={userInput.expectedReturn}
                           onChange={(event)=>
                        onChangeFn('expectedReturn', event.target.value)}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required
                           value={userInput.duration}
                           onChange={(event)=>
                        onChangeFn('duration', event.target.value)}/>
                </p>
            </div>
        </section>
    );
}