/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
// import moment from "moment";
// import _ from "lodash";
// import { Header } from "@components";
import { ReactComponent as DhlLogo } from "@assets/dhl-logo.svg";
import { Toolbar } from "@mui/material";
import { NavBar, CustomSelect } from "./Header.style";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   color: theme.palette.text.secondary,
// }));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#EEEEEE",
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

// eslint-disable-next-line no-unused-vars
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: "#F8F8F8",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const POC = () => {
  const isConfettiDisplay = false;
  const [dataList, setDataList] = useState({});
  const { width, height } = useWindowSize();
  const [finalDataList, setFinalDataList] = useState([]);
  const [selectedKPI, setSelectedKPI] = useState("Grade of Service");
  const [selectedCriteria, setSelectedCriteria] = useState("E-T-M");
  const KPIList = [
    "Grade of Service",
    "Abandoned Call Rate",
    "Trace Resolution - CS",
    "Complaint Resolution - CS",
    "Claim Resolution - CS",
    "Upselling",
  ];

  const CriteriaList = ["E-T-M", "IPQ", "E-T-M Vs IPQ"];

  // const dataFormatter = (listData, KPI) => {
  //   let arrContainer = [];
  //   const objContainer = {};
  //   const dataRows = [];

  //   for (const [key, value] of Object.entries(listData)) {
  //     console.log(`@@${key}: ${value.Countries}`);
  //     if (key === KPI) {
  //       for (const [key2, value2] of Object.entries(value.Countries)) {
  //         console.log(`##${key2}: ${value2}`);
  //         for (const [key3, value3] of Object.entries(value2)) {
  //           console.log(`$$${key3}: ${value3}`);
  //           const date = key3.split("-");
  //           const dateFormatted = moment(`${date[1]}-${date[0]}-01`).format("YYYY-MM-DD"); // format month
  //           arrContainer.push({
  //             month: dateFormatted,
  //             value: parseFloat(value3.slice(0, value3.length - 1)), // percentage and convert to float
  //           });
  //         }
  //         objContainer[key2] = _.orderBy(arrContainer, (arr) => arr.month, "desc"); // order by month desc
  //         arrContainer = [];
  //       }
  //     }
  //   }

  //   // computation
  //   for (const [key4, value4] of Object.entries(objContainer)) {
  //     const latestDate = moment(value4[0].month);
  //     const latestQuarter = latestDate.quarter();
  //     const latestQuarterYear = latestDate.year();
  //     const pastQuarter = latestQuarter === 1 ? 4 : latestQuarter - 1;
  //     const pastQuarterYear = latestQuarter === 1 ? latestQuarterYear - 1 : latestQuarterYear;
  //     let currentQuarterTotal = 0;
  //     let pastQuarterTotal = 0;

  //     value4.forEach((value4Data) => {
  //       const quarter = moment(value4Data.month).quarter();
  //       const year = moment(value4Data.month).year();
  //       if (quarter === latestQuarter && year === latestQuarterYear) {
  //         currentQuarterTotal += value4Data.value;
  //       } else if (quarter === pastQuarter && year === pastQuarterYear) {
  //         pastQuarterTotal += value4Data.value;
  //       }
  //     });

  //     const currentQuarterTotalAverage = (currentQuarterTotal / 3).toFixed(2);
  //     const pastQuarterTotalAverage = (pastQuarterTotal / 3).toFixed(2);
  //     const IPQ = (currentQuarterTotalAverage - pastQuarterTotalAverage).toFixed(2);
  //     const ETM = "30";
  //     const score = "90%";
  //     const ETMvsIPQ = "50";

  //     dataRows.push({
  //       country: key4,
  //       pastQuarterTotalAverage,
  //       currentQuarterTotalAverage,
  //       IPQ,
  //       ETM,
  //       score,
  //       ETMvsIPQ,
  //     });
  //   }

  //   console.log("$$datarows", dataRows);
  //   setFinalDataList(dataRows);
  // };

  const fetchData = (KPISelected) => {
    fetch(`http://localhost:3000/v1/parse?kpi=${KPISelected}`)
      .then((response) => response.text())
      .then((data) => {
        // setDataList(data.data["Global KPI"]);
        setDataList(data);
      });
  };

  useEffect(() => {
    fetchData(selectedKPI);
  }, [selectedKPI]);

  useEffect(() => {
    // dataFormatter(dataList, selectedKPI);
    if (typeof dataList !== "object") {
      if (dataList !== undefined) {
        const parseData = JSON.parse(dataList);
        const parseDataIPQ = JSON.parse(dataList);

        const sortDataETM = parseData.data.sort((a, b) => b.score - a.score);
        const sortDataIPQ = parseDataIPQ.data.sort((a, b) => b.IPQ - a.IPQ);

        const finalData = selectedCriteria === "E-T-M" ? sortDataETM : sortDataIPQ;
        setFinalDataList(finalData);
      }
    }
  }, [dataList, selectedCriteria]);

  useEffect(() => {
    setSelectedCriteria("E-T-M");
  }, [selectedKPI]);

  const handleChange = (event) => {
    setSelectedKPI(event.target.value);
  };

  const criteriaHandleChange = (event) => {
    setSelectedCriteria(event.target.value);
  };

  return (
    <>
      {isConfettiDisplay && <Confetti width={width} height={height} />}
      <NavBar>
        <Toolbar>
          <Typography variant='h6' noWrap component='div' sx={{ mr: 2, display: "flex" }}>
            <DhlLogo />
          </Typography>
        </Toolbar>
      </NavBar>
      <br />
      <br />
      <br />
      <br />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs />
          <Grid item xs={8}>
            <Typography variant='h4' gutterBottom>
              Converter Criteria Computation POC
            </Typography>
            <br />
            {/* <Item> */}
            <Grid container direction='row' justifyContent='flex-start' alignItems='center'>
              <Grid item>
                KPI
                <Box sx={{ maxWidth: 500 }}>
                  <FormControl fullWidth>
                    <CustomSelect
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      value={selectedKPI}
                      onChange={handleChange}
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      {KPIList.map((KPIData) => (
                        <MenuItem key={`${KPIData}`} value={KPIData}>
                          {KPIData}
                        </MenuItem>
                      ))}
                    </CustomSelect>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item>
                On Demand Criteria
                <Box sx={{ maxWidth: 300 }}>
                  <FormControl fullWidth>
                    <CustomSelect
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      value={selectedCriteria}
                      onChange={criteriaHandleChange}
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      {CriteriaList.map((CriteriaData) => (
                        <MenuItem key={`${CriteriaData}`} value={CriteriaData}>
                          {CriteriaData}
                        </MenuItem>
                      ))}
                    </CustomSelect>
                  </FormControl>
                </Box>
              </Grid>
            </Grid>
            <br />
            <br />
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Country</StyledTableCell>
                    {selectedCriteria !== "E-T-M" && (
                      <StyledTableCell>Past Qtr & Yr</StyledTableCell>
                    )}
                    {selectedCriteria !== "E-T-M" && (
                      <StyledTableCell>Current Qtr & Yr</StyledTableCell>
                    )}
                    {selectedCriteria !== "E-T-M" && (
                      <StyledTableCell>Past Qtr Avg</StyledTableCell>
                    )}
                    {selectedCriteria !== "E-T-M" && (
                      <StyledTableCell>Current Qtr Avg</StyledTableCell>
                    )}
                    {selectedCriteria !== "E-T-M" && <StyledTableCell>IPQ</StyledTableCell>}
                    {selectedCriteria !== "IPQ" && <StyledTableCell>Points</StyledTableCell>}
                    {selectedCriteria === "E-T-M" && <StyledTableCell>Score</StyledTableCell>}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {finalDataList.map((row, i) => (
                    <StyledTableRow
                      key={row.country}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <StyledTableCell component='th' scope='row'>
                        {i + 1}. {row?.country}
                      </StyledTableCell>
                      {selectedCriteria !== "E-T-M" && (
                        <StyledTableCell>{row?.pastQuarter}</StyledTableCell>
                      )}
                      {selectedCriteria !== "E-T-M" && (
                        <StyledTableCell>{row?.currentQuarter}</StyledTableCell>
                      )}
                      {selectedCriteria !== "E-T-M" && (
                        <StyledTableCell>{row?.pastQuarterTotalAverage}</StyledTableCell>
                      )}
                      {selectedCriteria !== "E-T-M" && (
                        <StyledTableCell>{row?.currentQuarterTotalAverage}</StyledTableCell>
                      )}
                      {selectedCriteria !== "E-T-M" && (
                        <StyledTableCell>{row?.IPQ}%</StyledTableCell>
                      )}
                      {selectedCriteria !== "IPQ" && (
                        <StyledTableCell>
                          {selectedCriteria === "E-T-M" ? row?.ETM : row?.ETMvsIPQ}
                        </StyledTableCell>
                      )}
                      {selectedCriteria === "E-T-M" && (
                        <StyledTableCell>{row?.score}%</StyledTableCell>
                      )}
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            {/* </Item> */}
          </Grid>
          <Grid item xs />
        </Grid>
      </Box>
      <br />
      <br />
    </>
  );
};

export default POC;
