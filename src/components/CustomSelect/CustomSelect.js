import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import PropTypes from "prop-types";
import { WrapperLoading, Skeleton, LoadingWrapper } from "@Utils/Styles";

const CustomSelect = React.forwardRef(
  ({ fullWidth, options, label, loading, required, error, ...rest }, ref) => (
    <WrapperLoading>
      <FormControl
        error={error}
        focused={error}
        fullWidth={fullWidth}
        size='small'
        variant='filled'
        ref={ref}
      >
        <InputLabel error={error} required={required} shrink id='demo-simple-select-filled-label'>
          {label}
        </InputLabel>
        <Select {...rest}>
          {options?.map((item) => (
            <MenuItem key={item?.value} value={item?.value}>
              {item?.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {loading && (
        <LoadingWrapper>
          <Skeleton variant='rectangular' />
        </LoadingWrapper>
      )}
    </WrapperLoading>
  )
);

CustomSelect.propTypes = {
  options: PropTypes?.array,
  fullWidth: PropTypes?.bool,
  label: PropTypes?.string,
  loading: PropTypes?.bool,
  required: PropTypes?.bool,
  error: PropTypes?.bool,
};

CustomSelect.defaultProps = {
  options: [],
  fullWidth: false,
  label: "",
  loading: false,
  required: false,
  error: false,
};

export default CustomSelect;
