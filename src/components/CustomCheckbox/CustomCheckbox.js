import React, { forwardRef, useState, useEffect } from "react";
import { ReactComponent as CheckIcon } from "@Assets/check.svg";
import PropTypes from "prop-types";
import {
  DamagePortCheckbox,
  CustomCheckBox as CustomCheckBoxComponent,
  CheckCont,
} from "./CustomCheckbox.style";

const CustomCheckbox = forwardRef(
  ({ checkIconOnly, onChange, value, defaultValue, ...rest }, ref) => {
    const [checked, setChecked] = useState(false);
    useEffect(() => {
      if (defaultValue) {
        setChecked(defaultValue);
      }
    }, [defaultValue]);
    return (
      <DamagePortCheckbox
        ischecked={checked ? 1 : 0}
        inputRef={ref}
        checkicononly={checkIconOnly ? 1 : 0}
        control={
          <CustomCheckBoxComponent
            value={value}
            checked={checked}
            icon={checkIconOnly ? <div /> : <CheckCont />}
            checkedIcon={
              checkIconOnly ? (
                <CheckIcon />
              ) : (
                <CheckCont checked>
                  <CheckIcon />
                </CheckCont>
              )
            }
          />
        }
        {...rest}
        onChange={(e) => {
          if (onChange) {
            onChange(e);
          }

          setChecked(e?.target?.checked);
        }}
      />
    );
  }
);

CustomCheckbox.propTypes = {
  onChange: PropTypes?.func,
  value: PropTypes?.string,
  checkIconOnly: PropTypes?.bool,
  defaultValue: PropTypes?.bool,
};

CustomCheckbox.defaultProps = {
  onChange: null,
  value: "",
  checkIconOnly: false,
  defaultValue: false,
};

export default CustomCheckbox;
