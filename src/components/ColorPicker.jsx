import React from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";

function ColorPicker(props) {
  return (
    <>
      <div>
        <section className="color-picker-layout">
          <HexColorPicker color={props.color} onChange={props.onChange} />
          <HexColorInput
            id="hex-input"
            type="text"
            color={props.color}
            onChange={props.onChange}
          />
        </section>
      </div>
    </>
  );
}

export default ColorPicker;
