import { Paper, Typography } from "@material-ui/core";
import React from "react";
import card_triangle from "../../../media/card_triangle.svg";
function Card1() {
  return (
    <Paper className="our-services-cards">
      <img
        src={card_triangle}
        alt=""
        className="heart_with_wings card3"
        style={{ width: "360px" }}
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
