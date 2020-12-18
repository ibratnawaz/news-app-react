import React from "react";
import SearchBar from "../search-bar/SearchBar";
import NewsList from "../news/NewsList";

const searchNews = async (searchTerm) => {
  try {
    const data = await fetch(
      `http://newsapi.org/v2/everything?q=${searchTerm}&apiKey=7b5037221652469b9b407a7260e34eae`
    );
    return data.json();
  } catch (error) {
    console.log(error);
  }
};

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsList: [],
    };
    this.handleSearchTerm = this.handleSearchTerm.bind(this);
  }

  async handleSearchTerm(searchTerm) {
    const data = await searchNews(searchTerm);
    if (data) this.setState({ newsList: data.articles });
  }

  render() {
    return (
      <div>
        <SearchBar handleSearchTerm={this.handleSearchTerm} />
        <NewsList newsList={this.state.newsList} />
      </div>
    );
  }
}

export default Homepage;
