import { styled } from "@mui/material/styles";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { defaultBorderColor } from "@Utils/Constants/CustomTheme";
import { ReactComponent as ArrowDown } from "@Assets/arrow-down.svg";

export const CustomAccordion = styled(Accordion)(() => ({
  background: "#FFFFFF",
  marginTop: "15px",
  marginBottom: "15px",
  border: `1px solid ${defaultBorderColor}`,
  boxSizing: "border-box",
  borderRadius: 4,
}));

export const CustomAccordionSummary = styled(AccordionSummary)(() => ({
  "background": "#FFFFFF",
  ".MuiAccordionSummary-content": {
    margin: "5px 0",
  },
}));

export const CustomAccordionDetails = styled(AccordionDetails)(() => ({
  background: "#FFFFFF",
}));

export const ArrowButton = styled(ArrowDown)(({ expanded }) => ({
  width: 18,
  height: 9,
  transition: "transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
}));
