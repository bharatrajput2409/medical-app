import { Button, makeStyles, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    width: "300px",
    top: "43px",
    zIndex: "100",
    padding: ".5rem",
    bottom: "0",
    boxSizing: "border-box",
    transition: "transform 300ms ease-in-out",
  },
  button: {
    position: "absolute",
    top: "0px",
    right: "-60px",
    background: "white",
    zIndex: "99",
    "&:hover": {
      background: "white",
    },
  },
  heading: {
    color: "rgba(0,0,0,0.7)",
    paddingBottom: "2rem",
  },
}));
function Tip() {
  const classes = useStyles();
  const [translate, setTranslate] = useState(290);
  const style = {
    transform: `translate(-${translate}px)`,
  };
  const dialogHandler = () => {
    if (translate == 290) {
      setTranslate(0);
    } else {
      setTranslate(290);
    }
  };
  return (
    <Paper className={classes.root} style={style}>
      <Button className={classes.button} onClick={dialogHandler}>
        {translate == 0 ? "Close" : "Tips"}
      </Button>
      <Typography
        variant="h6"
        style={{ textAlign: "center" }}
        className={classes.heading}
      >
        Tips for writing blog
      </Typography>
    </Paper>
  );
}

export default Tip;
