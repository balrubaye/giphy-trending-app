import {
  TextField,
  Button,
  Typography,
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
} from "@material-ui/core";
import useStyles from "./styles";

export default function ImageList({ images }) {
  const classes = useStyles();
  return (
    <GridList className={classes.gridList}>
      {images.map((d, i) => (
        <GridListTile className={classes.gridTile} style={{ height: "480px" }}>
          <img src={d.images.downsized.url} />
          <GridListTileBar title={d.title} />
        </GridListTile>
      ))}
    </GridList>
  );
}
