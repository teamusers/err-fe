import { styled } from "@mui/material/styles";
import { AppBar, IconButton } from "@mui/material";

export const NavBar = styled(AppBar)(() => ({
  background:
    "linear-gradient(90deg, rgb(255, 204, 0) 0%, rgb(255, 204, 0) 30%, rgb(255, 229, 127) 79%, rgb(255, 240, 178) 100%)",
  boxShadow: "none",
}));

export const CustomIconButton = styled(IconButton)(() => ({
  "> svg": {
    marginLeft: 5,
  },
}));
