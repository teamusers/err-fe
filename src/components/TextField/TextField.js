import React, { forwardRef } from "react";
import { TextField as MUITextField } from "@mui/material";
import PropTypes from "prop-types";
import { WrapperLoading, Skeleton, LoadingWrapper } from "@Utils/Styles";

const TextField = forwardRef(({ loading, ...rest }, ref) => (
  <WrapperLoading>
    <MUITextField {...rest} ref={ref} />
    {loading && (
      <LoadingWrapper>
        <Skeleton variant='rectangular' />
      </LoadingWrapper>
    )}
  </WrapperLoading>
));

TextField.propTypes = {
  loading: PropTypes?.bool,
};

TextField.defaultProps = {
  loading: false,
};

export default TextField;
