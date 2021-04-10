import React from "react";
import {
  AppBar,
  Container,
  Typography,
  makeStyles,
  Link,
  Toolbar,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import useStyles from "./styles";
export default function Layout(props) {
  const classes = useStyles();
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h4" style={{ flexGrow: 2 }}>
            Best gifs
          </Typography>
          <div
            style={{
              display: "inline-flex",
              justifyContent: "space-evenly",
              alignItems: "start",
              flexGrow: 1,
            }}
          >
            <Link
              to="/trending"
              variant="button"
              color="inherit"
              component={RouterLink}
            >
              Trending
            </Link>

            <Link
              to="/search"
              color="inherit"
              variant="button"
              component={RouterLink}
            >
              Search
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <Container fixed className={classes.main}>
        {props.children}
      </Container>
    </>
  );
}
