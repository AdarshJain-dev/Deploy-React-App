import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {process.env.REACT_APP_WELCOME_TEXT || "Deployment using CI-CD pipeline"} - By
          Github-actions
        </p>
        <a
          className="App-link"
          href="https://github.com/AdarshJain-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Review more about me
        </a>
      </header>
    </div>
  );
}

export default App;
