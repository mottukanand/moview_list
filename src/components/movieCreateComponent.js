import * as React from "react";
import { TextField, Button } from "@material-ui/core";
import { MovieDetailsContext } from "context/movieContext";

function MovieCreate() {
  const movieContext = React.useContext(MovieDetailsContext);

  const [movieName, setMovieName] = React.useState("");
  const [movieDuration, setMovieDuration] = React.useState(null);
  const [movieRating, setMovieRating] = React.useState(null);

  const handleNameChange = (e) => {
    const { value } = e.target;
    const re = /^[aA-zZ\s]+$/;
    if (value === "" || re.test(value)) {
      setMovieName(value.trimStart());
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
        style={{ width: "200px", margin: "10px" }}
        type="number"
        label="Duration"
        variant="outlined"
        value={movieDuration}
        onChange={(e) =>
          e.target.value >= 0 && setMovieDuration(e.target.value)
        }
        placeholder="Duration: minute"
        helperText="*Enter in minutes"
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
        onChange={(e) =>
          e.target.value >= 0 &&
          e.target.value <= 100 &&
          setMovieRating(e.target.value)
        }
        placeholder="Rating: x/100"
        helperText="*Maximum rating value is 100"
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
