import React from "react";
import { Button as MUIButton, CircularProgress } from "@mui/material";
import PropTypes from "prop-types";

const Button = ({ loading, disabled, children, ...rest }) => (
  <MUIButton
    startIcon={loading && <CircularProgress size={25} />}
    disabled={disabled || loading}
    {...rest}
  >
    {children}
  </MUIButton>
);

Button.propTypes = {
  children: PropTypes?.node,
  disabled: PropTypes?.bool,
  loading: PropTypes?.bool,
};

Button.defaultProps = {
  children: null,
  disabled: false,
  loading: false,
};

export default Button;
