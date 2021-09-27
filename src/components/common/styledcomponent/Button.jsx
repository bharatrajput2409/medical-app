import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { theme } from "../../../index";
const color = "#3d5afe";
const styles = {
  root: {
    background: color,
    borderRadius: "6px",
    color: "white",
    padding: ".4rem 1.2rem",
    border: "2px solid white",
    "&:hover": {
      color: color,
      background: "white",
      border: `2px solid ${color}`,
    },
    "&:disabled": {
      opacity: ".5",
      color: "white",
    },
  },
  rootOutlined: {
    borderRadius: "4px",
    color: color,
    padding: ".4rem 1rem",
    border: `1px solid ${color}`,
    "&:hover": {
      color: "white",
      background: color,
    },
    "&:disabled": {
      color: "rgba(0, 0, 0, 0.3)",
      border: "1px solid rgba(0, 0, 0, 0.3)",
    },
  },
  rootText: {
    color: color,
    padding: ".4rem 1rem",
    "&:disabled": {
      color: "rgba(0, 0, 0, 0.3)",
    },
  },
};

function ClassNames(props) {
  let { classes, children, className, variant, ...other } = props;
  if (variant === undefined || variant === "contained") {
    variant = "root";
  } else if (variant === "text") {
    variant = "rootText";
  } else {
    variant = "rootOutlined";
  }
  return (
    <Button className={clsx(classes[variant], className)} {...other}>
      {children || "class names"}
    </Button>
  );
}

ClassNames.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(ClassNames);
