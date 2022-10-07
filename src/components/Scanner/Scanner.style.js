/* eslint-disable no-unsafe-optional-chaining */
import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";

export const ScannerCamera = styled("div")(({ show, theme }) => ({
  display: show ? "flex" : "none",
  zIndex: show ? theme?.zIndex?.appBar + 1 : -100,
  position: "fixed",
  top: 0,
  left: 0,
  height: "100vh",
  width: "100vw",
  background: "white",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  video: {
    width: "100%!important",
  },
}));

export const Closebutton = styled(IconButton)(() => ({
  "position": "fixed",
  "top": 5,
  "right": 5,
  "> svg": {
    with: 25,
    height: 25,
  },
}));
