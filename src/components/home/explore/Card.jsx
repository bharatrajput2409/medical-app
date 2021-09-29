import { makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import proptypes from "prop-types";
const useStyles = makeStyles((theme) => ({
  root: {
    "& $image": {
      transform: "translate(0,-80px)",
      transition: "transform 300ms",
    },
    background: "white",
    padding: ".5rem",
    height: "80px",
    "& $heading": {
      color: "rgba(0,0,0,.8)",
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
function Card({ card }) {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation="5">
      <img
        src={require("../../../assets/media/explore_diet.svg").default}
        alt={card.title}
        className={classes.image}
      />
      <Typography variant="h4" component="h4" className={classes.heading}>
        {card.title}
      </Typography>
    </Paper>
  );
}
Card.prototype = {
  card: proptypes.object.isRequired,
};

export default Card;
