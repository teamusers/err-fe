import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  // OutlinedInput,
  ListItemText,
  Checkbox,
} from "@mui/material";
import PropTypes from "prop-types";
import { WrapperLoading, Skeleton, LoadingWrapper } from "@Utils/Styles";

const CustomMultiSelect = React.forwardRef(
  ({ fullWidth, options, label, loading, required, error, labelList, valueList, ...rest }, ref) => (
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
        <Select multiple renderValue={(selected) => selected.join(", ")} {...rest}>
          {options?.map((item, i) => (
            <MenuItem key={item} value={item}>
              {item?.label}
              <Checkbox checked={valueList.indexOf(item) > -1} />
              <ListItemText primary={labelList[i]} />
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

CustomMultiSelect.propTypes = {
  options: PropTypes?.array,
  fullWidth: PropTypes?.bool,
  label: PropTypes?.string,
  loading: PropTypes?.bool,
  required: PropTypes?.bool,
  error: PropTypes?.bool,
  labelList: PropTypes?.array,
  valueList: PropTypes?.array,
};

CustomMultiSelect.defaultProps = {
  options: [],
  fullWidth: false,
  label: "",
  loading: false,
  required: false,
  error: false,
  labelList: [],
  valueList: [],
};

export default CustomMultiSelect;
