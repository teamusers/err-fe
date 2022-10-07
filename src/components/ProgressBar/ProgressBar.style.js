import { styled } from "@mui/material/styles";

export const Wrapper = styled("div")({
  background: "rgba(255, 255, 255, 0.8)",
  position: "fixed",
  height: "100vh",
  width: "100vw",
  top: 0,
  left: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
  span: {
    height: 8,
    borderRadius: 4,
  },
});

export const ProgressBody = styled("div")({
  width: "100%",
  maxWidth: 350,
});
