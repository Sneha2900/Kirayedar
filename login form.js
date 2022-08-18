import React from "react";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { forgot: false };
  }

  login() {
    alert("Login will work here");
  }
  forgot() {
    this.setState({ forgot: true });
  }

  render() {
    return (
      <div>
        {this.state.forgot === false && (
          <div>
            Username: <input /> <br />
            Password: <input />
            <br />
            <button onClick={this.forgot.bind(this)}>Forgot</button>
            <button onClick={this.login.bind(this)}>Login</button>
          </div>
        )}
        {this.state.forgot === true && <ForgotPassword />}
      </div>
    );
  }
}

class ForgotPassword extends React.Component {
  reset() {
    alert("Password is sent to your email");
  }

  render() {
    return (
      <div>
        <h1>Write your email</h1>
        <input />
        <button onClick={this.reset.bind(this)}>Reset Password</button>
      </div>
    );
  }
}
