import { Paper, Typography } from "@material-ui/core";
import React from "react";
import medicine_bottle from "../../../media/medicine_bottle.svg";
function Card1() {
  return (
    <Paper className="our-services-cards">
      <img
        src={medicine_bottle}
        alt=""
        className="heart_with_wings card2"
        style={{ width: "100px" }}
      />
      <Typography
        variant="h6"
        className="heading-color text-center card-heading card2"
      >
        Medicines
      </Typography>
      <Typography
        variant="subtitle1"
        className="card-heading card2"
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
