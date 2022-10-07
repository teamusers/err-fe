import React from "react";
import { Typography, InputBase } from "@mui/material";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Button } from "@Components";
import { useTranslation } from "react-i18next";
import { userData as storeUserDAta } from "@Store/Auth/Auth.slice";
// import Roles from "@Utils/Constants/Roles";

import {
  EmailWrapper,
  BtnContainer,
  CancelButton,
  SendButton,
  RowWrap,
  ColumnWrap,
  CustomModal,
} from "./EmailModal.style";

const EmailModal = ({ open, onClose, onProceed }) => {
  const { t } = useTranslation();
  const userData = useSelector(storeUserDAta);
  // const userRole = userData?.role;

  const {
    register,
    handleSubmit,
    // reset,
    formState: {
      // errors,
      // isDirty,
      isValid,
    },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      receipient: "",
      user: "",
      subject: "",
      opentext: "",
    },
  });

  const submitHanlder = (e) => {
    if (onProceed) {
      onProceed(e);
    }
  };

  return (
    <CustomModal styledonClose={onClose} open={open} hideBackdrop disableEnforceFocus>
      <form onSubmit={handleSubmit(submitHanlder)}>
        <BtnContainer>
          <Button color='primary' variant='text' onClick={onClose} startIcon={<CancelButton />} />
          <Button color='primary' variant='text' startIcon={<SendButton />} disabled={!isValid} />
        </BtnContainer>

        <EmailWrapper>
          <RowWrap>
            <Typography variant='subtitle1'>{t("EmailReport.To")}</Typography>
            <InputBase
              {...register("receipient", {
                required: true,
              })}
              sx={{ ml: 1, flex: 1 }}
              placeholder='receipient1@dhl.com; receipient2@dhl.com'
            />
          </RowWrap>

          <RowWrap>
            <Typography variant='subtitle1'>{t("EmailReport.From")}</Typography>
            <InputBase
              {...register("user", {
                required: true,
              })}
              sx={{ ml: 1, flex: 1 }}
              value={userData?.email}
              disabled
            />
          </RowWrap>

          <RowWrap>
            <Typography variant='subtitle1'>{t("EmailReport.Subject")}</Typography>
            <InputBase
              {...register("subject", {
                required: true,
              })}
              sx={{ ml: 1, flex: 1 }}
              placeholder='Subject'
            />
          </RowWrap>

          <ColumnWrap>
            <Typography variant='subtitle1'>{t("EmailReport.Compose")}</Typography>
            <InputBase
              {...register("opentext", {
                required: true,
              })}
              sx={{ ml: 1, flex: 1 }}
              multiline
              fullWidth
              placeholder='Type here'
            />
          </ColumnWrap>
        </EmailWrapper>
      </form>
    </CustomModal>
  );
};

EmailModal.propTypes = {
  open: PropTypes?.bool,
  onClose: PropTypes?.func,
  onProceed: PropTypes?.func,
};

EmailModal.defaultProps = {
  open: false,
  onClose: null,
  onProceed: null,
};

export default EmailModal;
