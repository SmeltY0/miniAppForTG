import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Привет, это мое приложение для Telegram!</h1>
        <p>
          Это веб-приложение работает прямо внутри Telegram через WebView.
        </p>
        <button onClick={() => alert("Привет из Web App!")}>
          Нажми на меня
        </button>
      </header>
    </div>
  );
}

export default App;
