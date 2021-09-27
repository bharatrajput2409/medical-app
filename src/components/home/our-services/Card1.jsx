import { Paper } from "@material-ui/core";
import React from "react";
import double_ellipse from "../../../media/double_ellipse.svg";
import heart_with_wings from "../../../media/heart_with_wings.svg";
import single_ellipse from "../../../media/single_ellipse.svg";
function Card1() {
  return (
    <Paper className="our-services-cards">
      <img src={double_ellipse} alt="" className="double_ellipse" />
      <img src={double_ellipse} alt="" className="double_ellipse" />
      <img src={double_ellipse} alt="" className="double_ellipse" />
    </Paper>
  );
}

export default Card1;
