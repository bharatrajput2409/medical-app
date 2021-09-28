import { Grid, Typography } from "@material-ui/core";
import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";

function Explore() {
  return (
    <>
      <Typography component="h3" variant="h6" className="banner-heading">
        Explore
      </Typography>
      <Grid container style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {[<Card1 />, <Card2 />, <Card3 />, <Card4 />].map((card, index) => (
          <Grid
            key={index}
            item
            sm={6}
            md={3}
            xs={12}
            style={{ padding: "0.5rem" }}
          >
            {card}
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Explore;
