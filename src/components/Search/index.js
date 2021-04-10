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
import ImageList from "../ImageList";
const URL_SEARCH = `${process.env.REACT_APP_GIPHY_URL}stickers/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}`;

export default function Search() {
  const [data, setData] = useState([]);
  const [term, setTerm] = useState("");
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchData = () => {
      fetch(`${URL_SEARCH}&q=${term}`)
        .then((res) => res.json())
        .then((res) => {
          setData(res.data || []);
          console.log(res);
        });
    };

    fetchData();
  }, [term]);

  const handleSubmit = (e) => {
    //e.preventDefault();
    console.log(search);
    setTerm(search);
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
      {term && (
        <>
          <Typography variant="h4">{`Search results for "${term}"`}</Typography>
          <ImageList images={data} />
        </>
      )}
    </div>
  );
}
