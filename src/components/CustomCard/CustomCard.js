import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import { Title, CardBody } from "./CustomCard.style";

const CustomCard = ({ children, title }) => (
  <div>
    <Title>{typeof title === "string" ? <Typography>{title}</Typography> : title}</Title>
    <CardBody>{children}</CardBody>
  </div>
);

CustomCard.propTypes = {
  children: PropTypes?.node,
  title: PropTypes.node,
};

CustomCard.defaultProps = {
  children: null,
  title: null,
};

export default CustomCard;
