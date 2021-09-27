import { Typography } from "@material-ui/core";
import React from "react";

function Card({ animate, data }) {
  return (
    <>
      <div
        className={`left ${animate ? "animate" : ""}`}
        style={{ backgroundImage: `url(${data.img})` }}
      ></div>
      <div className="right">
        <Typography
          component="h2"
          className={`heading ${animate ? "animate" : ""}`}
        >
          Working Out Is for Every Body: 3 Organizations Promoting Inclusive
          Fitness
        </Typography>
        <Typography
          component="p"
          className={`content ${animate ? "animate" : ""}`}
        >
          One was from a guy I briefly dated, who told me that my soft belly
          wasn’t “that bad.” Another was from a roommate who said that for as
          often as I went to the gym, she’d expect more noticeable results. Both
          cut right to the bone of my body insecurities, such that I still think
          of them more than 15 years later. One was from a guy I briefly dated,
          who told me that my soft belly wasn’t “that bad.” Another was from a
          roommate who said that for as often as I went to the gym, she’d expect
          more noticeable results. Both cut right to the bone of my body
          insecurities, such that I still think of them more than 15 years
          later. One was from a guy I briefly dated, who told me that my soft
          belly wasn’t “that bad.” Another was from a roommate who said that for
          as often as I went to the gym, she’d expect more noticeable results.
          Both cut right to the bone of my body insecurities, such that I still
          think of them more than 15 years later.
        </Typography>
      </div>
    </>
  );
}

export default Card;
