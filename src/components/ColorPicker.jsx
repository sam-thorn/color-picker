import React from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";
import CopyButton from "./CopyButton";

function ColorPicker(props) {
  return (
    <>
      <section className="color-picker-layout">
        <HexColorPicker color={props.color} onChange={props.onChange} />
        <HexColorInput
          id="hex-input"
          type="text"
          color={props.color}
          onChange={props.onChange}
        />
        <CopyButton />
      </section>
    </>
  );
}

export default ColorPicker;
