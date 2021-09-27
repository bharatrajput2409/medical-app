import { Grid, Typography } from "@material-ui/core";
import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

function OurServices() {
  return (
    <div className="our-services">
      <Typography component="h3" variant="h6" className="banner-heading">
        our services
      </Typography>
      <Grid container style={{ maxWidth: "1400px", margin: "1rem auto" }}>
        {[<Card1 />, <Card2 />, <Card3 />, <Card1 />].map((item, index) => (
          <Grid
            item
            xs={12}
            md={6}
            lg={3}
            style={{ padding: "0 .5rem", margin: "0.5rem 0" }}
          >
            {item}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default OurServices;
