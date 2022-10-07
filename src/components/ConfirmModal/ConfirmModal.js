import React from "react";
import { Button, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { Modal } from "@Utils/Styles";
import { ModaBody, ButtonCont } from "./ConfirmModal.style";

const ConfirmModal = ({
  title,
  note,
  open,
  onClose,
  onProceed,
  maxWidth,
  padding,
  cancelBtnText,
  proceedBtnText,
}) => {
  const { t } = useTranslation();

  return (
    <Modal onClose={onClose} open={open}>
      <ModaBody maxwidth={maxWidth} padding={padding}>
        <Typography variant='h6' className='text-bold'>
          {title || t("Modal.ConfirmMess")}
        </Typography>
        <Typography
          sx={{
            marginTop: 2,
          }}
        >
          {note || t("Modal.ConfirmMessNote")}
        </Typography>

        <ButtonCont>
          <Button
            size='large'
            sx={{
              marginRight: 2,
            }}
            variant='outlined'
            onClick={onClose}
          >
            {cancelBtnText || t("Common.No")}
          </Button>
          <Button size='large' variant='contained' onClick={onProceed}>
            {proceedBtnText || t("Common.Yes")}
          </Button>
        </ButtonCont>
      </ModaBody>
    </Modal>
  );
};

ConfirmModal.propTypes = {
  title: PropTypes?.string,
  note: PropTypes?.node,
  cancelBtnText: PropTypes?.string,
  proceedBtnText: PropTypes?.string,
  open: PropTypes?.bool,
  onClose: PropTypes?.func,
  onProceed: PropTypes?.func,
  maxWidth: PropTypes?.oneOfType([PropTypes?.string, PropTypes?.number]),
  padding: PropTypes?.oneOfType([PropTypes?.string, PropTypes?.number]),
};

ConfirmModal.defaultProps = {
  title: null,
  note: null,
  open: false,
  onClose: null,
  onProceed: null,
  maxWidth: null,
  padding: null,
  cancelBtnText: null,
  proceedBtnText: null,
};

export default ConfirmModal;
