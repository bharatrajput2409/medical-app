import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { Facebook, Instagram, LinkedIn } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../media/logo.svg";
import footer_img from "../../media/footer_img.svg";
const useStyles = makeStyles((theme) => ({
  root: {
    background: "white",
    marginTop: "1rem",
    position: "relative",
    overflow: "hidden",
  },
  grid: {
    maxWidth: "800px",
  },
  companyInfo: {
    padding: "2rem 1rem",
    display: "flex",
    "& > img": {
      height: "32px",
      margin: "0 1rem",
    },
    alignItems: "center",
    color: "rgba(0,0,0,0.6)",
    "& > h6": {
      fontWeight: "500",
    },
  },
  socialIcons: {
    margin: ".5rem",
    fontSize: "1.5rem",
    color: "rgba(0,0,0,0.7)",
  },
  link: {
    color: "rgba(0,0,0,0.8)",
    textDecoration: "none",
    padding: ".5rem 0rem",
    display: "block",
  },
  bottomInfo: {
    textAlign: "center",
    fontWeight: "500",
    padding: ".5rem 0",
    borderTop: "1px solid rgba(0,0,0,0.2)",
    marginTop: ".5rem",
  },
  footer_image: {
    position: "absolute",
    right: "-100px",
    top: "-100px",
    opacity: "0.8",
  },
}));
function Footer() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <img
        src={footer_img}
        alt="footer background image"
        className={classes.footer_image}
      />
      <div style={{ maxWidth: "1400px", margin: "0 auto " }}>
        <Grid container className={classes.grid}>
          <Grid item xs={12} className={classes.companyInfo}>
            <img src={logo} alt="logo" className={classes.logo} />
            <Typography
              variant="h4"
              component="h6"
              className={classes.companyHeading}
            >
              Medico
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ paddingBottom: "2rem" }}>
            <Typography>© 2021 Privacy policy Manage cookies</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Facebook className={classes.socialIcons} />
            <LinkedIn className={classes.socialIcons} />
            <Instagram className={classes.socialIcons} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Popular</Typography>
            <Link to="/health" className={classes.link}>
              Health Articles
            </Link>
            <Link to="/health" className={classes.link}>
              Health Articles
            </Link>
            <Link to="/health" className={classes.link}>
              Health Articles
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Popular</Typography>
            <Link to="/health" className={classes.link}>
              Health Articles
            </Link>
            <Link to="/health" className={classes.link}>
              Health Articles
            </Link>
            <Link to="/health" className={classes.link}>
              Health Articles
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Popular</Typography>
            <Link to="/health" className={classes.link}>
              Health Articles
            </Link>
            <Link to="/health" className={classes.link}>
              Health Articles
            </Link>
            <Link to="/health" className={classes.link}>
              Health Articles
            </Link>
          </Grid>
        </Grid>
      </div>
      <Typography component="h6" className={classes.bottomInfo}>
        Developed By{" "}
        <Link to="/" className={classes.link} style={{ display: "inline" }}>
          Bharat Rajput
        </Link>
      </Typography>
    </Paper>
  );
}

export default Footer;
