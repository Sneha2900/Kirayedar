import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div
      className="container-fluid m-0 bg-dark text-white d-flex justify-content-center align-items-center "
      style={{ height: "100vh", width: "100vw" }}
    >
      <div className="form m-0">
        <form action="login-form" className="login-form">
          <span className="material-icons">
            {" "}
            <u>Login Form </u>
          </span>
          <br></br>
          <br></br>
          <input type="text" placeholder="email" />
          Email
          <br></br>
          <br></br>
          <input type="password" placeholder="password" />
          Password
          <br></br>
          <br></br>
          <button type="button" className="btn btn-outline-primary">
            {" "}
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
