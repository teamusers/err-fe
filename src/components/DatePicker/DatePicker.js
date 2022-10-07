import React from "react";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker as MUIDatePicker, DatePicker as DatePickerOnly } from "@mui/x-date-pickers";
import { WrapperLoading, Skeleton, LoadingWrapper } from "@Utils/Styles";
import moment from "moment";

const DatePicker = ({ dateOnly, monthYearOnly, fullWidth, loading, required, ...rest }) => (
  <WrapperLoading>
    <LocalizationProvider dateAdapter={AdapterMoment}>
      {dateOnly ? (
        <DatePickerOnly
          inputFormat={monthYearOnly ? "MM-yyyy" : "DD/MM/yyyy"}
          views={monthYearOnly ? ["year", "month"] : ["year", "month", "day"]}
          minDate={monthYearOnly ? moment().subtract(2, "years") : moment().subtract(10, "years")}
          maxDate={monthYearOnly ? moment() : moment().add(10, "years")}
          renderInput={(params) => (
            <TextField
              variant='filled'
              fullWidth={fullWidth}
              required={required}
              size='small'
              {...params}
            />
          )}
          {...rest}
        />
      ) : (
        <MUIDatePicker
          inputFormat='DD/MM/yyyy HH:mm'
          renderInput={(params) => (
            <TextField
              variant='filled'
              fullWidth={fullWidth}
              required={required}
              size='small'
              {...params}
            />
          )}
          {...rest}
        />
      )}

      {loading && (
        <LoadingWrapper>
          <Skeleton variant='rectangular' />
        </LoadingWrapper>
      )}
    </LocalizationProvider>
  </WrapperLoading>
);

DatePicker.propTypes = {
  fullWidth: PropTypes?.bool,
  dateOnly: PropTypes?.bool,
  monthYearOnly: PropTypes?.bool,
  loading: PropTypes?.bool,
  required: PropTypes?.bool,
};

DatePicker.defaultProps = {
  fullWidth: false,
  dateOnly: false,
  monthYearOnly: false,
  loading: false,
  required: false,
};

export default DatePicker;
