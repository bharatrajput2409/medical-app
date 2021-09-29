import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { links } from "./links";
import Menu from "@material-ui/icons/Menu";
import SmallNav from "./SmallNav";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    fontSize: "32px",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha("#1234", 0.15),
    "&:hover": {
      backgroundColor: alpha("#1234", 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "7ch",
      "&:focus": {
        width: "15ch",
      },
    },
  },
  appbar: {
    [theme.breakpoints.up("md")]: {
      padding: "0 10rem",
    },
    borderBottom: "1px solid rgba(0,0,0,0.1)",
  },
  linkcontainer: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  link: {
    fontSize: "16px",
    padding: "0 1.5rem",
  },
  listbtns: {
    textAlign: "center",
  },
}));
export default function SearchAppBar() {
  const classes = useStyles();
  const [drawerStatus, setDrawerStatus] = useState(0);
  const handleDrawer = () => {
    setDrawerStatus(!drawerStatus);
  };
  return (
    <div className={classes.root}>
      <AppBar position="fixed" elevation="0" className={classes.appbar}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Medico
          </Typography>
          <div className={classes.linkcontainer}>
            {links.map((link) => (
              <Typography
                className={classes.link}
                key={link.name}
                variant="h6"
                noWrap
              >
                {link.name}
              </Typography>
            ))}
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <IconButton onClick={handleDrawer}>
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
      <SmallNav handleDrawer={handleDrawer} open={drawerStatus} />
    </div>
  );
}
