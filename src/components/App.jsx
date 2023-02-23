import React, { useState } from "react";

// import { sendNewColor } from '../actions'

import Logo from "./Logo";
import ColorPicker from "./ColorPicker";
import Footer from "./Footer";
// import ColorCodes from "./ColorCodes";

function App() {
  const [color, setColor] = useState("#81D274");

  // function handleChange(e) {
  //   console.log(setColor);
  //   console.log(e.target.value);
  //   setColor(e.target.value);
  // }

  // let bgColor = document.getElementsByClassName("container");

  // bgColor.addEventListener("input", function () {
  //   selectedColor(bgColor);
  // });

  // function selectedColor(chooseColor) {
  //   document.body.style.backgroundColor = chooseColor.value;
  // }
  // useEffect(() => {
  //   props.dispatch(sendNewColor())
  // }, [])

  // A variable that allows another variable to be passed in to style an element in-line.
  const appBgColor = {
    backgroundColor: `#${setColor}`,
  };

  return (
    <>
      <div className="container" style={appBgColor}>
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
// const mapStateToProps = (globalState) => {
//   return {
//     color: globalState.bgcolor,
//   };
// };

export default App;
