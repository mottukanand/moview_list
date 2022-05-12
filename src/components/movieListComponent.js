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

  const convertMinuteToHours = (minutes) => {
    try {
      var Hours = (minutes / 60).toFixed(2);
      return Hours;
    } catch (err) {
      return 0;
    }
  };
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {movieData && movieData.length ? (
        movieData.map((movie, index) => (
          <>
            <ListItem alignItems="flex-start" key={index}>
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
                      mr={3}
                    >
                      {`Duration: ${convertMinuteToHours(movie.duration)} h`}
                    </Typography>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {`Rating: ${movie.rating}/100`}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            {index !== movieData.length - 1 ? (
              <Divider variant="inset" component="li" />
            ) : null}
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
