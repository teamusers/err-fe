import React from "react";
import {
  Typography,
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import PropTypes from "prop-types";
import { ReactComponent as ArrowDown } from "@Assets/arrow-down.svg";
import { ReactComponent as Check } from "@Assets/white-check.svg";
import { CheckCont } from "./Accordion.style";

const Accordion = ({ children, title, showCheck, complete, ...rest }) => (
  <MuiAccordion
    sx={{
      overflow: "hidden",
    }}
    {...rest}
  >
    <AccordionSummary expandIcon={<ArrowDown width={18} height={9} />}>
      {showCheck && (
        <CheckCont complete={complete ? 1 : 0}>
          <Check />
        </CheckCont>
      )}

      {typeof title === "string" ? (
        <Typography variant='body2' className='text-bold'>
          {title}
        </Typography>
      ) : (
        title
      )}
    </AccordionSummary>
    <AccordionDetails
      sx={{
        padding: 0,
      }}
    >
      {children}
    </AccordionDetails>
  </MuiAccordion>
);

Accordion.propTypes = {
  children: PropTypes?.node,
  title: PropTypes?.node,
  showCheck: PropTypes?.bool,
  complete: PropTypes?.bool,
};

Accordion.defaultProps = {
  children: null,
  title: "",
  showCheck: true,
  complete: false,
};

export default Accordion;
