import React, { useState, useCallback } from "react";
import { Typography, Grid, IconButton, Menu, MenuItem } from "@mui/material";
// import UseClasses from "@Utils/Helpers/UseClasses";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { ReactComponent as MorePlainIcon } from "@Assets/moreplain-icon.svg";
import { ConfirmModal } from "@Components";
import { deleteUserIds } from "@Store/UserManagement/UserManagement.extraReducers";

import { CustomContainer } from "./UserResults.style";

const UserResults = ({ data }) => {
  // const globalStyle = UseClasses();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [openConfirmDeleteModal, setOpenConfirmDeleteModal] = useState(false);

  const notify = useCallback(
    (mes, type) => {
      enqueueSnackbar(mes, type);
    },
    [enqueueSnackbar]
  );

  const handleOpenMoreOptions = (event) => {
    setAnchorElUser(event.currentTarget);
    event?.stopPropagation();
  };

  const handleCloseMoreOptions = (event) => {
    setAnchorElUser(null);
    event?.stopPropagation();
  };

  const moreOptions = [
    {
      label: "Edit User",
      method: () => {
        handleCloseMoreOptions();
      },
    },
    {
      label: "Delete User",
      method: () => {
        handleCloseMoreOptions();
        setOpenConfirmDeleteModal(true);
      },
    },
  ];

  return (
    <CustomContainer>
      <Grid container justifyContent='space-between' alignItems='center'>
        <Grid item>
          <Typography>{data?.display_name}</Typography>
          <Typography className='subtitle3'>{data?.role_name}</Typography>
        </Grid>

        <Grid item>
          <IconButton
            aria-label='more-options'
            onFocus={(event) => event.stopPropagation()}
            onClick={handleOpenMoreOptions}
          >
            <MorePlainIcon />
          </IconButton>
          <Menu
            sx={{ mt: "45px" }}
            id='menu-appbar'
            aria-label='more-options-cont'
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseMoreOptions}
          >
            {moreOptions.map((item) => (
              <MenuItem
                onFocus={(event) => event.stopPropagation()}
                aria-label='more-options-child'
                key={item?.label}
                onClick={item?.method}
              >
                <Typography aria-label='more-options-child' textAlign='center'>
                  {item?.label}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Grid>
      </Grid>

      <ConfirmModal
        open={openConfirmDeleteModal}
        title={t("Modal.ConfirmDeleteUser")}
        note=' '
        onClose={() => {
          setOpenConfirmDeleteModal(false);
        }}
        onProceed={() => {
          setOpenConfirmDeleteModal(false);
          if (dispatch) {
            dispatch(deleteUserIds(data))
              .unwrap()
              .then((onSuccess) => {
                setLoading(false);
                if (onSuccess) {
                  onSuccess(data);
                }
              })
              .catch((error) => {
                setLoading(false);
                notify(error?.message, {
                  variant: "error",
                });
              });
          }
        }}
      />
    </CustomContainer>
  );
};

UserResults.propTypes = {
  data: PropTypes?.object,
};

UserResults.defaultProps = {
  data: null,
};

export default UserResults;
