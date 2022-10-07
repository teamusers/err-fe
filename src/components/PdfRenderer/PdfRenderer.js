import React from "react";
import { Page, Text, View, Document, Image, Font } from "@react-pdf/renderer";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import DhlLogo from "@Assets/dhl-logo.jpg";
import moment from "moment";
import Reports from "@Utils/Constants/Reports";
import InterRegular from "./Inter-Regular.ttf";
import InterBold from "./Inter-Bold.ttf";
import { styles } from "./PdfRenderer.style";

Font.register({
  family: "Inter",
  fonts: [
    {
      src: InterRegular,
    },
    {
      src: InterBold,
      fontWeight: "bold",
    },
  ],
});

// Create Document Component
const PdfRenderer = ({ data }) => {
  const { t } = useTranslation();
  const formatDate = (date) => moment(date).format("DD/MM/YYYY");
  const formatTime = (time) => moment(time).format("HH:MM");

  return (
    <Document>
      <Page wrap={false} size='A4' style={styles.page}>
        <View style={styles.header}>
          <div>
            <Text style={styles.h1}>{t("PDF.DamageReport")}</Text>
            <Text style={[styles.text, styles.red, { marginTop: 5 }]}>
              {t("PDF.ReportNo")} <span style={styles.fontBold}>{data?.formatted_report_id}</span>
            </Text>
          </div>
          <div>
            <Image cache style={styles.logo} src={DhlLogo} />
          </div>
        </View>
        {/* 1st */}
        <View style={styles.shipmentDetails}>
          <div style={styles.grid_3}>
            <div style={styles.formGroup}>
              <Text style={[styles.text, styles.grid_2]}>{t("PDF.ReportDate")}</Text>
              <Text style={[styles.text, styles.grid_2, styles.fontBold]}>
                {formatDate(data?.created_date)}
              </Text>
            </div>

            <div style={[styles.formGroup, styles.marginTop_1]}>
              <Text style={[styles.text, styles.grid_2]}>{t("PDF.DetectedDate")}</Text>
              <Text style={[styles.text, styles.grid_2, styles.fontBold]}>
                {formatDate(data?.damage_details?.dateTimeDetection)}
              </Text>
            </div>

            <div style={[styles.formGroup, styles.marginTop_1]}>
              <Text style={[styles.text, styles.grid_2]}>{t("PDF.InspectionDate")}</Text>
              <Text style={[styles.text, styles.grid_2, styles.fontBold]}>
                {formatDate(data?.damage_details?.dateTimeInspec)}
              </Text>
            </div>

            <div style={[styles.formGroup, styles.marginTop_1]}>
              <Text style={[styles.text, styles.grid_2]}>{t("Labels.Repack")}</Text>
              <Text style={[styles.text, styles.grid_2, styles.fontBold]}>
                {t(`Common.${data?.damage_details?.repack ? "Yes" : "No"}`)}
              </Text>
            </div>

            <div style={[styles.formGroup, styles.marginTop_1]}>
              <Text style={[styles.text, styles.grid_2]}>{t("PDF.RepactBy")}</Text>
              <Text style={[styles.text, styles.grid_2, styles.fontBold]}>
                {t(`Common.${data?.damage_details?.repack}`)}
              </Text>
            </div>
          </div>

          {/* 2nd */}
          <div style={styles.grid_3}>
            <div style={styles.formGroup}>
              <Text style={[styles.text, styles.grid_2]}>{t("Labels.ReportedBy")}</Text>
              <Text style={[styles.text, styles.grid_2, styles.fontBold]}>
                {data?.damage_details?.reportedBy}
              </Text>
            </div>

            <div style={[styles.formGroup, styles.marginTop_1]}>
              <Text style={[styles.text, styles.grid_2]}>{t("PDF.DetectedTime")}</Text>
              <Text style={[styles.text, styles.grid_2, styles.fontBold]}>
                {formatTime(data?.damage_details?.dateTimeDetection)}
              </Text>
            </div>

            <div style={[styles.formGroup, styles.marginTop_1]}>
              <Text style={[styles.text, styles.grid_2]}>{t("PDF.InspectedBy")}</Text>
              <Text style={[styles.text, styles.grid_2, styles.fontBold]}>
                {data?.damage_details?.inspectBy}
              </Text>
            </div>

            <div style={[styles.formGroup, styles.marginTop_1]}>
              <Text style={[styles.text, styles.grid_2]}>{t("PDF.CheckpointDm")}</Text>
              <Text style={[styles.text, styles.grid_2, styles.fontBold]}>
                {t(`Common.${data?.damage_details?.checkpointDetails ? "Yes" : "No"}`)}
              </Text>
            </div>

            <div style={[styles.formGroup, styles.marginTop_1]}>
              <Text style={[styles.text, styles.grid_2]}>{t("PDF.CheckpointSI")}</Text>
              <Text style={[styles.text, styles.grid_2, styles.fontBold]}>{t(`Common.Yes`)}</Text>
            </div>
          </div>

          {/* 3rd */}
          <div style={styles.grid_3}>
            <div style={styles.formGroup}>
              <Text style={[styles.text, styles.grid_2]}>{t("PDF.Facility")}</Text>
              <Text style={[styles.text, styles.grid_2, styles.fontBold]}>
                {data?.damage_details?.SVA}
                {data?.damage_details?.FAC}
              </Text>
            </div>

            <div style={[styles.formGroup, styles.marginTop_1]}>
              <Text style={[styles.text, styles.grid_2]}>{t("Labels.DetectedBy")}</Text>
              <Text style={[styles.text, styles.grid_2, styles.fontBold]}>
                {data?.damage_details?.detectedBy}
              </Text>
            </div>

            <div style={[styles.formGroup, styles.marginTop_1]}>
              <Text style={[styles.text, styles.grid_2]}>{t("PDF.DetectedLoc")}</Text>
              <Text style={[styles.text, styles.grid_2, styles.fontBold]}>
                {t(`Common.${data?.damage_details?.damageDetected}`)}
              </Text>
            </div>
          </div>
        </View>
        {/* damage shipment info */}
        <View style={styles.damageInfo}>
          <div style={styles.header}>
            <div>
              <Text style={[styles.h6, styles.red]}>{t("PDF.DamageShipmentInfo")}</Text>
            </div>

            <div style={styles.dFlex}>
              <div style={styles.formGroup}>
                <Text style={styles.text}>{t("PDF.AWB")} </Text>
                <Text style={[styles.text, styles.fontBold]}>{data?.waybill_id}</Text>
              </div>

              <div style={[styles.formGroup, styles.marginLeft_1]}>
                <Text style={styles.text}>{t("PDF.Orig")} </Text>
                <Text style={[styles.text, styles.fontBold]}>{data?.damage_details?.origin}</Text>
              </div>

              <div style={[styles.formGroup, styles.marginLeft_1]}>
                <Text style={styles.text}>{t("PDF.Dest")} </Text>
                <Text style={[styles.text, styles.fontBold]}>
                  {data?.damage_details?.destination}
                </Text>
              </div>
            </div>
          </div>

          <div style={[styles.defaultCont, styles.marginTop_1]}>
            <Text style={[styles.text, styles.textUnderline]}>{t("PDF.IDInof")}</Text>
            <Text style={[styles.text, styles.marginTop_2]}>{t("PDF.DamagePiecesId")}</Text>
            <div style={styles.dFlex}>
              {data?.piece_ids?.map((item) => (
                <Text style={[styles.grid_3, styles.text, styles.fontBold]} key={item}>
                  {item}
                </Text>
              ))}
            </div>

            <div style={styles.marginTop_2}>
              <Text style={styles.text}>{t("PDF.DeclaredContent")}</Text>
              <Text style={[styles.text, styles.fontBold]}>
                {data?.damage_details?.declaredContent}
              </Text>
            </div>

            <Text style={[styles.text, styles.textUnderline, styles.marginTop_2]}>
              {t("PDF.ShipperInfo")}
            </Text>

            <div style={[styles.formGroup, styles.marginTop_2]}>
              <Text style={[styles.text, styles.shipConsInfoLabel]}>{t("PDF.AccountNo")}</Text>
              <Text style={[styles.text, styles.fontBold, styles.shipConsInfoValue]}>
                {data?.damage_details?.shipperAcc}
              </Text>
            </div>

            <div style={[styles.formGroup]}>
              <Text style={[styles.text, styles.shipConsInfoLabel]}>{t("PDF.TelNo")}</Text>
              <Text style={[styles.text, styles.fontBold, styles.shipConsInfoValue]}>
                {data?.damage_details?.tel}
              </Text>
            </div>

            <div style={[styles.formGroup]}>
              <Text style={[styles.text, styles.shipConsInfoLabel]}>{t("PDF.Name")}</Text>
              <Text style={[styles.text, styles.fontBold, styles.shipConsInfoValue]}>
                {data?.damage_details?.shipperName}
              </Text>
            </div>

            <div style={[styles.formGroup]}>
              <Text style={[styles.text, styles.shipConsInfoLabel]}>{t("PDF.Address")}</Text>
              <Text style={[styles.text, styles.fontBold, styles.shipConsInfoValue]}>
                {data?.damage_details?.shipperAdd}
              </Text>
            </div>

            <Text style={[styles.text, styles.textUnderline, styles.marginTop_2]}>
              {t("PDF.ConsInfo")}
            </Text>

            <div style={[styles.formGroup, styles.marginTop_2]}>
              <Text style={[styles.text, styles.shipConsInfoLabel]}>{t("PDF.Name")}</Text>
              <Text style={[styles.text, styles.fontBold, styles.shipConsInfoValue]}>
                {data?.damage_details?.consName}
              </Text>
            </div>

            <div style={[styles.formGroup]}>
              <Text style={[styles.text, styles.shipConsInfoLabel]}>{t("PDF.Address")}</Text>
              <Text style={[styles.text, styles.fontBold, styles.shipConsInfoValue]}>
                {data?.damage_details?.consAdd}
              </Text>
            </div>
          </div>
        </View>
        {/* damage description */}
        <View wrap={false} style={styles.marginTop_2}>
          <Text style={[styles.h6, styles.red]}>{t("PDF.DamageDesc")}</Text>

          <div style={[styles.defaultCont, styles.marginTop_1]}>
            {/* inner packaging */}
            {data?.damage_details?.damagePortion?.includes(
              Reports?.damageProtionValue?.innerPack
            ) && (
              <>
                <Text style={[styles.text, styles.textUnderline]}>{t("PDF.InnerPackaging")}</Text>

                <div style={[styles.formGroup, styles.marginTop_2]}>
                  <Text style={[styles.text, styles.shipConsInfoLabel]}>
                    {t("SubmitReportSummary.Material")}
                  </Text>
                  <div
                    style={[styles.text, styles.fontBold, styles.shipConsInfoValue, styles.dFlex]}
                  >
                    {data?.damage_details?.innerPackaging?.selectMaterial &&
                      data?.damage_details?.innerPackaging?.selectMaterial?.map((item) => (
                        <Text style={[styles.grid_3, styles.text, styles.fontBold]} key={item}>
                          {t(`PDF.${item}`)}
                        </Text>
                      ))}
                  </div>
                </div>

                <div style={[styles.formGroup, styles.marginTop_2]}>
                  <Text style={[styles.text, styles.shipConsInfoLabel]}>{t("PDF.DamageType")}</Text>
                  <div
                    style={[styles.text, styles.fontBold, styles.shipConsInfoValue, styles.dFlex]}
                  >
                    {data?.damage_details?.innerPackaging?.damageTypeMaterial &&
                      data?.damage_details?.innerPackaging?.damageTypeMaterial?.map((item) => (
                        <Text style={[styles.grid_3, styles.text, styles.fontBold]} key={item}>
                          {t(`PDF.${item}`)}
                        </Text>
                      ))}
                  </div>
                </div>
              </>
            )}

            {/* Outer packaging */}
            {data?.damage_details?.damagePortion?.includes(
              Reports?.damageProtionValue?.outerPack
            ) && (
              <>
                <Text style={[styles.text, styles.textUnderline, styles?.marginTop_2]}>
                  {t("PDF.OuterPackaging")}
                </Text>

                <div style={[styles.formGroup, styles.marginTop_2]}>
                  <Text style={[styles.text, styles.shipConsInfoLabel]}>
                    {t("SubmitReportSummary.Material")}
                  </Text>
                  <div
                    style={[styles.text, styles.fontBold, styles.shipConsInfoValue, styles.dFlex]}
                  >
                    {data?.damage_details?.outerPackaging?.selectMaterial &&
                      data?.damage_details?.outerPackaging?.selectMaterial?.map((item) => (
                        <Text style={[styles.grid_3, styles.text, styles.fontBold]} key={item}>
                          {t(`PDF.${item}`)}
                        </Text>
                      ))}
                  </div>
                </div>

                <div style={[styles.formGroup, styles.marginTop_2]}>
                  <Text style={[styles.text, styles.shipConsInfoLabel]}>{t("PDF.DamageType")}</Text>
                  <div
                    style={[styles.text, styles.fontBold, styles.shipConsInfoValue, styles.dFlex]}
                  >
                    {data?.damage_details?.outerPackaging?.damageTypeMaterial &&
                      data?.damage_details?.outerPackaging?.damageTypeMaterial?.map((item) => (
                        <Text style={[styles.grid_3, styles.text, styles.fontBold]} key={item}>
                          {t(`PDF.${item}`)}
                        </Text>
                      ))}
                  </div>
                </div>
              </>
            )}

            {/* damage to content */}

            {data?.damage_details?.damagePortion?.includes(
              Reports?.damageProtionValue?.damageCont
            ) && (
              <>
                <Text style={[styles.text, styles.textUnderline, styles?.marginTop_2]}>
                  {t("PDF.DamageCont")}
                </Text>

                <div style={[styles.formGroup, styles.marginTop_2]}>
                  <Text style={[styles.text, styles.shipConsInfoLabel]}>{t("PDF.DamageType")}</Text>
                  <div
                    style={[styles.text, styles.fontBold, styles.shipConsInfoValue, styles.dFlex]}
                  >
                    {data?.damage_details?.damageCont?.selectMaterial &&
                      data?.damage_details?.damageCont?.selectMaterial?.map((item) => (
                        <Text style={[styles.grid_3, styles.text, styles.fontBold]} key={item}>
                          {t(`PDF.${item}`)}
                        </Text>
                      ))}
                  </div>
                </div>
              </>
            )}

            {data?.damage_details?.damageCont?.selectMaterial?.includes("Others") && (
              <>
                <Text style={[styles.text, styles.textUnderline, styles?.marginTop_2]}>
                  {t("PDF.ShipmentCont")}
                </Text>

                <div style={[styles.formGroup, styles.marginTop_2]}>
                  <Text style={[styles.text, styles.shipConsInfoLabel]}>{t("PDF.Missing")}</Text>
                  <Text style={[styles.text, styles.fontBold, styles.shipConsInfoValue]}>
                    {data?.damage_details?.damageCont?.others?.textarea}
                  </Text>
                </div>

                <div style={[styles.dFlex, styles.marginTop_1]}>
                  <div style={[styles.formGroup, styles.marginTop_1, styles.wdlCont]}>
                    <Text style={[styles.text, styles.shipConsInfoLabel]}>{t("PDF.WDL")}</Text>
                    <Text style={[styles.text, styles.fontBold, styles.shipConsInfoValue]}>
                      {data?.damage_details?.damageCont?.others?.wdl}
                    </Text>
                  </div>
                  <div style={[styles.formGroup, styles.marginTop_1, styles.grid_3]}>
                    <Text style={[styles.text, styles.shipConsInfoLabel]}>
                      {t("PDF.ActualWeight")}
                    </Text>
                    <Text style={[styles.text, styles.fontBold, styles.shipConsInfoValue]}>
                      {data?.damage_details?.damageCont?.others?.actualWeight}
                    </Text>
                  </div>
                </div>
              </>
            )}
          </div>
        </View>
        {/* possible root cause */}

        <View style={styles.marginTop_2}>
          <Text style={[styles.h6, styles.red]}>{t("PDF.DamageDesc")}</Text>

          <div style={[styles.defaultCont, styles.marginTop_1]}>
            <Text style={styles.text}>{t("PDF.DeclaredCont")}</Text>
            <div style={[styles.dFlex, styles.marginTop_1]}>
              {data?.damage_details?.rootCause &&
                data?.damage_details?.rootCause?.map((item) => (
                  <Text style={[styles.text, styles.fontBold, styles.marginRight_1]}>
                    {t(`PDF.${item}`)}
                  </Text>
                ))}
            </div>
          </div>
        </View>

        {/* photos */}
        <View wrap={false}>
          <Text style={[styles.h6, styles.red, styles.marginTop_2]}>{t("PDF.PhotoDamage")}</Text>
          <div style={[styles.dFlex, styles.marginTop_2, styles.imageCont]}>
            {data?.damage_details?.photos &&
              data?.damage_details?.photos?.map((item) => (
                <div style={styles.grid_5}>
                  <Image style={styles.img} src={item?.original} />
                </div>
              ))}
            <div style={{ width: "18%" }} />
            <div style={{ width: "18%" }} />
            <div style={{ width: "18%" }} />
            <div style={{ width: "18%" }} />
          </div>
        </View>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) => `${pageNumber} of ${totalPages}`}
          fixed
        />
      </Page>
    </Document>
  );
};

PdfRenderer.propTypes = {
  data: PropTypes?.object,
};

PdfRenderer.defaultProps = {
  data: {},
};

export default PdfRenderer;
