import { styled } from "@mui/material/styles";

export const ModaBody = styled("div")(({ maxwidth, padding }) => ({
  background: "white",
  maxWidth: maxwidth || 370,
  borderRadius: 4,
  padding: padding || 25,
  boxSizing: "border-box",
}));

export const ButtonCont = styled("div")(() => ({
  "display": "flex",
  "justifyContent": "flex-end",
  "marginTop": "1.5rem",
  "alignItems": "center",
  "> button": {
    width: "40%",
  },
}));
