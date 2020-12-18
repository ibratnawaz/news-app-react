import React from "react";
import News from "./News";

class NewsList extends React.Component {
  render() {
    return this.props.newsList.map((news, index) => {
      return <News key={index} {...news} />;
    });
  }
}

export default NewsList;
