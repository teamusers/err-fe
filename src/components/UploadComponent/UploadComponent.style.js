import { styled } from "@mui/material/styles";
import { CustomPaper } from "@Utils/Styles";
import { Button, IconButton } from "@mui/material";
import { defaultBorderColor } from "@Utils/Constants/CustomTheme";

export const UploadWrapper = styled(CustomPaper)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 110,
  position: "relative",
  overflow: "hidden",
}));

export const UploadButton = styled(Button)(() => ({
  width: 260,
}));

export const CarouselItem = styled("div")(({ theme }) => ({
  width: "22%",
  marginRight: 10,
  marginTop: ".8rem",
  [theme.breakpoints.up("sm")]: {
    width: "22.2%",
    marginRight: 12,
  },
}));

export const Thumbnail = styled("div")(({ bg, dummy }) => ({
  border: `1px solid ${dummy ? defaultBorderColor : "black"}`,
  borderRadius: 4,
  height: 73,
  width: "100%",
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  position: " relative",
  zIndex: 2,
}));

export const ViewButton = styled("div")(({ theme }) => ({
  height: 73,
  width: "100%",
  cursor: "initial",
  zIndex: 1,
  [theme.breakpoints.up("sm")]: {
    cursor: "pointer",
  },
}));

export const CloseButton = styled(IconButton)(() => ({
  "position": "absolute",
  "top": -18,
  "left": -18,
  "> svg": {
    with: 25,
    height: 25,
  },
}));

export const ViewCont = styled("div")(({ theme }) => ({
  boxSizing: "border-box",
  maxWidth: "100%",
  maxHeight: "95vh",
  position: "relative",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "80%",
    maxHeight: "90vh",
  },
}));

export const Img = styled("img")(({ loading }) => ({
  width: "100%",
  height: "100%",
  opacity: loading ? 0 : 1,
}));

export const ViewClosebutton = styled(IconButton)(({ loading }) => ({
  "position": "absolute",
  "top": 5,
  "right": 5,
  "opacity": loading ? 0 : 1,
  "> svg": {
    with: 25,
    height: 25,
  },
}));

export const LoadingContainer = styled("div")({
  position: "absolute",
  display: "flex",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  zIndex: 2,
  width: 50,
});

export const LoadingCompression = styled("div")({
  position: "absolute",
  width: "100%",
  height: "100%",
  left: 0,
  top: 0,
  backgroundColor: "rgba(242,242,242, 0.8)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  div: {
    fontWeight: "bold",
  },
});
