import React from "react";
import { Button } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

function CopyButton() {
  function handleClick() {
    let copyText = document.querySelector("#hex-input");
    copyText.select();
    document.execCommand("copy");
    // navigator.clipboard
    //   .readText()
    //   .then(
    //     (clipText) =>
    //       (document.querySelector("#hex-input").innerText += clipText)
    //   );
    console.log("copied");
  }

  document.querySelector("#copy").addEventListener("click", copy);

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

export default CopyButton;
