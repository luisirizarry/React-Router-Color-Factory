import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Color from "./Color";
import ColorList from "./ColorList";
import NewColor from "./NewColor";
import "./App.css";

function App() {
  const [colors, setColors] = useState([
    { name: "red", value: "#ff0000" },
    { name: "blue", value: "#0000ff" },
  ]);

  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/colors"
            element={<ColorList colors={colors} addColor={addColor} />}
          />
          <Route path="/colors/:color" element={<Color />} />
          <Route
            path="/colors/new"
            element={<NewColor addColor={addColor} />}
          />
          <Route path="*" element={<ColorList colors={colors} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
