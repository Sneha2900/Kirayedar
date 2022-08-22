import React from "react";

function Login() {
  return (
    <div className="login">
      <div className="form">
        <form action="" className="login-form">
          <span className="material-icons">Login Form </span>
          <input type="text" placeholder="email" />
          Email
          <input type="password" placeholder="password" />
          Password
          <button type="submit">login </button>
          <p className="forgot-passowrd text-right">
            <link to={"/forgot"}>Forgot password?</link>
          </p>
        </form>
      </div>
    </div>
  );
}
export default Login;
