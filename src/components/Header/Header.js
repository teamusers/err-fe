import React from "react";
import { useIdleTimerContext } from "react-idle-timer";
import { Toolbar, Typography, Box, Avatar, Menu, Tooltip, MenuItem } from "@mui/material";
import { ReactComponent as DhlLogo } from "@Assets/dhl-logo.svg";
import { ReactComponent as ArrowDown } from "@Assets/arrow-down.svg";
import { useSelector, useDispatch } from "react-redux";
import { isLogin, logoutUser } from "@Store/Auth/Auth.slice";
import { useNavigate } from "react-router-dom";
import PathsUrl from "@Utils/Constants/PathsUrl";
import { NavBar, CustomIconButton } from "./Header.style";

const Header = () => {
  const userIsLogging = useSelector(isLogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const idleTimer = useIdleTimerContext();
  React.useEffect(() => {
    if (userIsLogging) {
      idleTimer?.start();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userIsLogging]);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const settings = [
    {
      label: "Logout",
      method: () => {
        dispatch(logoutUser());
        handleCloseUserMenu();
        localStorage.clear();
        navigate(PathsUrl?.login);
      },
    },
  ];

  return (
    <NavBar>
      <Toolbar>
        <Typography variant='h6' noWrap component='div' sx={{ mr: 2, display: "flex" }}>
          <DhlLogo />
        </Typography>
        {userIsLogging && (
          <Box sx={{ flexGrow: 0, marginLeft: "auto" }}>
            <Tooltip title='Open settings'>
              <CustomIconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt='Remy Sharp' />
                <ArrowDown />
              </CustomIconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting?.label} onClick={setting?.method}>
                  <Typography textAlign='center'>{setting?.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        )}
      </Toolbar>
    </NavBar>
  );
};

export default Header;
