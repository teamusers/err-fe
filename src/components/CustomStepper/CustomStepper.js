import React from "react";
import { Stepper, Step, StepLabel, StepConnector } from "@mui/material";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { StepperWrapper } from "./CustomStepper.style";
import StepIcon from "./StepIcon";

const CustomStepper = ({ activeStep, enableClick, onChange }) => {
  const { t } = useTranslation();
  const steps = [
    t("Stepper.Shipment"),
    t("Stepper.DateTime"),
    t("Stepper.Damaged"),
    t("Stepper.Checkpoint"),
    t("Common.Submit"),
  ];

  const completed = (i) => ({
    ...(enableClick && {
      completed: activeStep !== i,
    }),
  });
  return (
    <StepperWrapper enableClick={enableClick}>
      <Stepper activeStep={activeStep} alternativeLabel connector={<StepConnector />}>
        {steps.map((label, i) => (
          <Step
            style={{
              cursor: enableClick ? "pointer" : "context-menu",
            }}
            key={label}
            {...completed(i)}
          >
            <StepLabel
              onClick={() => {
                if (enableClick && onChange) {
                  onChange(i);
                }
              }}
              StepIconComponent={StepIcon}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </StepperWrapper>
  );
};

CustomStepper.propTypes = {
  activeStep: PropTypes?.number,
  enableClick: PropTypes?.bool,
  onChange: PropTypes?.func,
};

CustomStepper.defaultProps = {
  activeStep: 0,
  enableClick: false,
  onChange: null,
};

export default CustomStepper;
