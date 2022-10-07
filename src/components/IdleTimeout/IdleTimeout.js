/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { IdleTimerProvider, workerTimers, IdleTimerConsumer } from "react-idle-timer";
import { useTranslation } from "react-i18next";
import { ConfirmModal } from "@Components";
import { logoutUser } from "@Store/Auth/Auth.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PathsUrl from "@Utils/Constants/PathsUrl";

const IdleTimeout = ({ children }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  return (
    <IdleTimerProvider
      timeout={1000 * 60 * 15}
      promptTimeout={1000 * 60}
      startOnMount={false}
      startManually
      stopOnIdle
      crossTab
      timers={workerTimers}
      onPrompt={() => {
        setOpenModal(true);
      }}
    >
      {children}
      <IdleTimerConsumer>
        {(idleTimer) => (
          <ConfirmModal
            open={openModal}
            onClose={() => {
              setOpenModal(false);
              idleTimer.start();
            }}
            title={t("Modal.StillThere")}
            note={
              <>
                {t("Modal.YourSession", {
                  sec: 49,
                })}
                <div
                  style={{
                    marginTop: 10,
                  }}
                />
                {t("Modal.PleaseClick")}{" "}
              </>
            }
            onProceed={() => {
              setOpenModal(false);
              dispatch(logoutUser());
              localStorage.clear();
              navigate(PathsUrl?.login);
            }}
          />
        )}
      </IdleTimerConsumer>
    </IdleTimerProvider>
  );
};

export default IdleTimeout;
