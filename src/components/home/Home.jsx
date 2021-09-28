import { Typography } from "@material-ui/core";
import React from "react";
import Footer from "../footer";
import Explore from "./explore";
import "./home.css";
import OurServices from "./our-services/OurServices";
import TopReads from "./top-reads";
function Home() {
  return (
    <div className="container">
      <div className="top-banner">
        <div className="heading-wraper">
          <Typography variant="h1" className="slogan-heading">
            Everything at one place.
          </Typography>
          <Typography component="h2" className="slogan-description">
            Shades of blue include cyan, navy, turquoise, aqua, midnight blue,
            sky blue, royal blue, and aquamarine.
          </Typography>
        </div>
      </div>
      <OurServices />
      <TopReads />
      <Explore />
      <Footer />
    </div>
  );
}

export default Home;
