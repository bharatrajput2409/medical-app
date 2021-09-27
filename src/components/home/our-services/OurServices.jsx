import { Grid, Typography } from "@material-ui/core";
import React from "react";
import Card1 from "./Card1";

function OurServices() {
  return (
    <div className="our-services">
      <Typography component="h3" variant="h6" className="banner-heading">
        our services
      </Typography>
      <Grid container style={{ maxWidth: "1300px", margin: "1rem auto" }}>
        {[1, 2, 3, 4].map((item) => (
          <Grid item xs={12} md={6} lg={3} style={{ padding: "0 .5rem" }}>
            <Card1 />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default OurServices;
