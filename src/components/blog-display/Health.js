import React from "react";
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import SuggestionCard from "./SuggestionCard";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "150vh",
    background: "rgba(0,0,0,0.05)",
  },
  leftcontainer: {},
  rightcontainer: {
    position: "relative",
    "& >div": {
      position: "sticky",
      top: 20,
      margin: "5rem 0 0 0",
    },
    padding: "0 .5rem  ",
  },
  suggestion: {
    padding: "0 1rem",
    color: "rgba(0,0,0,0.7)",
  },
  articlecontainer: {
    maxWidth: "1100px",
    margin: ".5rem 0 0 auto",
    padding: ".5rem",
  },
}));
function Health() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} md={9} className={classes.leftcontainer}>
        <Paper className={classes.articlecontainer} component="article">
          artigle here
        </Paper>
      </Grid>
      <Grid item xs={12} md={3} className={classes.rightcontainer}>
        <Paper>
          <Typography variant="h6" className={classes.suggestion}>
            Suggestions
          </Typography>
          {[1, 2, 3, 4, 5].map((item) => (
            <SuggestionCard />
          ))}
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Health;
