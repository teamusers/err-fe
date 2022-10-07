import React, { useEffect, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import PropTypes from "prop-types";
import { ReactComponent as CloseIcon } from "@Assets/close-button.svg";
import { ScannerCamera, Closebutton } from "./Scanner.style";

const Scanner = ({ open, onScan, onClose }) => {
  const [html5QrCode, setHtml5QrCode] = useState(null);
  const handleCameraPermision = () => {
    Html5Qrcode.getCameras().then((devices) => {
      const { innerWidth: width } = window;
      const config = {
        fps: 10,
        qrbox: { width: width - 20, height: 200 },

        experimentalFeatures: {
          useBarCodeDetectorIfSupported: true,
        },
      };
      if (devices && devices.length) {
        html5QrCode.start({ facingMode: "environment" }, config, (decodedText) => {
          onScan(decodedText);
          onClose();
          html5QrCode.stop();
        });
      }
    });
  };

  const applyOrientation = () => {
    if (html5QrCode.getState() === 2) {
      html5QrCode.stop();
      handleCameraPermision();
    }
  };

  useEffect(() => {
    const html5coder = new Html5Qrcode("reader");
    setHtml5QrCode(html5coder);
  }, []);

  useEffect(() => {
    if (html5QrCode) {
      window.addEventListener("resize", applyOrientation);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [html5QrCode]);

  useEffect(() => {
    if (open) {
      handleCameraPermision();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
  return (
    <ScannerCamera show={open ? 1 : 0}>
      <div id='reader' width='600px' />
      <Closebutton
        onClick={() => {
          if (onClose) {
            onClose();
          }
          if (html5QrCode.getState() === 2) {
            html5QrCode.stop();
          }
        }}
      >
        <CloseIcon />
      </Closebutton>
    </ScannerCamera>
  );
};

Scanner.propTypes = {
  open: PropTypes?.bool,
  onScan: PropTypes?.func,
  onClose: PropTypes?.func,
};

Scanner.defaultProps = {
  open: false,
  onScan: null,
  onClose: null,
};

export default Scanner;
