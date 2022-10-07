import { styled } from "@mui/material/styles";
import { Container } from "@Utils/Styles";

export const CustomContainer = styled(Container)(({ theme }) => ({
  padding: "5px 10px",
  [theme.breakpoints.up("md")]: {
    padding: "5px 10px",
  },
}));
