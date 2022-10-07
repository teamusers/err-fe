import { styled } from "@mui/material/styles";

export const CheckCont = styled("div")(({ complete }) => ({
  border: `1px solid  ${complete ? "#007B38" : "#CCCCCC"}`,
  background: complete ? "#76BD21" : "#E5E5E5",
  width: 12,
  height: 12,
  borderRadius: 100,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "center",
  marginRight: 8,
}));
