import { styled } from "@mui/material/styles";

export const StepperWrapper = styled("div")(({ enableClick }) => ({
  "width": "100%",
  "maxWidth": 380,
  ".Mui-disabled": {
    cursor: enableClick && "pointer!important",
  },
}));

export const StepIconWrapper = styled("div")(({ ownerState }) => ({
  width: 30,
  height: 30,
  borderRadius: "50%",
  paddingLeft: 7,
  boxSizing: "border-box",
  border: "3px solid",
  fontWeight: "bold",
  zIndex: 2,
  background: "white",
  borderColor: "#707070",
  ...(ownerState.active && {
    borderColor: "black",
  }),
  ...(ownerState.completed && {
    borderWidth: "1px",
    borderColor: "#007B38",
    background: "#76BD21",
    paddingLeft: 9,
    paddingTop: 2,
  }),
}));
