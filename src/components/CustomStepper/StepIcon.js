import React from "react";
import PropTypes from "prop-types";
import { StepIconWrapper } from "./CustomStepper.style";

const StepIcon = ({ active, completed, className, icon }) => (
  <StepIconWrapper ownerState={{ completed, active }} className={className}>
    {icon}
  </StepIconWrapper>
);

StepIcon.propTypes = {
  active: PropTypes?.bool,
  completed: PropTypes?.bool,
  className: PropTypes?.string,
  icon: PropTypes?.node,
};

StepIcon.defaultProps = {
  active: false,
  completed: false,
  className: "",
  icon: null,
};

export default StepIcon;
