import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import { ReactComponent as CancelIcon } from "@Assets/cancel-icon.svg";
import { ReactComponent as SendIcon } from "@Assets/send-icon.svg";
import { Modal } from "@Utils/Styles";

export const EmailWrapper = styled("div")(({ theme }) => ({
  backgroundColor: "initial",
  margin: "auto",
  width: "100vw",
  height: "100vh",
  paddingTop: "100px",
  [theme.breakpoints.up("md")]: {
    width: "50vw",
    paddingTop: "120px",
  },
}));

export const BtnContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  background: "white !important",
  width: "100%",
  position: "fixed",
  paddingTop: "50px",
  [theme.breakpoints.up("md")]: {
    width: "50vw",
    paddingTop: "60px",
    left: "auto",
  },
}));

export const RowWrap = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  width: "100%",
  borderBottom: "inset",
  padding: "10px",
}));

export const ColumnWrap = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  width: "100%",
  padding: "10px",
}));

export const CancelButton = styled(CancelIcon)(() => ({
  width: "20px",
  height: "20px",
}));

export const SendButton = styled(SendIcon)(() => ({
  height: "50px",
}));

export const CustomModal = styled(Modal)(() => ({
  width: "100%",
  zIndex: 0,
  backgroundColor: "#FFFFFF",
  overflowY: "auto",
}));
