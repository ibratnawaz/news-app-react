import "./News.css";
import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CssBaseline,
  Container,
} from "@material-ui/core";

function News({ author, description, publishedAt, title, urlToImage, url }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" className="news">
        <Card>
          <CardActionArea target="_blank" href={url}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="auto"
              image={urlToImage}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Author - {author}
            </Button>
            <Button size="small" color="primary">
              Published At - {new Date(publishedAt).toDateString()}
            </Button>
          </CardActions>
        </Card>
      </Container>
    </React.Fragment>
  );
}

export default News;
