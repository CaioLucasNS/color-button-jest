import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={isChecked}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        onChange={() => setIsChecked(!isChecked)}
        checked={isChecked}
      />
    </div>
  );
}

export default App;
