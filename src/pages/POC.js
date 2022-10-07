/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.action.hover,
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

  useEffect(() => {
    fetch("http://localhost:3000/v1/parse?kpi=Grade%20of%20Service")
      // .then((response) => response.json())
      .then((data) => {
        console.log("@@@API Response", data.data);
        // setDataList(data.data["Global KPI"]);
        setDataList(data.data);
      });
  }, []);

  useEffect(() => {
    // dataFormatter(dataList, selectedKPI);
    setFinalDataList(dataList);
  }, [dataList, selectedKPI]);

  const handleChange = (event) => {
    setSelectedKPI(event.target.value);
  };

  const criteriaHandleChange = (event) => {
    setSelectedCriteria(event.target.value);
  };

  return (
    <>
      {isConfettiDisplay && <Confetti width={width} height={height} />}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Item>
              {" "}
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id='demo-simple-select-label'>KPIs</InputLabel>
                  <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={selectedKPI}
                    label='KPIs'
                    onChange={handleChange}
                  >
                    {KPIList.map((KPIData) => (
                      <MenuItem value={KPIData}>{KPIData}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <br />
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id='demo-simple-select-label'>Criteria</InputLabel>
                  <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={selectedCriteria}
                    label='Criteria'
                    onChange={criteriaHandleChange}
                  >
                    {CriteriaList.map((CriteriaData) => (
                      <MenuItem value={CriteriaData}>{CriteriaData}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Typography variant='h4' gutterBottom>
                {selectedKPI}
              </Typography>
              <Typography variant='h4' gutterBottom>
                {selectedCriteria}
              </Typography>
              <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Countries</StyledTableCell>
                      <StyledTableCell align='right'>Past Qtr Avg.</StyledTableCell>
                      <StyledTableCell align='right'>Current Qtr Avg.</StyledTableCell>
                      <StyledTableCell align='right'>IPQ</StyledTableCell>
                      <StyledTableCell align='right'>Points</StyledTableCell>
                      <StyledTableCell align='right'>Score</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {console.log("finalDataList", finalDataList)}
                    {finalDataList.map((row, i) => (
                      <StyledTableRow
                        key={row.country}
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      >
                        <StyledTableCell component='th' scope='row'>
                          {i + 1}. {row?.country}
                        </StyledTableCell>
                        <StyledTableCell align='right'>
                          {row?.pastQuarterTotalAverage}
                        </StyledTableCell>
                        <StyledTableCell align='right'>
                          {row?.currentQuarterTotalAverage}
                        </StyledTableCell>
                        <StyledTableCell align='right'>{row?.IPQ}</StyledTableCell>
                        <StyledTableCell align='right'>
                          {selectedCriteria === "E-T-M" ? row?.ETM : row?.ETMvsIPQ}
                        </StyledTableCell>
                        <StyledTableCell align='right'>{row?.score}</StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Item>
          </Grid>
          <Grid item xs />
        </Grid>
      </Box>
    </>
  );
};

export default POC;
