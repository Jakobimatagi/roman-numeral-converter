import { useState } from "react";
import "./romanConverter.css";
const RomanConverter = () => {
  const [input, setInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [output, setOutput] = useState("");
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const romanObj = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    XX: 20,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  const inputToRoman = (input) => {
    let number = parseInt(input);
    if (input.trim().length === 0) {
      setErrorMessage("Please enter a valid number");
      setOutput("");
      return false;
    }
    if (input > 4999 || input < 1) {
      setErrorMessage("Input is out of range");
      setOutput("");
      return false;
    }
    setErrorMessage("");
    let romanValues = Object.keys(romanObj);
    romanValues.forEach((key) => {
      while (romanObj[key] <= number) {
        number -= romanObj[key];
        setOutput((prev) => prev + key);
      }
    });
  };

  const onSubmit = (e) => {
    setOutput("");
    inputToRoman(input);
  };
  return (
    <div className="container">
      <div className="header">
        <h1>Roman Numeral Converter</h1>
      </div>
      <div className="input-wrapper">
        <input
          autoComplete="off"
          type="number"
          id="input"
          placeholder="Enter Number Here"
          value={input}
          onChange={handleInput}
        />
        <button
          className="button-79"
          type="submit"
          id="submit"
          onClick={onSubmit}
        >
          Convert
        </button>
      </div>
      <p id="output">
        {output === "" ? (
          <span>Enter the number and hit convert</span>
        ) : (
          <span>{output}</span>
        )}
      </p>

      <p id="error">
        {errorMessage && <span>{errorMessage}</span>}
        {errorMessage && (
          <button
            className="close-button"
            onClick={() => setErrorMessage("")}
            style={{}}
          >
            X
          </button>
        )}
      </p>
    </div>
  );
};

export default RomanConverter;
