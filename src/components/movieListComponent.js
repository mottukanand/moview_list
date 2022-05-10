import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { MovieDetailsContext } from "context/movieContext";

function MovieList() {
  const movieContext = React.useContext(MovieDetailsContext);
  const { movieData } = movieContext;
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {movieData && movieData.length ? (
        movieData.map((movie) => (
          <>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={movie.name} src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={movie.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {`${movie.duration} h`}
                    </Typography>
                    {` --- ${movie.rating}/100`}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ))
      ) : (
        <ListItem alignItems="flex-start">
          <ListItemText primary={"No Movies Found"} />
        </ListItem>
      )}
    </List>
  );
}

export default MovieList;
