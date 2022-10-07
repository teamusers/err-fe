import React from "react";
import ReactDOM from "react-dom";
import { LinearProgress, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Wrapper, ProgressBody } from "./ProgressBar.style";

const ProgressBar = ({ progress }) => {
  const { t } = useTranslation();
  return ReactDOM.createPortal(
    <Wrapper>
      <ProgressBody>
        <Typography variant='h6' align='center'>
          {t("Common.UploadingImages")}
        </Typography>
        <LinearProgress variant='determinate' value={progress} />
      </ProgressBody>
    </Wrapper>,
    document.getElementById("modal-cont")
  );
};

export default ProgressBar;
