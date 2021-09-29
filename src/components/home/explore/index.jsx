import { Grid, Typography } from "@material-ui/core";
import React from "react";
import Card from "./Card";
import cards from "../../../assets/data/data";

function Explore() {
  return (
    <>
      <Typography component="h3" variant="h6" className="banner-heading">
        Explore
      </Typography>
      <Grid container style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {cards.map((card) => (
          <Grid
            key={card.title}
            item
            sm={6}
            md={3}
            xs={12}
            style={{ padding: "0.5rem" }}
          >
            <Card card={card} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Explore;
