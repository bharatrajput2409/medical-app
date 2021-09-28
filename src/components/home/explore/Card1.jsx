import { makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import diet_img from "../../../media/explore_diet.svg";
const useStyles = makeStyles((theme) => ({
  root: {
    "& $image": {
      transform: "translate(0,-80px)",
      transition: "transform 300ms",
    },
    background: "#00563B",
    padding: ".5rem",
    height: "80px",
    "& $heading": {
      color: "white",
      textAlign: "center",
      transform: "translate(0,-60px)",
    },
    "&:hover $image": {
      transform: "translate(0,0px)",
    },
    "&:hover $heading": {
      transform: "translate(0,10px)",
      transition: "transform 300ms",
    },
    overflow: "hidden",
  },
  heading: {},
  image: {},
}));
function Card1() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <img
        src={diet_img}
        alt="image with burger and eggs"
        className={classes.image}
      />
      <Typography variant="h4" component="h4" className={classes.heading}>
        Diet Plan
      </Typography>
    </Paper>
  );
}

export default Card1;
