import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Привет, мое солнышко❤️!</h1>
        <p>
          Я хочу что б ты знала, что ты самый дорогой и близкий для меня человек на всем свете!
        </p>
        <button onClick={() => alert("❤️❤️❤️Люблю тебя, больше всех на свете!❤️❤️❤️")}>
          Нажми на меня!!!
        </button>
      </header>
    </div>
  );
}

export default App;
