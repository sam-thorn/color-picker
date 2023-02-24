import React, { useState } from "react";

import Logo from "./Logo";
import ColorPicker from "./ColorPicker";
import Footer from "./Footer";

function App() {
  const [color, setColor] = useState("#81D274");

  return (
    <>
      <div className="container" style={{ backgroundColor: color }}>
        <div className="layout-top">
          <ColorPicker color={color} onChange={setColor} />
          <Logo />
        </div>
        <div className="layout-bottom">{/* <ColorCodes /> */}</div>
        <Footer />
      </div>
    </>
  );
}

export default App;
