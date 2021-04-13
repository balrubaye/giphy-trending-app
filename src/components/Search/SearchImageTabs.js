import React, { useState } from "react";
import { Tabs, Tab, Paper } from "@material-ui/core";
import useSearchGifs from "./useSearchGifs";
import useSearchStickers from "./useSearchStickers"
import ImageList from "../ImageList";

function TabPanel({ value, index, ...props }) {
  return value === index ? <div>{props.children}</div> : null;
}

export default function SearchImageTabs({stickers, gifs}) {
  const [val, setVal] = useState(0);
  const handleChange = (e, newVal) => {
    // console.log(e, newVal);
    setVal(newVal);
  };
  return (
    <Paper>
      <Tabs value={val} onChange={handleChange}>
        <Tab label="stickers" />
        <Tab label="gifs" />
      </Tabs>
      <TabPanel value={val} index={0}>
        <ImageList images={stickers} />
      </TabPanel>
      <TabPanel value={val} index={1}>
        <ImageList images={gifs} />
      </TabPanel>
    </Paper>
  );
}
