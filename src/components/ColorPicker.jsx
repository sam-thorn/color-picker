import {
  TextField,
  IconButton,
  InputAdornment,
  Tooltip,
  Fade,
} from "@mui/material";
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

  // write function here to handle tooltip logic

  return (
    <>
      <section className="color-picker-container">
        <HexColorPicker color={props.color} onChange={props.onChange} />
        <TextField
          className="text-field"
          value={props.color}
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <CopyToClipboard text={props.color} onClick={handleClick}>
                  <Tooltip
                    className="tooltip"
                    title={isCopied ? "Copied!" : "Copy to clipboard"}
                    TransitionComponent={Fade}
                    TransitionProps={{ timeout: 800 }}
                  >
                    <IconButton className="copy-button" variant="contained">
                      <ContentCopyIcon />
                    </IconButton>
                  </Tooltip>
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
