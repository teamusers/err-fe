import { StyleSheet } from "@react-pdf/renderer";

// Create styles
export const styles = StyleSheet.create({
  header: {
    fisplay: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  h1: {
    fontFamily: "Inter",
    fontSize: 18,
    fontWeight: "bold",
  },
  h6: {
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: "bold",
  },
  text: {
    fontFamily: "Inter",
    fontSize: 10,
    lineHeight: 1.5,
  },

  textRight: {
    textAlign: "right",
  },
  textUnderline: {
    textDecoration: "underline",
  },
  fontBold: {
    fontFamily: "Inter",
    fontWeight: "bold",
  },
  red: {
    color: "#D40511",
  },

  dFlex: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  page: {
    padding: "30px 20px",
  },

  logo: {
    width: 195,
    height: 40,
  },

  shipmentDetails: {
    borderTop: "0.1px solid #000000",
    borderBottom: "0.1px solid #000000",
    marginTop: 25,
    display: "flex",
    flexDirection: "row",
    padding: "20px 0",
  },
  formGroup: {
    display: "flex",
    flexDirection: "row",
  },
  grid_2: {
    width: "50%",
  },

  grid_3: {
    width: "33.3333333333%",
  },
  grid_5: {
    width: "18%",
    height: 100,
    border: "1px solid black",
    display: "flex",
    justifyContent: "center",
    marginBottom: 10,
  },

  imageCont: {
    justifyContent: "space-evenly",
  },

  shipConsInfoLabel: {
    width: 70,
  },

  shipConsInfoValue: {
    width: "calc(100% - 70px)",
    flexShrink: 15,
  },
  marginTop_1: {
    marginTop: 5,
  },

  marginTop_2: {
    marginTop: 15,
  },

  marginLeft_1: {
    marginLeft: 10,
  },

  marginRight_1: {
    marginRight: 10,
  },

  img: {
    width: "100%",
    height: "auto",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 11,
    bottom: 15,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },

  damageInfo: {
    marginTop: 15,
  },

  wdlCont: {
    width: 225,
  },
  defaultCont: {
    backgroundColor: "#FAFAFA",
    padding: "12px 10px",
  },
});
