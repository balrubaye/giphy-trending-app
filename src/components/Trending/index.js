import React, { useState, useEffect } from "react";
import {
  Card,
  CardMedia,
  Typography,
  GridList,
  GridListTile,
  GridListTileBar,
} from "@material-ui/core";
import ImageList from "../ImageList";
const URL_TRENDING = `${process.env.REACT_APP_GIPHY_URL}gifs/trending?api_key=${process.env.REACT_APP_GIPHY_API_KEY}`;
// "https://api.giphy.com/v1/gifs/trending?api_key=M2xmRhz0VZaCUg3A8iw7PTCj0RnU590i";

export default function Trending() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchTrending = () => {
      fetch(URL_TRENDING)
        .then((res) => res.json())
        .then((da) => {
          setData(da.data);

          console.log(da);
        });
    };

    fetchTrending();
  }, []);

  const renderCards = (images) => {
    return (
      <GridList>
        {images.map((d, i) => (
          <GridListTile key={d.id}>
            <img src={d.images.downsized.url} />
            <GridListTileBar title={d.title} />
          </GridListTile>
        ))}
      </GridList>
    );
  };
  return (
    <div>
      <Typography variant="h4">Trending Gifs</Typography>

      <ImageList images={data} />
    </div>
  );
}
