import { Paper, Typography } from "@material-ui/core";
import React from "react";
import heart_with_wings from "../../../assets/media/heart_with_wings.svg";
import single_ellipse from "../../../assets/media/single_ellipse.svg";
function Card1() {
  return (
    <Paper className="our-services-cards">
      <img src={heart_with_wings} alt="" className="heart_with_wings" />
      <img src={single_ellipse} alt="" className="single_ellipse" />
      <Typography
        variant="h6"
        className="heading-color text-center card-heading"
      >
        Health Care
      </Typography>
      <Typography
        variant="subtitle1"
        className="card-heading"
        style={{ textAlign: "justify" }}
      >
        Shades of blue include cyan, navy, turquoise, aqua, midnight blue, sky
        blue, royal blue, and aquamarine.Shades of blue include cyan, navy,
        turquoise, aqua, midnight blue, sky blue, royal blue, and
        aquamarine.Shades of blue include cyan, navy.
      </Typography>
    </Paper>
  );
}

export default Card1;
