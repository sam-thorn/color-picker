import { TextField, IconButton, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

function ColorPicker(props) {
  // eslint-disable-next-line
  const [isCopied, setIsCopied] = useState(false);

  const handleClick = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <>
      <section className="color-picker-layout">
        <HexColorPicker color={props.color} onChange={props.onChange} />
        <TextField
          className="text-field"
          value={props.color.toUpperCase()}
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <CopyToClipboard
                  text={props.color.toUpperCase()}
                  onClick={handleClick}
                >
                  <IconButton
                    className="copy-button"
                    variant="contained"
                    // disableRipple
                  >
                    <ContentCopyIcon />
                  </IconButton>
                </CopyToClipboard>
              </InputAdornment>
            ),
          }}
        />
      </section>
    </>
  );
}

export default ColorPicker;
