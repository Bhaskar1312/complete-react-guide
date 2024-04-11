export default function Login() {
    function handleSubmit(event) {
        event.preventDefault(); // prevent default generate and send http request
        console.log('Submitted!')
    }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
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
