import { styled, keyframes } from "@mui/material/styles";

const ldsEllipsis1 = keyframes`
0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const ldsEllipsis2 = keyframes`
0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`;

const ldsEllipsis3 = keyframes`
0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

export const LoadingWrapper = styled("div")(({ type, theme, background, zindex }) => {
  let styles = {
    background: background || "rgba(255,255,255,1)",
  };

  switch (type) {
    case "fullScreen":
      styles = {
        ...styles,
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: zindex <= 1000 ? theme.zIndex.appBar - 1 : zindex,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      };
      break;
    case "fullWidth":
      styles = {
        ...styles,
        width: type === "fullscreen" && "100%",
        zIndex: zindex,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      };
      break;
    default:
      styles = {
        display: "inline-block",
        zIndex: zindex,
      };
  }

  return styles;
});

export const LoadingComponent = styled("div")(({ theme }) => ({
  display: "inline-block",
  position: "relative",
  width: 80,
  height: 13,
  div: {
    "position": "absolute",
    "top": 0,
    "width": 13,
    "height": 13,
    "borderRadius": "50%",
    "background": `${theme?.palette?.primary?.main}`,
    "animationTimingFunction": "cubic-bezier(0, 1, 1, 0)",
    "&:nth-of-type(1)": {
      left: 8,
      animation: `${ldsEllipsis1} 0.6s infinite`,
    },
    "&:nth-of-type(2)": {
      left: 8,
      animation: `${ldsEllipsis2} 0.6s infinite`,
    },
    "&:nth-of-type(3)": {
      left: 32,
      animation: `${ldsEllipsis2} 0.6s infinite`,
    },
    "&:nth-of-type(4)": {
      left: 56,
      animation: `${ldsEllipsis3} 0.6s infinite`,
    },
  },
}));
