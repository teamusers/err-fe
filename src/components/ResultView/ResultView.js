import React, { useState, useCallback } from "react";
import { Typography, Grid, IconButton, Menu, MenuItem } from "@mui/material";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";
import UseClasses from "@Utils/Helpers/UseClasses";
import PathsUrl, { stepperType } from "@Utils/Constants/PathsUrl";
import { userData as storeUserDAta } from "@Store/Auth/Auth.slice";
import { ReactComponent as MoreIcon } from "@Assets/more-icon.svg";
import { ConfirmModal, EmailModal, PdfRenderer } from "@Components";
import Reports from "@Utils/Constants/Reports";
import Roles from "@Utils/Constants/Roles";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { deleteReportBy } from "@Store/Report/Report.extraReducers";

import {
  CustomAccordion,
  CustomAccordionSummary,
  CustomAccordionDetails,
  ArrowButton,
} from "./ResultView.style";

const ResultView = ({ resData, onProceed, onExport }) => {
  const { t } = useTranslation();
  const globalStyle = UseClasses();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [reportStatus] = useState(`${resData?.status}`);
  const userData = useSelector(storeUserDAta);
  const userRole = userData?.role;
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [expanded, setExpanded] = React.useState(false);
  const [openConfirmDeleteModal, setOpenConfirmDeleteModal] = useState(false);
  const [openConfirmExportModal, setOpenConfirmExportModal] = useState(false);
  const [openConfirmRestoreModal, setOpenConfirmRestoreModal] = useState(false);
  const [openEmailModal, setOpenEmailModal] = useState(false);

  const handleOpenMoreOptions = (event) => {
    setAnchorElUser(event.currentTarget);
    event?.stopPropagation();
  };

  const handleCloseMoreOptions = (event) => {
    setAnchorElUser(null);
    event?.stopPropagation();
  };

  const notify = useCallback(
    (mes, type) => {
      enqueueSnackbar(mes, type);
    },
    [enqueueSnackbar]
  );

  const menuOptions = [
    {
      label: "Edit Report",
      method: () => {
        handleCloseMoreOptions();
        navigate(`${PathsUrl?.report?.stepper}/${resData?.report_id}/${stepperType?.edit}`);
      },
      show: resData?.status !== Reports?.status?.deleted,
    },
    {
      label: "Delete Report",
      method: (e) => {
        handleCloseMoreOptions();
        setOpenConfirmDeleteModal(true);
        e?.stopPropagation();
      },
      show:
        resData?.status !== Reports?.status?.deleted &&
        (userRole === Roles?.regionalAdmin ||
          userRole === Roles?.supervisor ||
          userRole === Roles?.superAdmin ||
          userRole === Roles?.superAdmin),
    },
    {
      label: "Export Report",
      component: (
        <MenuItem
          onFocus={(event) => event.stopPropagation()}
          onClick={(event) => {
            handleCloseMoreOptions();
            event.stopPropagation();
          }}
          aria-label='more-options-child'
        >
          <PDFDownloadLink
            className='MuiTypography-root MuiTypography-body1 css-8kd8xq-MuiTypography-root download-link'
            document={<PdfRenderer data={resData} />}
            fileName={`Report-${resData?.formatted_report_id}.pdf`}
          >
            {({ loading }) => (loading ? "Loading..." : "Export Report")}
          </PDFDownloadLink>
        </MenuItem>
      ),
      show:
        (userRole === Roles?.regionalAdmin ||
          userRole === Roles?.supervisor ||
          userRole === Roles?.superAdmin ||
          userRole === Roles?.countryAdmin) &&
        resData?.status !== Reports?.status?.deleted,
    },
    {
      label: "Email Report",
      method: (e) => {
        handleCloseMoreOptions();
        setOpenEmailModal(true);
        e?.stopPropagation();
      },
      show:
        (userRole === Roles?.regionalAdmin ||
          userRole === Roles?.supervisor ||
          userRole === Roles?.superAdmin ||
          userRole === Roles?.countryAdmin) &&
        resData?.status !== Reports?.status?.deleted,
    },

    {
      label: "Restore Report",
      method: (e) => {
        handleCloseMoreOptions();
        setOpenConfirmRestoreModal(true);
        e?.stopPropagation(e);
      },
      show:
        (userRole === Roles?.regionalAdmin ||
          userRole === Roles?.supervisor ||
          userRole === Roles?.superAdmin ||
          userRole === Roles?.countryAdmin) &&
        resData?.status === Reports?.status?.deleted,
    },
  ];

  return (
    <CustomAccordion
      onChange={(_e, expand) => {
        setExpanded(expand);
      }}
      sx={{
        overflow: "hidden",
      }}
    >
      <CustomAccordionSummary
        aria-label='Expand'
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        <Grid container>
          <Grid item>
            <Typography className={globalStyle?.bold}>
              {t("EditDeleteReport.ReportId")} {resData?.formatted_report_id}
            </Typography>

            {reportStatus === `${Reports?.status?.submitted}` ? (
              <Typography className={globalStyle?.green}>{resData?.status}</Typography>
            ) : (
              <Typography className={globalStyle?.red}>{resData?.status}</Typography>
            )}
          </Grid>

          <Grid
            item
            sx={{
              marginLeft: "auto",
            }}
          >
            <ArrowButton expanded={expanded} />

            <IconButton
              aria-label='more-options'
              onFocus={(event) => event.stopPropagation()}
              onClick={handleOpenMoreOptions}
            >
              <MoreIcon />
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
              {menuOptions.map((item) =>
                item?.show
                  ? item?.component || (
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
                    )
                  : null
              )}
            </Menu>
          </Grid>
        </Grid>

        <ConfirmModal
          open={openConfirmDeleteModal}
          title={t("Modal.ConfirmDelete")}
          note=' '
          onClose={() => {
            setOpenConfirmDeleteModal(false);
          }}
          onProceed={() => {
            setOpenConfirmDeleteModal(false);
            if (dispatch) {
              dispatch(deleteReportBy({ id: resData?.report_id }))
                .unwrap()
                .then((res, onSuccess) => {
                  setLoading(false);
                  if (onSuccess) {
                    onSuccess(res);
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

        <ConfirmModal
          open={openConfirmExportModal}
          title={t("Modal.ConfirmExport")}
          note=' '
          onClose={() => {
            setOpenConfirmExportModal(false);
          }}
          onProceed={() => {
            setOpenConfirmExportModal(false);
            if (onExport) {
              onExport();
            }
          }}
        />

        <ConfirmModal
          open={openConfirmRestoreModal}
          title={t("Modal.ConfirmRestore")}
          note=' '
          onClose={() => {
            setOpenConfirmRestoreModal(false);
          }}
          onProceed={() => {
            setOpenConfirmRestoreModal(false);
            if (onProceed) {
              onProceed();
            }
          }}
        />

        <EmailModal
          open={openEmailModal}
          onClose={(e) => {
            setOpenEmailModal(false);
            e?.stopPropagation();
          }}
          onProceed={() => {
            setOpenEmailModal(false);
            if (onProceed) {
              onProceed();
            }
          }}
        />
      </CustomAccordionSummary>

      <CustomAccordionDetails>
        <Grid>
          <Typography className={globalStyle?.textUnderline}>{t("Reports.AWB")}</Typography>
          <Typography>{resData?.waybill_id}</Typography>
        </Grid>

        <Grid className={globalStyle?.marTop2}>
          <Typography className={globalStyle?.textUnderline}>{t("Reports.PieceId")}</Typography>
          {resData?.piece_ids &&
            resData?.piece_ids?.map((piece) => (
              <Typography variant='caption'>
                {t`${piece}`} <br />
              </Typography>
            ))}
        </Grid>
      </CustomAccordionDetails>
    </CustomAccordion>
  );
};

ResultView.propTypes = {
  resData: PropTypes?.object,
  onProceed: PropTypes?.func,
  onExport: PropTypes?.func,
};

ResultView.defaultProps = {
  resData: {},
  onExport: null,
  onProceed: null,
};

export default ResultView;
