import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
} from "@material-ui/core";
import useSearchStickers from "./useSearchStickers";
import useSearchGifs from "./useSearchGifs";
import ImageList from "../ImageList";
import ImageTab from "../ImageTab";
import SearchImageTabs from "./SearchImageTabs";

export default function Search() {
  const [gifs, gifTerm, setGifTerm] = useSearchGifs("");
  const [stickers, stickerTerm, setStickerTerm] = useSearchStickers();

  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    //e.preventDefault();
    console.log(search);
    setGifTerm(search);
    setStickerTerm(search);
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <TextField
              fullWidth
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              placeholder="Enter your search"
            />
          </Grid>
          <Grid item xs={4}>
            <Button type="submit" color="primary">
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
      <hr />
      {gifTerm && (
        <>
          <Typography variant="h4">{`Search results for "${gifTerm}"`}</Typography>

          <SearchImageTabs gifs={gifs} stickers={stickers} />
        </>
      )}
    </div>
  );
}
