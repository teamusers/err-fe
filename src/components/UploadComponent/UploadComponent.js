/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import React, { useState, useCallback } from "react";
import ImageUploading from "react-images-uploading";
import PropTypes from "prop-types";
import { Button, Typography, Grid, useMediaQuery, CircularProgress } from "@mui/material";
import { useTranslation } from "react-i18next";
import UseClasses from "@Utils/Helpers/UseClasses";
import { Carousel } from "@Components";
import { useSnackbar } from "notistack";
import { ReactComponent as CloseIcon } from "@Assets/close-button.svg";
import { useTheme } from "@mui/material/styles";
import imageCompression from "browser-image-compression";
import ViewPicture from "./ViewPicture";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import {
  UploadWrapper,
  UploadButton,
  Thumbnail,
  CloseButton,
  CarouselItem,
  ViewButton,
  LoadingCompression,
} from "./UploadComponent.style";

const UploadComponent = ({ value, onChange, ...rest }) => {
  const theme = useTheme();
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const { t } = useTranslation();
  const globalStyle = UseClasses();
  const [showViewImage, setShowViewImage] = useState();
  const [showRemove, setShowRemove] = useState(false);
  const [toRemove, setToRemove] = useState(null);
  const [openFullScreen, setOpenFullScreen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const addDummyFile = (imagesLength) => {
    const dummyData = [];
    const totalDummy = 4 - imagesLength;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < totalDummy; i++) {
      dummyData.push(i);
    }
    return dummyData;
  };

  const notify = useCallback(
    (mes, type) => {
      enqueueSnackbar(mes, type);
    },
    [enqueueSnackbar]
  );

  return (
    <>
      <ImageUploading
        multiple
        value={value}
        onChange={(e, updateImage) => {
          if (updateImage) {
            setLoading(true);
            const compressData = [];
            const formattedData = e?.map((item) => {
              if (item?.file?.size > 100) {
                imageCompression(item?.file, {
                  maxSizeMB: 1,
                  useWebWorker: true,
                  initialQuality: 0.8,
                }).then((res) => {
                  imageCompression.getDataUrlFromFile(res).then((image) => {
                    compressData.push({
                      ...item,
                      file: res,
                      thumbnail: image,
                      original: image,
                    });
                    if (
                      formattedData?.filter((formattedDataItme) => formattedDataItme?.file)
                        ?.length === compressData?.length
                    ) {
                      setLoading(false);
                      if (formattedData?.length > compressData?.length) {
                        const originalData = formattedData?.filter(
                          (thumbnailItem) => thumbnailItem?.thumbnail
                        );
                        onChange([...originalData, ...compressData]);
                      } else {
                        onChange(compressData);
                      }
                    }
                  });
                });
              }
              return item;
            });
          }
          onChange(e);
        }}
        maxNumber={10}
        dataURLKey='original'
        onError={(error) => {
          if (error?.maxNumber) {
            notify(t("ErrorMess.MaxPhotoReach"), {
              variant: "error",
            });
          }
        }}
        {...rest}
      >
        {({ imageList, onImageUpload, onImageRemove, isDragging, dragProps }) => (
          <>
            <Grid container justifyContent='space-between'>
              <Grid item>
                <Typography className='text-bold' variant='body2' color='secondary'>
                  {t("Common.Photos")}
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant='text'
                  className={`${globalStyle?.font12} ${globalStyle?.textUnderline}`}
                  size='small'
                  onClick={() => setShowRemove(!showRemove)}
                >
                  {t("Common.RemovePhoto")}
                </Button>
              </Grid>
            </Grid>
            <UploadWrapper {...dragProps} style={isDragging ? { border: "1px solid red" } : null}>
              <Grid container rowSpacing={imageList?.length > 0 ? 2 : 0} justifyContent='center'>
                <Grid item xs={12} md={11}>
                  {imageList?.length > 0 ? (
                    <Carousel
                      options={{
                        groupCells: 4,
                        pageDots: false,
                        draggable: !isDesktop,
                      }}
                    >
                      {imageList.map((image, index) => (
                        <CarouselItem key={index} className='image-item'>
                          <Thumbnail bg={image.thumbnail}>
                            <ViewButton
                              onClick={() => {
                                setShowViewImage(image.original || image.thumbnail);
                                setOpenFullScreen(true);
                              }}
                            />
                            {showRemove && (
                              <CloseButton
                                onClick={() => {
                                  setToRemove(index);
                                  setShowConfirmModal(true);
                                }}
                              >
                                <CloseIcon />
                              </CloseButton>
                            )}
                          </Thumbnail>
                        </CarouselItem>
                      ))}

                      {addDummyFile(imageList?.length)?.map((_image, index) => (
                        <CarouselItem key={index} className='image-item'>
                          <Thumbnail dummy={1} />
                        </CarouselItem>
                      ))}
                    </Carousel>
                  ) : (
                    <Typography className={globalStyle?.grey} align='center'>
                      {t("Common.NoPhoto")}
                    </Typography>
                  )}
                </Grid>
                <Grid item>
                  <UploadButton
                    variant='contained'
                    disabled={value?.length === 10}
                    size='small'
                    onClick={onImageUpload}
                  >
                    {t("Common.TakePhoto")}
                  </UploadButton>
                </Grid>
              </Grid>
              {loading && (
                <LoadingCompression>
                  <CircularProgress />
                  <div>{t("Common.Optimizing")}</div>
                </LoadingCompression>
              )}
            </UploadWrapper>

            <ConfirmModal
              onClose={() => {
                setShowConfirmModal(false);
                setToRemove(null);
              }}
              open={showConfirmModal}
              onProceed={() => {
                onImageRemove(toRemove);
                setShowConfirmModal(false);
              }}
            />
          </>
        )}
      </ImageUploading>
      <ViewPicture
        open={openFullScreen}
        src={showViewImage}
        onClose={() => setOpenFullScreen(false)}
      />
    </>
  );
};

UploadComponent.propTypes = {
  onChange: PropTypes?.func,
  value: PropTypes?.array,
};

UploadComponent.defaultProps = {
  onChange: null,
  value: [],
};

export default UploadComponent;
