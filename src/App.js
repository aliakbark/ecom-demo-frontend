import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is an ecommerce demo app</p>
        <a
          className="App-link"
          href="https://github.com/aliakbar-k8811/ecom-demo-frontend"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gitub link
        </a>
      </header>
    </div>
  );
}

export default App;
