import { styled } from "@mui/material/styles";
import { Skeleton as MUISkeleton } from "@mui/material";

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
