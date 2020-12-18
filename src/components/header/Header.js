import "./Header.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Link to="/">
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="/about">
            <Button color="inherit">About</Button>
          </Link>
          <Link to="/contact">
            <Button color="inherit">Contact</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
