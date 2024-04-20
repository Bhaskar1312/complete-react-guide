import {useRef} from "react";

export default function Login() {

    const email = useRef();
    const password = useRef();

    function handleSubmit(event) {
        event.preventDefault(); // prevent default generate and send http request
        // The event.preventDefault() method is used to stop the default action of an event from happening. In the context of a form submission, the default action is to send a GET or POST request to the URL specified in the form's action attribute and then refresh the page.

        const enteredEmail = email.current.value; // current is a property of ref, value is a property of input
        const enteredPassword = password.current.value;

        console.log(enteredEmail + " ,"+enteredPassword);
    }


  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email"
                 type="email"
                 name="email"
                 ref={email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password"
                 type="password"
                 name="password"
                 ref={password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button>
        {/*<button className="submit" type="submit" onClick={handleSubmit}>Login</button>*/}
        {/*  default is submit, when browser, it sends a request; setting to button type won't */}
        {/*<button className="submit" type="button">Login</button>*/}
      {/*    add onSubmit on form instead of onCLick on button*/}
      </p>
    </form>
  );
}
