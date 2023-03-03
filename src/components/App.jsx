import React, { useState } from "react";
import Logo from "./Logo";
import ColorPicker from "./ColorPicker";
import Footer from "./Footer";

function App() {
  const [color, setColor] = useState("#FFB760");

  return (
    <>
      <div className="container" style={{ backgroundColor: color }}>
        <div className="cp-layout">
          <div className="cp-card">
            <ColorPicker color={color} onChange={setColor} />
            <Logo />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
