import { Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Card from "./Card";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
function TopReads() {
  const [activePage, setActivePage] = useState(0);
  const [animate, setAnimate] = useState(0);
  const [disabled, setDisabled] = useState(0);
  const data = [
    {
      img: "https://picsum.photos/id/23/200",
    },
    {
      img: "https://picsum.photos/id/24/200",
    },
    {
      img: "https://picsum.photos/id/25/200",
    },
    {
      img: "https://picsum.photos/id/26/200",
    },
  ];
  const updatePage = (page) => {
    setTimeout(() => {
      console.log("updating data....");
      setActivePage(page);
      setAnimate(0);
      setDisabled(0);
    }, 500);
  };
  const pageHandler = (page, dir) => () => {
    if (disabled) return;
    setDisabled(1);
    const len = data.length;
    if (dir === "prev") {
      setAnimate(1);
      updatePage((activePage - 1 + len) % len);
    } else if (dir === "next") {
      setAnimate(1);
      updatePage((activePage + 1) % len);
    } else {
      if (page !== activePage) {
        setAnimate(1);
        updatePage(page);
      }
    }
  };
  return (
    <>
      <Typography component="h3" variant="h6" className="banner-heading">
        Top Reads
      </Typography>
      <div className="top-reads-container">
        <Paper className="top">
          <Card data={data[activePage]} animate={animate} />
          <div className="pagination-container">
            {[
              <div key="prev" onClick={pageHandler(0, "prev")}>
                <ArrowBackIosIcon />
              </div>,
              ...data.map((item, index) => (
                <div key={item.img} onClick={pageHandler(index, "curr")}>
                  <Paper
                    className={`page ${activePage == index ? "active" : ""}`}
                  ></Paper>
                </div>
              )),
              <div key="next" onClick={pageHandler(0, "next")}>
                <ArrowForwardIosIcon />
              </div>,
            ]}
          </div>
        </Paper>
        <div className="bottom"></div>
      </div>
    </>
  );
}

export default TopReads;
