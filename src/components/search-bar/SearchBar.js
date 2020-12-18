import "./SearchBar.css";
import React from "react";
import { TextField, Grid, Button } from "@material-ui/core";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
  }
  render() {
    return (
      <form className="form" noValidate autoComplete="off">
        <Grid container direction="row" justify="center" alignItems="center">
          <TextField
            required
            id="standard-required"
            label="Search News"
            value={this.state.searchTerm}
            onChange={(e) => this.setState({ searchTerm: e.target.value })}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.props.handleSearchTerm(this.state.searchTerm)}
          >
            Search
          </Button>
        </Grid>
      </form>
    );
  }
}

export default SearchBar;
