import { Link, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import image from "../../media/bharat_dark_bg.png";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: ".5rem",
    margin: ".25rem",
    display: "block",
    cursor: "pointer",
    display: "flex",
    borderRadius: ".5rem",
    "&:hover": {
      background: "rgba(0,0,0,0.1)",
    },
  },
  typographHeading: {
    fontSize: "1rem",
    color: "rgba(0,0,0,0.7)",
    fontWeight: "500",
  },
  leftcontainer: {},
  image: {
    width: "60px",
    height: "60px",
    borderRadius: "8px",
  },
  rightcontainer: {
    padding: "0 0 0 4px",
    width: "calc(100% - 60px)",
  },
  typographycaption: {
    fontSize: "1rem",
    color: "rgba(0,0,0,0.7)",
  },
}));
function SuggestionCard() {
  const classes = useStyles();
  return (
    <Link className={classes.root} href="/home">
      <div className={classes.leftcontainer}>
        <img src={image} className={classes.image} />
      </div>
      <div className={classes.rightcontainer}>
        <Typography
          variant="caption"
          className={classes.typographHeading}
          noWrap
          component="p"
        >
          Heart atack.Symptoms, Cause, First aid.
        </Typography>
        <Typography
          variant="caption"
          noWrap
          component="p"
          className={classes.typographycaption}
        >
          Heart atack is generally caused by...
        </Typography>
      </div>
    </Link>
  );
}

export default SuggestionCard;
