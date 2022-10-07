import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Modal } from "@Utils/Styles";
import CircularProgress from "@mui/material/CircularProgress";
import { ReactComponent as CloseIcon } from "@Assets/close-button.svg";
import { ViewCont, Img, ViewClosebutton, LoadingContainer } from "./UploadComponent.style";

const ViewPicture = ({ open, onClose, src }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (open) {
      setLoading(true);
    }
  }, [open]);
  return (
    <Modal
      onClose={() => {
        if (onClose) {
          onClose();
        }
      }}
      open={open}
    >
      <ViewCont>
        <Img
          loading={loading}
          src={src}
          onLoad={() => {
            setLoading(false);
          }}
        />
        <ViewClosebutton
          loading={loading}
          onClick={() => {
            if (onClose) {
              onClose();
            }
          }}
        >
          <CloseIcon />
        </ViewClosebutton>

        {loading && (
          <LoadingContainer>
            <CircularProgress />
          </LoadingContainer>
        )}
      </ViewCont>
    </Modal>
  );
};

ViewPicture.propTypes = {
  open: PropTypes?.bool,
  src: PropTypes.string,
  onClose: PropTypes?.func,
};

ViewPicture.defaultProps = {
  onClose: null,
  open: false,
  src: "",
};

export default ViewPicture;
