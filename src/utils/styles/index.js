/* eslint-disable no-unsafe-optional-chaining */
import { styled } from "@mui/material/styles";
// eslint-disable-next-line import/no-cycle
import { defaultBorderColor, defaultContainerColor } from "@Utils/Constants/CustomTheme";

import { Modal as MUIModal, Skeleton as MUISkeleton } from "@mui/material";

export const WrapperLoading = styled("div")(() => ({
  boxSizing: "border-box",
  position: "relative",
}));

export const Skeleton = styled(MUISkeleton)({
  width: "100%",
  height: "100%",
  borderRadius: 4,
});

export const LoadingWrapper = styled("div")({
  width: "100%",
  top: 0,
  left: 0,
  height: "100%",
  overflow: "hidden",
  zIndex: 3,
  position: "absolute",
  background: "rgba(255,255,255,1)",
  borderRadius: 4,
});

export const Modal = styled(MUIModal)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

export const HeaderHeight = 64;
export const HeaderHeightMobile = 55;

export const MainWrapper = styled("div")(({ theme, withbottomcont }) => ({
  padding: `.5rem 10px ${withbottomcont ? "100px" : " 50px"} 10px`,
  [theme.breakpoints.up("md")]: {
    padding: `1rem 2.5rem ${withbottomcont ? "100px" : " 50px"}  2.5rem`,
  },
}));

export const Container = styled("div")(({ theme }) => ({
  padding: "15px",
  border: `1px solid ${defaultBorderColor}`,
  boxSizing: "border-box",
  borderRadius: 4,
  [theme.breakpoints.up("md")]: {
    padding: "20px",
  },
}));

export const CustomPaper = styled("div")(() => ({
  backgroundColor: defaultContainerColor,
  padding: "15px 20px",
  borderRadius: 4,
}));

export const FixedBottom = styled("div")(({ theme }) => ({
  padding: "2rem 15px 10px 15px",
  boxSizing: "border-box",
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100vw",
  zIndex: theme?.zIndex?.appBar - 100,
  background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 22.92%, #FFFFFF 100%)",
  [theme.breakpoints.up("md")]: {
    padding: 0,
    paddingTop: 10,
    zIndex: 1,
    position: "initial",
    width: "initial",
    background: "initial",
  },
}));

export const Paper = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  [theme.breakpoints.up("md")]: {
    boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.15)",
  },
}));

const useGlobalStyle = () => ({
  bold: {
    fontWeight: "bold",
  },
  marTop1: {
    marginTop: ".5rem",
  },
  marTop2: {
    marginTop: "1.5rem",
  },
  marTop3: {
    marginTop: "2.5rem",
  },
  grey: {
    color: "#979797",
  },
  red: {
    color: "#d40511",
  },
  green: {
    color: "#007c39",
  },
  font12: {
    fontSize: 12,
  },
  textWhite: {
    color: "white",
  },
  textUnderline: {
    textDecoration: "underline",
  },
});

export default useGlobalStyle;
