import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import { LoadingComponent, LoadingWrapper } from "./Loading.style";

const Loading = ({ type, background, zIndex }) => {
  const { zIndex: MUIZindex } = useTheme();
  return (
    <LoadingWrapper type={type} background={background} zindex={MUIZindex[zIndex]}>
      <LoadingComponent>
        <div />
        <div />
        <div />
        <div />
      </LoadingComponent>
    </LoadingWrapper>
  );
};

Loading.propTypes = {
  type: PropTypes?.string,
  background: PropTypes?.string,
  zIndex: PropTypes?.string,
};

Loading.defaultProps = {
  type: "default",
  background: "",
  // for zindex option kindly look here https://mui.com/material-ui/customization/default-theme/?expand-path=$.zIndex
  zIndex: "mobileStepper",
};

export default Loading;
