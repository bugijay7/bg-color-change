import React, { useState } from 'react';
import './App.css';

const darkColorsArr = [
  "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020",
];

function getRandomIndex() {
  return Math.floor(darkColorsArr.length * Math.random());
}

function App() {
  const [bgColor, setBgColor] = useState("#110815");

  const changeBackgroundColor = () => {
    const color = darkColorsArr[getRandomIndex()];
    setBgColor(color);
  };

  return (
    <div style={{ backgroundColor: bgColor, height: "100vh", color: "#fff" }}>
      <h1>Random Background Color Changer</h1>
      <main>
        <section className="bg-information-container">
          <p>Hex Code: <span id="bg-hex-code">{bgColor}</span></p>
        </section>
        <button className="btn" id="btn" onClick={changeBackgroundColor}>Change Background Color</button>
      </main>
    </div>
  );
}

export default App;
