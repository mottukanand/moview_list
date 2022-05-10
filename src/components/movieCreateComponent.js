import * as React from "react";
import {
  TextField,
  Button,
} from "@material-ui/core";
import { MovieDetailsContext } from "context/movieContext";

function MovieCreate() {
  const movieContext = React.useContext(MovieDetailsContext);

  const [movieName, setMovieName] = React.useState("");
  const [movieDuration, setMovieDuration] = React.useState(0);
  const [movieRating, setMovieRating] = React.useState(0);

  const handleNameChange = (e) => {
    const { value } = e.target;
    const re = /^[A-Za-z]+$/;
    if (value === "" || re.test(value)) {
      setMovieName(value);
    }
  };

  const clearValues = () => {
    setMovieName("");
    setMovieDuration(0);
    setMovieRating(0);
  };

  const handleSubmit = () => {
    if (movieName && movieDuration && movieRating) {
      let data = {};
      data.name = movieName;
      data.duration = movieDuration;
      data.rating = movieRating;
      movieContext.addMovieData(data);
      clearValues();
    }
  };

  return (
    <form>
      <TextField
        required
        error={false}
        style={{ width: "200px", margin: "5px" }}
        type="text"
        label="Name"
        variant="outlined"
        value={movieName}
        onChange={handleNameChange}
      />
      <br />
      <TextField
        required
        error={false}
        style={{ width: "200px", margin: "5px" }}
        type="number"
        label="Duration"
        variant="outlined"
        value={movieDuration}
        onChange={(e) => setMovieDuration(e.target.value)}
      />
      <br />
      <TextField
        required
        error={false}
        style={{ width: "200px", margin: "5px" }}
        type="number"
        label="Rating"
        variant="outlined"
        value={movieRating}
        onChange={(e) => setMovieRating(e.target.value)}
        helperText="Some important text"
      />
      <br />
      <Button
        variant="contained"
        color="primary"
        type="button"
        onClick={handleSubmit}
        disabled={!(movieName && movieDuration && movieRating)}
      >
        save
      </Button>
    </form>
  );
}

export default MovieCreate;
