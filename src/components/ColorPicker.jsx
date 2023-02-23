import React from 'react'
// BG COLOR: use useEffect here to look for changes to a specific thing: changing color codes
import { HexColorPicker, HexColorInput } from 'react-colorful'

function ColorPicker (props) {
  // Use a react hook instead of Redux?
  // useEffect(() => {

  // }

  return (
    <div>
      <section className='color-picker-layout'>
        <HexColorPicker color={props.color} onChange={props.setColor} />
        <HexColorInput type='text' color={props.color} onChange={props.setColor} />
      </section>
    </div>
  )
}

export default ColorPicker

// When a user changes the hex value in the color picker, the background color changes to the same

// color changes in ColorPicker
// it needs to be passed in to App as a variable so that the bg color changes

//

// I currently have a color payload that dispatches to the Store
// A bgcolor reducer has an initialState of a hard-coded color value
// This initialState can be set to the initial value of the ColorPicker
//
