import React from "react";
import { Button } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export function copyButton(props) {
  function handleClick() {
    alert("clicked");
    // let copyText = document.querySelector("#hex-input");
    // copyText.select();
    // document.execCommand("copy");
  }

  //   document.querySelector("#copy").addEventListener("click", copy);

  navigator.clipboard
    .readText()
    .then(
      (clipText) => (document.querySelector("#hex-input").innerText += clipText)
    );

  return (
    <Button
      variant="contained"
      disableRipple
      endIcon={<ContentCopyIcon />}
      onClick={handleClick}
    >
      Copy Code
    </Button>
  );
}
