import React, { forwardRef } from "react";
import { Radio } from "@mui/material";
import PropTypes from "prop-types";
import { ReactComponent as RadioIcon } from "@Assets/radio-icon.svg";
import { ReactComponent as RadioIconRed } from "@Assets/radio-icon-red.svg";
import { ReactComponent as RadioChecked } from "@Assets/radio-checked.svg";

const CustomRadio = forwardRef(({ error, ...props }, ref) => (
  <Radio
    ref={ref}
    checkedIcon={<RadioChecked />}
    icon={error ? <RadioIconRed /> : <RadioIcon />}
    {...props}
  />
));

CustomRadio.propTypes = {
  error: PropTypes?.bool,
};

CustomRadio.defaultProps = {
  error: false,
};

export default CustomRadio;
