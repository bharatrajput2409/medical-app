import { Button, makeStyles, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    width: "300px",
    top: "41px",
    zIndex: "100",
    padding: ".6rem",
    boxSizing: "border-box",
    bottom: "0",
    transition: "transform 300ms ease-in-out",
    right: "0",
  },
  button: {
    position: "absolute",
    top: "0",
    left: "-60px",
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
  url: {
    background: "rgba(0,0,0,0.2)",
    padding: ".5rem",
    borderRadius: ".25rem",
    cursor: "pointer",
    margin: ".5rem 0",
  },
}));
function Tip() {
  const classes = useStyles();
  const [translate, setTranslate] = useState(290);
  const [imgUrls, setImgUrls] = useState([
    "https://medico.com/media/heard-image-12355332.png",
  ]);
  const style = {
    transform: `translate(${translate}px)`,
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
        {translate == 0 ? "Close" : "Utils"}
      </Button>
      <Typography
        variant="h6"
        style={{ textAlign: "center" }}
        className={classes.heading}
      >
        Utility function
      </Typography>
      <Typography variant="subtitle2">Image upload</Typography>
      <Button>
        <input type="file" />
      </Button>
      {imgUrls.map((url) => (
        <Typography className={classes.url}>{url}</Typography>
      ))}
    </Paper>
  );
}

export default Tip;
